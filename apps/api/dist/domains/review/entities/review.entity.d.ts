import { Place } from 'domains/place/entities/place.entity';
import { User } from 'domains/user/entities/user.entity';
import { Comment } from './comment.entity';
export declare class Review {
    id: number;
    title: string;
    content: string;
    place: Place;
    theme: string;
    rating: number;
    writer: User;
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
}
