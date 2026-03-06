import { CreateUserInput } from './create.dto';
declare const LoginInput_base: import("@nestjs/common").Type<Omit<CreateUserInput, "name" | "provider">>;
export declare class LoginInput extends LoginInput_base {
}
export {};
