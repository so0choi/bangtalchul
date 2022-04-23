import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDto {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;
}
