import { GqlAuthGuard } from '@common/auth/guards/gql.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateReviewInput, CreateReviewOutput } from './dtos/createReview.dto';
import { Review } from './models/review.model';
import { ReviewService } from './review.service';
import { MutationResponse } from '@common/dtos/mutation-response.dto';
import { CurrentUser } from '@common/decorators/getCurrentUser';
import { User } from '@modules/user/models/user.model';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => CreateReviewOutput, { name: 'createReview' })
  async create(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
    @CurrentUser() user: User,
  ): Promise<CreateReviewOutput> {
    try {
      const review = await this.reviewService.create({
        authorId: user.id,
        ...createReviewInput,
      });

      return { ok: true, review };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }
}
