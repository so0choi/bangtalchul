import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';
import { CreateUserInput } from './dtos/create.dto';
import { UpdateUserInput } from './dtos/update.dto';
import { LoginInput } from './dtos/login.dto';
export declare class UsersService {
    private readonly prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    create(dto: CreateUserInput): Promise<User>;
    findOneById(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    edit({ id }: User, updateData: UpdateUserInput): Promise<User>;
    login(dto: LoginInput): Promise<void>;
}
