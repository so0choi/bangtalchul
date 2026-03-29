export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export const Ok: (data: any) => { ok: true; data: any } = (data: any) => {
  return { ok: true, data };
};
