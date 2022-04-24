import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from 'domains/user/dtos/login.dto';
import { UsersService } from 'domains/user/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<User> {
    const user = await this.usersService.findOneOrThrowByEmail(email);

    await this.compareHashOrThrow(password, user.password);
    return user;
  }

  async compareHashOrThrow(plain: string, hashed: string): Promise<void> {
    if (!(await bcrypt.compare(plain, hashed))) {
      throw new NotFoundException();
    }
  }

  async login({ email, password }: LoginDto) {
    const validUser = await this.validateUser({ email, password });
    const payload = { id: validUser.id, email };
    return this.jwtService.sign(payload);
  }
}
