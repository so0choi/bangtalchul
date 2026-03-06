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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../entities/user.entity");
const create_dto_1 = require("./dtos/create.dto");
const user_service_1 = require("./user.service");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createDto) {
        return this.userService.create(createDto);
    }
    async getOne(id) {
        return this.userService.findOneById(id);
    }
    async login(loginDto) {
        return this.userService.login(loginDto);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, {
        name: 'signup',
    }),
    __param(0, (0, graphql_1.Args)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, {
        name: 'user',
    }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getOne", null);
__decorate([
    (0, graphql_1.Query)(() => Boolean),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_dto_1.LoginDto !== "undefined" && create_dto_1.LoginDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [typeof (_b = typeof user_service_1.UsersService !== "undefined" && user_service_1.UsersService) === "function" ? _b : Object])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=user.resolver.js.map