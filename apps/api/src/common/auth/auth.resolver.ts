import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from '@common/decorators/setMetadata';
import { LoginInput } from '../../modules/user/dtos/login.dto';

import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => String, {
    name: 'login',
  })
  async login(@Args('input') input: LoginInput) {
    return this.authService.localLogin(input);
  }
}
