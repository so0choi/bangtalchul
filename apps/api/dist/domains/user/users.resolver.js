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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const getCurrentUser_1 = require("../../decorators/getCurrentUser");
const setMetadata_1 = require("../../decorators/setMetadata");
const user_entity_1 = require("./entities/user.entity");
const create_dto_1 = require("./dtos/create.dto");
const update_dto_1 = require("./dtos/update.dto");
const users_service_1 = require("./users.service");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createDto) {
        return this.userService.create(createDto);
    }
    async getProfile(user) {
        return this.userService.getProfile(user);
    }
    async editProfile(user, updateDto) {
        return this.userService.edit(user, updateDto);
    }
};
__decorate([
    (0, setMetadata_1.Public)(),
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
        name: 'profile',
    }),
    __param(0, (0, getCurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, {
        name: 'editProfile',
    }),
    __param(0, (0, getCurrentUser_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        update_dto_1.UpdateDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editProfile", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map