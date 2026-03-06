import { Field, InputType } from '@nestjs/graphql';
import { Provider } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field(() => Provider, { nullable: true })
  provider?: Provider;
}
