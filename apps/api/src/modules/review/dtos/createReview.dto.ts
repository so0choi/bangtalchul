import { InputType, OmitType } from '@nestjs/graphql';
import { Review } from '../entities/review.entity';

@InputType()
export class CreateReviewDto extends OmitType(Review, ['id']) {}
