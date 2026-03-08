import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from '@common/decorators/setMetadata';
import { LoginDto } from '../../modules/user/dtos/login.dto';
import { LoginOutput } from './dtos/login-output.dto';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => LoginOutput)
  async login(@Args('input') input: LoginDto): Promise<LoginOutput> {
    try {
      const token = await this.authService.localLogin(input);
      return { ok: true, token };
    } catch (e) {
      return { ok: false, message: e.message };
    }
  }
}
