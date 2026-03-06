export declare class User {
    id: number;
    password: string;
    email: string;
    name: string;
    provider: string;
    encryptPassword(): Promise<void>;
}
