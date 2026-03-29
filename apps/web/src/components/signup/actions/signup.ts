'use server';

import { z } from 'zod';

import { getClient } from '../../../app/ApolloClient';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import {
  LOGIN_MUTATION,
  SIGN_UP_MUTATION,
} from '../../../queries/auth.queries';
import { TOKEN_COOKIE } from '@/lib/definitions';

const schema = z
  .object({
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    name: z.string(),
    preferenceTags: z.array(z.string()).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export async function signUp(_: any, formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    phone: formData.get('phone'),
    preferenceTags: formData.getAll('preferenceTags'),
  };

  const validatedFields = schema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: z.flattenError(validatedFields.error).fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { name, email, password, phone, preferenceTags } = validatedFields.data;
  const input = {
    name,
    email,
    password,
    phone,
    preferenceTags,
    provider: 'local',
  };
  const { data } = await getClient().mutate<{
    signup: { ok: boolean; message?: string };
  }>({
    mutation: SIGN_UP_MUTATION,
    variables: { input },
  });

  const { ok, message } = data?.signup ?? {};
  if (!ok) {
    if (message === 'EMAIL_IN_USE') {
      return {
        error: { email: ['이미 사용 중인 이메일입니다.'] },
      };
    }
    return {
      error: { _form: ['회원가입에 실패했습니다.'] },
    };
  }

  const { data: loginData } = await getClient().mutate<{
    login: { ok: boolean; token: string };
  }>({
    mutation: LOGIN_MUTATION,
    variables: {
      input: {
        email: validatedFields.data.email,
        password: validatedFields.data.password,
      },
    },
  });

  if (!loginData?.login?.ok) {
    redirect('/login');
  }

  const cookieStore = await cookies();
  cookieStore.set(TOKEN_COOKIE, loginData.login.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7일
    path: '/',
  });

  redirect('/');
}
