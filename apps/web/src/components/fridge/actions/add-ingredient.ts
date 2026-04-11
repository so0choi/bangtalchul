'use server';

import { z } from 'zod';
import { getClient } from '@/app/ApolloClient';
import { CREATE_INGREDIENT } from '@/queries/fridge.queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const schema = z.object({
  name: z.string().min(1, '재료명을 입력해주세요.'),
  storage: z.enum(['FRIDGE', 'FREEZER', 'PANTRY'], '보관 위치를 선택해주세요.'),
  quantity: z.coerce
    .number('수량은 숫자여야 합니다.')
    .positive('수량은 0보다 커야 합니다.')
    .optional(),
  unit: z.enum(['EA', 'G', 'KG', 'ML', 'L']).optional(),
  expireAt: z.string().optional(),
  category: z
    .enum(['MEAT', 'SEAFOOD', 'VEGETABLE', 'FRUIT', 'DAIRY'])
    .optional(),
  price: z.coerce
    .number()
    .nonnegative('가격은 0 이상이어야 합니다.')
    .optional(),
  imageUrl: z
    .union([z.url('올바른 이미지 URL을 입력해주세요.'), z.literal('')])
    .optional(),
});

export type AddIngredientState = {
  error?: Record<string, string[]>;
  success?: boolean;
} | null;

export async function addIngredient(_: AddIngredientState, formData: FormData) {
  const raw = {
    name: formData.get('name'),
    storage: formData.get('storage'),
    quantity: formData.get('quantity') || undefined,
    unit: formData.get('unit') || undefined,
    expireAt: formData.get('expireAt') || undefined,
    category: formData.get('category') || undefined,
    price: formData.get('price') || undefined,
    imageUrl: formData.get('imageUrl') || undefined,
  };

  const validated = schema.safeParse(raw);

  if (!validated.success) {
    return {
      error: z.flattenError(validated.error).fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { imageUrl, ...rest } = validated.data;

  const { data, error } = await getClient().mutate<{
    createIngredient: { name: string };
  }>({
    mutation: CREATE_INGREDIENT,
    variables: {
      input: {
        ...rest,
        status: 'FRESH',
        imageUrl: imageUrl || null,
      },
    },
    errorPolicy: 'all',
  });

  if (error) {
    return {
      error: { _form: [error.message] },
    };
  }

  console.log(data);

  if (!data?.createIngredient) {
    return {
      error: { _form: ['재료 추가에 실패했습니다.'] },
    };
  }

  revalidatePath('/fridge');
  revalidatePath('/dashboard');
  redirect('/fridge');
}
