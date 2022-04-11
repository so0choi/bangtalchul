import { Controller, Get } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(
    private readonly crawlerService: CrawlerService = new CrawlerService(),
  ) {}
  @Get()
  getAll(): any {
    return this.crawlerService.getAll();
  }
}
