import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { UsersModule } from './modules/user/users.module';
import { AuthModule } from '@common/auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GqlAuthGuard } from '@common/auth/guards/gql.guard';
import { ConfigModule } from '@nestjs/config';
import { RequestLoggingInterceptor } from '@common/interceptors/request-logging.interceptor';
import { PrismaModule } from './database/prisma.module';
import { WinstonService } from '@common/logger/winston.service';
import { WinstonModule } from '@common/logger/winston.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req, connection }) => {
        if (req) {
          const user = req.headers.authorization;
          return { ...req, user };
        } else {
          return connection;
        }
      },
    }),
    UsersModule,
    AuthModule,
    WinstonModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestLoggingInterceptor,
    },
  ],
})
export class AppModule {}
