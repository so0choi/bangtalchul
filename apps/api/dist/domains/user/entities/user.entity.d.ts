import { Comment } from 'domains/review/entities/comment.entity';
import { Review } from 'domains/review/entities/review.entity';
export declare class User {
    id: number;
    password: string;
    email: string;
    name: string;
    provider: string;
    comments: Comment[];
    reviews: Review[];
    updatedAt: Date;
    createdAt: Date;
    encryptPassword(): Promise<void>;
}
