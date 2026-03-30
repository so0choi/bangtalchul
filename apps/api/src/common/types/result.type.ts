import { GraphQLError } from 'graphql';

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export const Ok = <T>(data: T): Result<T> => ({ ok: true, data });

export const Err = <T>(error: string): Result<T> => ({ ok: false, error });

export const assertOk = <T>(result: Result<T>): T => {
  if (result.ok === true) {
    return result.data;
  }
  throw new GraphQLError(result.error);
};
