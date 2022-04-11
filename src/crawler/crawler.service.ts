import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as Crawler from 'crawler';

@Injectable()
export class CrawlerService {
  private readonly crawler: Crawler = new Crawler();
  private readonly KAKAO_REST_API_HOST = 'https://dapi.kakao.com';

  async getAll(): Promise<any[]> {
    const KAKAO_API_URL = 'v2/local/search/keyword.json';

    const result = await axios({
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
}
