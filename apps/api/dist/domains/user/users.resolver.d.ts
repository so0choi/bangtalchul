import { User } from 'domains/user/entities/user.entity';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { SessionUser } from './interfaces/sessionUser.interface';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private userService;
    constructor(userService: UsersService);
    create(createDto: CreateDto): Promise<User>;
    getProfile(user: SessionUser): Promise<User>;
    editProfile(user: User, updateDto: UpdateDto): Promise<User>;
}
