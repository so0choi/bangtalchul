import { Catch, ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(Error)
export class ExceptionFilter implements GqlExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    GqlArgumentsHost.create(host);
    return new GraphQLError(exception.message, {
      extensions: { code: 'INTERNAL_ERROR' },
    });
  }
}
