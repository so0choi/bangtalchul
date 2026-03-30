import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

import { CoreResponse } from '@common/dtos/core-response.dto';
import { Review } from '../models/review.model';

@InputType()
export class CreateReviewInput extends OmitType(
  Review,
  ['id', 'comments', 'author'],
  InputType,
) {
  authorId: number;
}

@ObjectType()
export class CreateReviewOutput extends CoreResponse {
  @Field()
  review?: Review;
}
