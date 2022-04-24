import { Controller, Get, Res } from '@nestjs/common';
import { Public } from 'decorators/setMetadata';
import { Response } from 'express';

@Controller()
export class AppController {
  @Public()
  @Get()
  healthCheck(@Res() res: Response) {
    return res.status(200).json({
      api: 'bangtalchul-api',
      author: 'so0choi',
    });
  }
}
