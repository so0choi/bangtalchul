import { Comment } from './comment.entity';
export declare class Review {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
}
