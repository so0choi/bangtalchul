import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'apollo-server-core';
import { GqlAuthGuard } from 'auth/guards/gql.guard';

import { User } from 'entities/user.entity';
import { CreateDto } from './dtos/create.dto';
import { LoginDto } from './dtos/login.dto';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Mutation(() => User, {
    name: 'signup',
  })
  async create(@Args('user') createDto: CreateDto) {
    return this.userService.create(createDto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, {
    name: 'user',
  })
  async getOne(@Args('id') id: number) {
    return this.userService.findOneById(id);
  }
}
