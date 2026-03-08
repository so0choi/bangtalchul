import { PlaceService } from 'domains/place/place.service';
import { SessionUser } from 'domains/user/interfaces/sessionUser.interface';
import { UsersService } from 'domains/user/users.service';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dtos/createReview.dto';
import { Review } from './entities/review.entity';
export declare class ReviewService {
    private reviewRepository;
    private usersService;
    private placeService;
    constructor(reviewRepository: Repository<Review>, usersService: UsersService, placeService: PlaceService);
    create(user: SessionUser, createReviewDto: CreateReviewDto): Promise<Review>;
}
