'use server';

import { z } from 'zod';
import { gql } from '@apollo/client';
import { getClient } from '../../../app/ApolloClient';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { log } from 'console';
import { LOGIN_MUTATION } from '../../login/actions/login';

const schema = z.object({
  email: z.email(),
  password: z.string(),
  phone: z.string().optional(),
  name: z.string(),
  preferenceTags: z.array(z.string()).optional(),
});

const SIGN_UP_MUTATION = gql`
  mutation signup($input: CreateUserInput!) {
    signup(createUserInput: $input) {
      ok
      user {
        id
        email
        name
      }
    }
  }
`;

export async function signUp(formData: FormData) {
  'use server';

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
    preferenceTags: formData.getAll('preferenceTags'),
  };

  const validatedFields = schema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues.flat(),
    };
  }

  const input = {
    ...validatedFields.data,
    provider: 'local',
  };
  const {
    data: { ok, user },
  } = await getClient().mutate({
    mutation: SIGN_UP_MUTATION,
    variables: { input },
  });

  if (!ok) {
    throw new Error('Signup Failed');
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
  cookieStore.set('token', loginData.login.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7일
    path: '/',
  });

  redirect('/');
}
