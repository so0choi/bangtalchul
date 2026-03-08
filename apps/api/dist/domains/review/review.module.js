"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const place_module_1 = require("../place/place.module");
const users_module_1 = require("../user/users.module");
const comment_entity_1 = require("./entities/comment.entity");
const review_entity_1 = require("./entities/review.entity");
const review_resolver_1 = require("./review.resolver");
const review_service_1 = require("./review.service");
let ReviewModule = class ReviewModule {
};
ReviewModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([review_entity_1.Review, comment_entity_1.Comment]),
            users_module_1.UsersModule,
            place_module_1.PlaceModule,
        ],
        providers: [review_service_1.ReviewService, review_resolver_1.ReviewResolver],
        exports: [review_service_1.ReviewService],
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;
//# sourceMappingURL=review.module.js.map