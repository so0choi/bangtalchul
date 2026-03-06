export declare enum Provider {
    local = "local",
    google = "google",
    github = "github"
}
export declare class User {
    id: number;
    password: string;
    email: string;
    name: string;
    provider: Provider;
    updatedAt: Date;
    createdAt: Date;
}
