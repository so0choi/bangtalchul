import { LoginDto } from 'domains/user/dtos/login.dto';
import { AuthService } from './auth.service';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(input: LoginDto): Promise<string>;
}
