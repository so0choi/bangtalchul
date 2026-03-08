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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const crawler_module_1 = require("./domains/crawler/crawler.module");
const users_module_1 = require("./domains/user/users.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const gql_guard_1 = require("./auth/guards/gql.guard");
const review_module_1 = require("./domains/review/review.module");
const place_module_1 = require("./domains/place/place.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(await (0, typeorm_2.getConnectionOptions)(), {
                    autoLoadEntities: true,
                }),
            }),
            crawler_module_1.CrawlerModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                context: ({ req, connection }) => {
                    if (req) {
                        const user = req.headers.authorization;
                        return Object.assign(Object.assign({}, req), { user });
                    }
                    else {
                        return connection;
                    }
                },
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            review_module_1.ReviewModule,
            place_module_1.PlaceModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: gql_guard_1.GqlAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map