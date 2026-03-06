import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(ctx: ExecutionContext): any;
    getRequest(context: ExecutionContext): any;
}
export {};
