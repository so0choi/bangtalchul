import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@common/decorators/getCurrentUser';
import { Public } from '@common/decorators/setMetadata';
import { UsersService } from './users.service';
import { Prisma, User as PrismaUser } from '@prisma/client';
import { User as UserModel } from './entities/user.entity';
import { CreateUserInput } from './dtos/create.dto';
import { UpdateUserInput } from './dtos/update.dto';
import { LoginInput } from './dtos/login.dto';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Public()
  @Mutation(() => UserModel, {
    name: 'signup',
  })
  async create(@Args('user') createDto: CreateUserInput) {
    return this.userService.create(createDto);
  }

  @Query(() => UserModel, {
    name: 'profile',
  })
  async getProfile(@CurrentUser() user: PrismaUser) {
    return this.userService.findOneByEmail(user.email);
  }

  @Mutation(() => UserModel, {
    name: 'editProfile',
  })
  async editProfile(
    @CurrentUser() user: PrismaUser,
    @Args('data') updateDto: UpdateUserInput,
  ) {
    return this.userService.edit(user, updateDto);
  }
}
