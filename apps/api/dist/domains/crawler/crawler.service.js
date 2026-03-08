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
exports.CrawlerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const place_service_1 = require("../place/place.service");
let CrawlerService = class CrawlerService {
    constructor(placeService) {
        this.placeService = placeService;
        this.KAKAO_REST_API_HOST = 'https://dapi.kakao.com';
    }
    async getAll() {
        const KAKAO_API_URL = 'v2/local/search/keyword.json';
        let page = 1;
        while (true) {
            const result = await (0, axios_1.default)({
                url: `${this.KAKAO_REST_API_HOST}/${KAKAO_API_URL}`,
                method: 'GET',
                headers: {
                    Authorization: `KakaoAK ${process.env.KAKAO_API_TOKEN}`,
                },
                params: {
                    query: `서울 방탈출`,
                    page,
                },
            });
            console.log(result.data);
            for (const { road_address_name, id, phone, place_name } of result.data
                .documents) {
                await this.placeService.create({
                    address: road_address_name,
                    name: place_name,
                    phone: phone,
                    kakaomap_id: +id,
                });
            }
            if (!result.data.meta.is_end)
                page++;
            else
                break;
        }
        return [];
    }
};
CrawlerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [place_service_1.PlaceService])
], CrawlerService);
exports.CrawlerService = CrawlerService;
//# sourceMappingURL=crawler.service.js.map