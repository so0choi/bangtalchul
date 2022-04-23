import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from 'domains/user/dtos/login.dto';
import { UsersService } from 'domains/user/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<true> {
    const user = await this.usersService.findOneOrThrowByEmail(email);

    await this.compareHashOrThrow(password, user.password);
    return true;
  }

  async compareHashOrThrow(plain: string, hashed: string): Promise<void> {
    if (!(await bcrypt.compare(plain, hashed))) {
      throw new NotFoundException();
    }
  }

  async login({ email, password }: LoginDto) {
    await this.validateUser({ email, password });
    const payload = { email, password };
    return this.jwtService.sign(payload);
  }
}
