import { LoginDto } from 'domains/user/dtos/login.dto';
import { UsersService } from 'domains/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'domains/user/entities/user.entity';
import { CreateJwtTokenDto } from './dtos/createJwtToken.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser({ email, password }: LoginDto): Promise<User>;
    compareHashOrThrow(plain: string, hashed: string): Promise<void>;
    localLogin({ email, password }: LoginDto): Promise<string>;
    oauthLogin(inputUser: User): Promise<string>;
    getJwtToken(createJwtTokenDto: CreateJwtTokenDto): string;
}
