import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  healthCheck(@Res() res: Response) {
    return res.status(200).json({
      api: 'bangtalchul-api',
      author: 'so0choi',
    });
  }
}
