"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./modules/user/users.module");
const auth_module_1 = require("./common/auth/auth.module");
const core_1 = require("@nestjs/core");
const gql_guard_1 = require("./common/auth/guards/gql.guard");
const config_1 = require("@nestjs/config");
const request_logging_interceptor_1 = require("./common/interceptors/request-logging.interceptor");
const prisma_module_1 = require("./database/prisma.module");
const winston_module_1 = require("./common/logger/winston.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.dev.env',
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                graphiql: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            winston_module_1.WinstonModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: gql_guard_1.GqlAuthGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: request_logging_interceptor_1.RequestLoggingInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map