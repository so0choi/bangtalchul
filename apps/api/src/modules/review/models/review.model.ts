import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Comment } from './comment.model';
import { User } from '@modules/user/models/user.model';

@ObjectType()
export class Review {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [Comment])
  comments?: Comment[];

  @Field()
  author: User;
}
