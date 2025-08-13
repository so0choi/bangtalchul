import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'apollo-server-core';
import { GqlAuthGuard } from '@common/auth/guards/gql.guard';
import { CurrentUser } from '@common/decorators/getCurrentUser';
import { Public } from '@common/decorators/setMetadata';
import { UsersService } from './users.service';
import { Prisma, Prisma, User } from '@prisma/client';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Public()
  @Mutation(() => User, {
    name: 'signup',
  })
  async create(@Args('user') createDto: User) {
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
    @Args('data') updateDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.edit(user, updateDto);
  }
}
