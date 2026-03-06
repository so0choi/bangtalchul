import { User } from '../../user/entities/user.entity';
import { Review } from './review.entity';
export declare class Comment {
    id: number;
    writer: User;
    content: string;
    review: Review;
}
