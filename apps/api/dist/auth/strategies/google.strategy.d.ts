import { UsersService } from 'domains/user/users.service';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<{
        email: string;
        name: string;
        accessToken: string;
        provider: string;
    }>;
}
export {};
