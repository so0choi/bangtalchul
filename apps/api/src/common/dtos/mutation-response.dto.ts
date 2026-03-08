import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationResponse {
  @Field((type) => Boolean)
  ok: boolean;

  @Field({ nullable: true })
  message?: string;
}
