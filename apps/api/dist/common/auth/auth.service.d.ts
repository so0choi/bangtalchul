import { LoginInput } from '../../modules/user/dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateJwtTokenDto } from './dtos/createJwtToken.dto';
import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    validateUser({ email, password }: LoginInput): Promise<User>;
    compareHashOrThrow(plain: string, hashed: string): Promise<void>;
    localLogin({ email, password }: LoginInput): Promise<string>;
    oauthLogin(inputUser: User): Promise<string>;
    getJwtToken(createJwtTokenDto: CreateJwtTokenDto): string;
}
