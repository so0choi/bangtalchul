import { CreateReviewDto } from './dtos/createReview.dto';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';
export declare class ReviewResolver {
    private reviewServiece;
    constructor(reviewServiece: ReviewService);
    create(user: any, createReviewDto: CreateReviewDto): Promise<Review>;
}
