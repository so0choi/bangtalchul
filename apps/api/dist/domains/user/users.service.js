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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createDto) {
        const { email, provider } = createDto;
        const isDuplicate = await this.usersRepository.findOne({ email });
        if (isDuplicate) {
            throw new common_1.ConflictException(`User '${email}' already exists`);
        }
        return await this.usersRepository.save(this.usersRepository.create(Object.assign(Object.assign({}, createDto), { provider: provider ? provider : 'local' })));
    }
    findOneById(id) {
        return this.usersRepository.findOne(id);
    }
    findOneByEmail(email) {
        return this.usersRepository.findOne({ email });
    }
    async getProfile(user) {
        return await this.usersRepository.findOne({ id: user.id }, {
            relations: ['reviews', 'comments', 'reviews.place'],
        });
    }
    async edit({ id }, updateData) {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const currentUser = await this.findOneById(id);
        return await this.usersRepository.save(Object.assign(Object.assign({}, currentUser), updateData));
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map