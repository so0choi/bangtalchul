import { AuthService } from 'auth/auth.service';
import { LoginDto } from 'domains/user/dtos/login.dto';
import { Strategy } from 'passport-local';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(loginDto: LoginDto): Promise<true>;
}
export {};
