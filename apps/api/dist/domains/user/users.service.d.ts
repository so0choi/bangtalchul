import { User } from 'domains/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createDto: CreateDto): Promise<User>;
    findOneById(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    edit({ id }: User, updateData: UpdateDto): Promise<User>;
}
