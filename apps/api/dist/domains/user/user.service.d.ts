import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { LoginDto } from './dtos/login.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createDto: CreateDto): Promise<User | Error>;
    findOneById(id: number): Promise<User>;
    findOneOrThrowByEmail(email: string): Promise<User>;
    login({ email, password }: LoginDto): Promise<void>;
    compareHashOrThrow(plain: string, hashed: string): Promise<void>;
    update({ name, password }: UpdateDto): Promise<User | Error>;
}
