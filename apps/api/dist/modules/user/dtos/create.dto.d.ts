import { Provider } from '../entities/user.entity';
export declare class CreateUserInput {
    email: string;
    password: string;
    name: string;
    provider?: Provider;
}
