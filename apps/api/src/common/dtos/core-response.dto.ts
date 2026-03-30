import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreResponse {
  @Field((type) => Boolean)
  ok: boolean;

  @Field({ nullable: true })
  message?: string;
}
