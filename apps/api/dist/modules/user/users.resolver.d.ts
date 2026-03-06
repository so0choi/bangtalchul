import { UsersService } from './users.service';
import { User as PrismaUser } from '@prisma/client';
import { CreateUserInput } from './dtos/create.dto';
import { UpdateUserInput } from './dtos/update.dto';
export declare class UsersResolver {
    private userService;
    constructor(userService: UsersService);
    create(createDto: CreateUserInput): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        provider: string;
    }>;
    getProfile(user: PrismaUser): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        provider: string;
    }>;
    editProfile(user: PrismaUser, updateDto: UpdateUserInput): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        provider: string;
    }>;
}
