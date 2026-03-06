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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../database/prisma.service");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async validateUser({ email, password }) {
        const user = await this.prismaService.user.findUnique({ where: { email } });
        await this.compareHashOrThrow(password, user.password);
        return user;
    }
    async compareHashOrThrow(plain, hashed) {
        if (!(await bcrypt.compare(plain, hashed))) {
            throw new common_1.NotFoundException();
        }
    }
    async localLogin({ email, password }) {
        const validUser = await this.validateUser({ email, password });
        const payload = { id: validUser.id, email };
        return this.getJwtToken(payload);
    }
    async oauthLogin(inputUser) {
        let user = await this.prismaService.user.findUnique({
            where: { email: inputUser.email },
        });
        if (!user) {
            user = await this.prismaService.user.create({
                data: {
                    email: user.email,
                    provider: user.provider,
                    password: `${user.email}:${Date.now()}`,
                    name: user.name,
                },
            });
        }
        return this.getJwtToken({ email: user.email, id: user.id });
    }
    getJwtToken(createJwtTokenDto) {
        return this.jwtService.sign(createJwtTokenDto);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map