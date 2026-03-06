import { CreateDto, LoginDto } from './dtos/create.dto';
import { UsersService } from './user.service';
export declare class UsersResolver {
    private userService;
    constructor(userService: UsersService);
    create(createDto: CreateDto): Promise<any>;
    getOne(id: number): Promise<any>;
    login(loginDto: LoginDto): Promise<any>;
}
