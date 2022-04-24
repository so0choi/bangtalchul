import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'apollo-server-core';
import { GqlAuthGuard } from 'auth/guards/gql.guard';
import { CurrentUser } from 'decorators/getCurrentUser';
import { Public } from 'decorators/setMetadata';

import { User } from 'entities/user.entity';
import { CreateDto } from './dtos/create.dto';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Public()
  @Mutation(() => User, {
    name: 'signup',
  })
  async create(@Args('user') createDto: CreateDto) {
    return this.userService.create(createDto);
  }

  @Query(() => User, {
    name: 'profile',
  })
  async getOne(@CurrentUser() user: User) {
    return this.userService.findOneOrThrowByEmail(user.email);
  }
}
