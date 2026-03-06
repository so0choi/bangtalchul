import { User } from 'domains/user/entities/user.entity';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private userService;
    constructor(userService: UsersService);
    create(createDto: CreateDto): Promise<User>;
    getProfile(user: User): Promise<User>;
    editProfile(user: User, updateDto: UpdateDto): Promise<User>;
}
