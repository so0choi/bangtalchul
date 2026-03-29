'use server';

import { cookies } from 'next/headers';
import { TOKEN_COOKIE } from '@/lib/definitions';
import { redirect } from 'next/navigation';
import { getClient } from '../ApolloClient';
import { LOGOUT_MUTATION } from '@/queries/auth.queries';

export async function logout() {
  const cookieStore = await cookies();
  const session = cookieStore.get(TOKEN_COOKIE);
  if (session) {
    try {
      await getClient().mutate({
        mutation: LOGOUT_MUTATION,
      });
    } catch (err) {
      console.error(err);
    }
    cookieStore.delete(TOKEN_COOKIE);
    getClient().resetStore();
  }

  redirect('/');
}
