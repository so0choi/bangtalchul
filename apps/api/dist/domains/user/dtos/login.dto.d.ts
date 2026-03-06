import { CreateDto } from './create.dto';
declare const LoginDto_base: import("@nestjs/common").Type<Omit<CreateDto, "name" | "provider">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
