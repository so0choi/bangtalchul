import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'decorators/setMetadata';
import { LoginDto } from 'domains/user/dtos/login.dto';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Query(() => String)
  async login(@Args('input') input: LoginDto) {
    return this.authService.login(input);
  }
}
