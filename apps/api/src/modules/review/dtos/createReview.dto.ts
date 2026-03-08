import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

import { MutationResponse } from '@common/dtos/mutation-response.dto';
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
export class CreateReviewOutput extends MutationResponse {
  @Field()
  review?: Review;
}
