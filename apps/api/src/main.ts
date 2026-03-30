import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'module-alias/register';
import { config } from 'dotenv';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { WinstonService } from '@common/logger/winston.service';
import { ExceptionFilter } from './filters/global-exception.filter';

config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useLogger(app.get(WinstonService));
  app.useGlobalFilters(new ExceptionFilter());

  await app.listen(4000);
}
bootstrap();
