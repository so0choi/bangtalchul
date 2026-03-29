import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { CreateJwtTokenDto } from './dtos/createJwtToken.dto';
import { PrismaService } from '@db/prisma.service';
import { UserModel } from '@prisma/models/User';
import { Ok, Result } from '@common/types/result.type';

export const ACCESS_TOKEN_EXPIRES_IN = 60 * 15; // 15분
const REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24 * 7; // 7일
const REFRESH_TOKEN_EXPIRES_IN_AUTOLOGIN = 60 * 60 * 24 * 30; // 30일

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<UserModel> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('INVALID_CREDENTIALS');
    }

    await this.compareHashOrThrow(password, user.password);
    return user;
  }

  async compareHashOrThrow(plain: string, hashed: string): Promise<void> {
    if (!(await bcrypt.compare(plain, hashed))) {
      throw new UnauthorizedException('INVALID_CREDENTIALS');
    }
  }

  async localLogin({ email, password, autologin }: LoginDto) {
    const validUser = await this.validateUser({ email, password });
    const payload = { id: validUser.id, email, autologin: Boolean(autologin) };

    const accessToken = this.getAccessToken(payload);
    const refreshToken = this.getRefreshToken(payload);

    const refreshExpiresIn = autologin
      ? REFRESH_TOKEN_EXPIRES_IN_AUTOLOGIN
      : REFRESH_TOKEN_EXPIRES_IN;
    const expiresAt = new Date(Date.now() + refreshExpiresIn * 1000);

    await this.prismaService.session.create({
      data: {
        userId: validUser.id,
        refreshToken,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      refreshExpiresIn,
    };
  }

  async oauthLogin(inputUser: UserModel) {
    let user = await this.prismaService.user.findUnique({
      where: { email: inputUser.email },
    });
    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          email: user.email,
          provider: user.provider,
          password: `${user.email}:${Date.now()}`,
          name: user.name,
        },
      });
    }
    return this.getAccessToken({
      email: user.email,
      id: user.id,
      autologin: false,
    });
  }

  getAccessToken(createJwtTokenDto: CreateJwtTokenDto) {
    return this.jwtService.sign(createJwtTokenDto);
  }

  getRefreshToken(payload: CreateJwtTokenDto) {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: payload.autologin
        ? REFRESH_TOKEN_EXPIRES_IN_AUTOLOGIN
        : REFRESH_TOKEN_EXPIRES_IN,
    });
  }

  async refreshAccessToken(token: string) {
    const session = await this.prismaService.session.findUnique({
      where: { refreshToken: token },
      include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) {
      throw new NotFoundException('SESSION_EXPIRED');
    }

    const payload: CreateJwtTokenDto = {
      id: session.user.id,
      email: session.user.email,
      autologin:
        session.expiresAt >
        new Date(Date.now() + REFRESH_TOKEN_EXPIRES_IN * 1000),
    };

    return {
      accessToken: this.getAccessToken(payload),
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    };
  }

  async logout(userId: number): Promise<void> {
    await this.prismaService.session.deleteMany({ where: { userId } });
  }
}
