import { MutationResponse } from '@common/dtos/mutation-response.dto';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../models/user.model';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  provider?: string;

  @Field(() => [String], { nullable: true })
  preferenceTags?: string[];

  @Field({ nullable: true })
  phone?: string;
}

@ObjectType()
export class CreateUserOutput extends MutationResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}
