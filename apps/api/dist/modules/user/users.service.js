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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../database/prisma.service");
const client_1 = require("@prisma/client");
const user_entity_1 = require("./entities/user.entity");
let UsersService = UsersService_1 = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(UsersService_1.name, {
            timestamp: true,
        });
    }
    async create(dto) {
        var _a;
        const { email, provider, password } = dto;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            return await this.prismaService.user.create({
                data: {
                    email: dto.email,
                    password: hashedPassword,
                    name: dto.name,
                    provider: provider !== null && provider !== void 0 ? provider : user_entity_1.Provider.local,
                },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002' &&
                Array.isArray((_a = error.meta) === null || _a === void 0 ? void 0 : _a.target) &&
                error.meta.target.includes('email')) {
                throw new common_1.ConflictException(`User '${email}' already exists`);
            }
            throw error;
        }
    }
    findOneById(id) {
        return this.prismaService.user.findUnique({ where: { id } });
    }
    findOneByEmail(email) {
        return this.prismaService.user.findUnique({ where: { email } });
    }
    async edit({ id }, updateData) {
        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }
        const currentUser = await this.findOneById(id);
        return this.prismaService.user.update({
            where: { id: currentUser.id },
            data: Object.assign(Object.assign({}, currentUser), updateData),
        });
    }
    async login(dto) {
        const { email, password } = dto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.prismaService.user.findFirst({
            where: { email },
        });
        if (!user) {
            throw new common_1.ConflictException(`User '${email}' not found`);
        }
        const savedUserHashedPassword = await bcrypt.hash(user.password, 10);
        if (hashedPassword !== savedUserHashedPassword) {
            throw new common_1.ConflictException(`Passwords don't match`);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map