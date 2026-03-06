import { Comment } from 'domains/review/entities/comment.entity';
export declare class User {
    id: number;
    password: string;
    email: string;
    name: string;
    provider: string;
    comments: Comment[];
    updatedAt: Date;
    createdAt: Date;
    encryptPassword(): Promise<void>;
}
