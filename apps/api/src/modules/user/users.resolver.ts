import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@common/decorators/getCurrentUser';
import { Public } from '@common/decorators/setMetadata';
import { UsersService } from './users.service';
import { UserModel } from '@prisma/models';
import { User } from './models/user.model';
import { CreateUserInput, CreateUserOutput } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { log } from 'node:console';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Public()
  @Mutation(() => CreateUserOutput, {
    name: 'signup',
  })
  async createUser(
    @Args('createUserInput') input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    const result = await this.userService.create(input);
    if (result.ok === false) {
      return { ok: false, message: result.error };
    }

    return { ok: true, user: result.data };
  }

  @Query(() => User, {
    name: 'profile',
  })
  async getProfile(@CurrentUser() user: UserModel) {
    return this.userService.findOneByEmail(user.email);
  }

  @Mutation(() => User, {
    name: 'editProfile',
  })
  async editProfile(
    @CurrentUser() user: UserModel,
    @Args('data') updateDto: UpdateDto,
  ) {
    return this.userService.edit(user, updateDto);
  }
}
