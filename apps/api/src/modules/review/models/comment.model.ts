import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

import { Review } from './review.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  author?: User;

  @Field()
  content: string;

  @Field(() => Int)
  review: Review;
}
