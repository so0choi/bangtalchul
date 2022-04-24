import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'domains/user/users.module';
import { config } from 'dotenv';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';

import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

config();

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, AuthResolver],
})
export class AuthModule {}
