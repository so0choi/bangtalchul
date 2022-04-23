import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query, Context } from '@nestjs/graphql';
import { LoginDto } from 'domains/user/dtos/login.dto';
import { User } from 'entities/user.entity';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  async login(@Args('input') input: LoginDto) {
    return this.authService.login(input);
  }
}
