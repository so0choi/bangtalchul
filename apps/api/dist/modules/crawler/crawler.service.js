"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const Crawler = require("crawler");
let CrawlerService = class CrawlerService {
    constructor() {
        this.crawler = new Crawler();
        this.KAKAO_REST_API_HOST = 'https://dapi.kakao.com';
    }
    async getAll() {
        const KAKAO_API_URL = 'v2/local/search/keyword.json';
        const result = await (0, axios_1.default)({
            url: `${this.KAKAO_REST_API_HOST}/${KAKAO_API_URL}`,
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${process.env.KAKAO_API_TOKEN}`,
            },
            params: {
                query: `강남 방탈출`,
            },
        });
        console.log(result.data);
        return [];
    }
};
exports.CrawlerService = CrawlerService;
exports.CrawlerService = CrawlerService = __decorate([
    (0, common_1.Injectable)()
], CrawlerService);
//# sourceMappingURL=crawler.service.js.map