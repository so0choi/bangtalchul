import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'apollo-server-core';
import { GqlAuthGuard } from 'auth/guards/gql.guard';
import { CurrentUser } from 'decorators/getCurrentUser';
import { Public } from 'decorators/setMetadata';

import { User } from 'domains/user/entities/user.entity';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
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
  async getProfile(@CurrentUser() user: User) {
    return this.userService.findOneByEmail(user.email);
  }

  @Mutation(() => User, {
    name: 'editProfile',
  })
  async editProfile(
    @CurrentUser() user: User,
    @Args('data') updateDto: UpdateDto,
  ) {
    return this.userService.edit(user, updateDto);
  }
}
