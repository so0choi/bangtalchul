import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'decorators/setMetadata';
import { LoginDto } from 'domains/user/dtos/login.dto';

import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Query(() => String)
  async login(@Args('input') input: LoginDto) {
    return this.authService.localLogin(input);
  }
}
