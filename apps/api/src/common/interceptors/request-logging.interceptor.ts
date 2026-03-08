import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { log } from 'node:console';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(RequestLoggingInterceptor.name, {
    timestamp: true,
  });
  constructor() {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context);

    const { req, reply } = ctx.getContext();
    const { method, originalUrl } = req;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        if (!reply?.statusCode) return;
        const { statusCode } = reply;
        this.logger.log(
          `${method} ${originalUrl} - ${statusCode} (${Date.now() - now}ms)`,
        );
      }),
    );
  }
}
