import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";

export enum Provider {
  local = 'local',
  google = 'google',
  github = 'github',
}

registerEnumType(Provider, { name: 'Provider' });

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => Provider)
  provider: Provider;

  @Field()
  updatedAt: Date;
  @Field()
  createdAt: Date;
}
