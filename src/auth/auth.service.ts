import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from 'domains/user/dtos/login.dto';
import { UsersService } from 'domains/user/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'domains/user/entities/user.entity';
import { CreateJwtTokenDto } from './dtos/createJwtToken.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(email);

    await this.compareHashOrThrow(password, user.password);
    return user;
  }

  async compareHashOrThrow(plain: string, hashed: string): Promise<void> {
    if (!(await bcrypt.compare(plain, hashed))) {
      throw new NotFoundException();
    }
  }

  async localLogin({ email, password }: LoginDto) {
    const validUser = await this.validateUser({ email, password });
    const payload = { id: validUser.id, email };
    return this.getJwtToken(payload);
  }

  async oauthLogin(inputUser: User) {
    let user = await this.usersService.findOneByEmail(inputUser.email);
    if (!user) {
      user = await this.usersService.create({
        email: user.email,
        provider: user.provider,
        password: `${user.email}:${Date.now()}`,
        name: user.name,
      });
    }
    return this.getJwtToken({ email: user.email, id: user.id });
  }

  getJwtToken(createJwtTokenDto: CreateJwtTokenDto) {
    return this.jwtService.sign(createJwtTokenDto);
  }
}
