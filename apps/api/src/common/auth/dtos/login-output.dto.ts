import { Field, ObjectType } from '@nestjs/graphql';
import { MutationResponse } from '@common/dtos/mutation-response.dto';

@ObjectType()
export class LoginOutput extends MutationResponse {
  @Field({ nullable: true })
  token?: string;
}
