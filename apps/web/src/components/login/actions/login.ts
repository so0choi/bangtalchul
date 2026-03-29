'use server';
import { getClient } from '@/src/app/ApolloClient';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { TOKEN_COOKIE } from '@/src/lib/definitions';
import { LOGIN_MUTATION } from '@/src/queries/auth.queries';

export async function login(_: any, formData: FormData) {
  const isAutologin = formData.get('autologin') === 'on';
  const input = {
    email: formData.get('email'),
    password: formData.get('password'),
    autologin: isAutologin,
  };
  const { data } = await getClient().mutate<{
    login: {
      ok: boolean;
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      refreshExpiresIn: number;
    };
  }>({
    mutation: LOGIN_MUTATION,
    variables: { input },
  });

  if (!data?.login.ok) {
    return {
      error: '이메일 또는 비밀번호가 올바르지 않습니다.',
    };
  }
  const { accessToken, refreshToken, expiresIn, refreshExpiresIn } = data.login;
  const cookieStore = await cookies();
  const sessionData = {
    accessToken,
    refreshToken,
    expiresAt: Date.now() + expiresIn * 1000,
  };

  cookieStore.set(TOKEN_COOKIE, JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: refreshExpiresIn,
    path: '/',
  });

  redirect('/');
}
