import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from '@common/decorators/setMetadata';
import { LoginDto, LoginOutput } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { MutationResponse } from '@common/dtos/mutation-response.dto';
import { CurrentUser } from '@common/decorators/getCurrentUser';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => LoginOutput)
  async login(@Args('input') input: LoginDto): Promise<LoginOutput> {
    try {
      const loginToken = await this.authService.localLogin(input);
      return { ok: true, ...loginToken };
    } catch (e) {
      return { ok: false, message: e.message };
    }
  }

  @Mutation(() => MutationResponse)
  async logout(@CurrentUser() user: { id: number }): Promise<MutationResponse> {
    try {
      await this.authService.logout(user.id);
      return { ok: true };
    } catch (e) {
      return { ok: false, message: e.message };
    }
  }
}
