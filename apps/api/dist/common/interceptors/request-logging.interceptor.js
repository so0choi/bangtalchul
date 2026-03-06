"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RequestLoggingInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const graphql_1 = require("@nestjs/graphql");
let RequestLoggingInterceptor = RequestLoggingInterceptor_1 = class RequestLoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(RequestLoggingInterceptor_1.name, {
            timestamp: true,
        });
    }
    intercept(context, next) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        const request = gqlContext.getContext().req;
        const { method, originalUrl } = request;
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const res = context.switchToHttp().getResponse();
            const { statusCode } = res;
            this.logger.log(`${method} ${originalUrl} - ${statusCode} (${Date.now() - now}ms)`);
        }));
    }
};
exports.RequestLoggingInterceptor = RequestLoggingInterceptor;
exports.RequestLoggingInterceptor = RequestLoggingInterceptor = RequestLoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RequestLoggingInterceptor);
//# sourceMappingURL=request-logging.interceptor.js.map