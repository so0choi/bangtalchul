export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
}
declare const LoginUserDto_base: import("@nestjs/common").Type<Omit<CreateUserDto, "name">>;
export declare class LoginUserDto extends LoginUserDto_base {
}
export {};
