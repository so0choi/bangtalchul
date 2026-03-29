import {
  Field,
  InputType,
  OmitType,
  PickType,
  ObjectType,
  Int,
} from '@nestjs/graphql';
import { CreateUserInput } from '../../../modules/user/dtos/create.dto';

@InputType()
export class LoginDto extends PickType(CreateUserInput, ['email', 'password']) {
  @Field({ nullable: true })
  autologin?: boolean;
}

import { MutationResponse } from '@common/dtos/mutation-response.dto';

@ObjectType()
export class LoginOutput extends MutationResponse {
  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field(() => Int, { nullable: true })
  expiresIn?: number;

  @Field(() => Int, { nullable: true })
  refreshExpiresIn?: number;
}
