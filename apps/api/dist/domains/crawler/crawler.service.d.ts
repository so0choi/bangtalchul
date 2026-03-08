import { PlaceService } from 'domains/place/place.service';
export declare class CrawlerService {
    private placeService;
    private readonly KAKAO_REST_API_HOST;
    constructor(placeService: PlaceService);
    getAll(): Promise<any[]>;
}
