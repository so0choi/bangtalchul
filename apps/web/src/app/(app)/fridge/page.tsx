import Link from 'next/link';
import { AlertTriangle, Plus, Sparkles } from 'lucide-react';
import { getClient } from '@/app/ApolloClient';
import { GET_ALL_INGREDIENTS } from '@/queries/fridge.queries';
import { Ingredient } from 'gql/graphql';
import FridgeContent from './FridgeContent';

export default async function FridgePage() {
  const { data } = await getClient().query<{ getAllIngredients: Ingredient[] }>(
    {
      query: GET_ALL_INGREDIENTS,
    },
  );

  const ingredients = data?.getAllIngredients ?? [];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary mb-1">
            냉장고
          </p>
          <h1 className="font-display text-4xl font-bold text-on-surface leading-none">
            내 냉장고.
          </h1>
          <p className="mt-2 text-sm text-on-surface-variant">
            {ingredients.length}개 식재료 관리 중
          </p>
        </div>
        <Link
          href="/fridge/add"
          className="bg-primary text-on-primary rounded-2xl px-4 py-2.5 text-sm font-semibold flex items-center gap-2 shadow-ambient hover:opacity-90 hover:-translate-y-0.5 transition-all self-start"
        >
          <Plus className="h-4 w-4" />
          재료 추가
        </Link>
      </div>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Expiring Soon */}
        <div className="md:col-span-2 rounded-3xl bg-surface-container-low p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary text-on-tertiary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <AlertTriangle className="h-3 w-3" />곧 만료
            </span>
            <h3 className="font-display text-3xl font-bold text-on-surface max-w-sm leading-tight">
              유기농 아보카도가 최적의 숙성 시기에 다가오고 있습니다.
            </h3>
            <p className="text-sm text-on-surface-variant mt-2">
              야채 서랍의 3가지 식재료가 24시간 내 주의가 필요합니다.
            </p>
          </div>
          <button className="mt-6 self-start px-5 py-2.5 bg-tertiary text-on-tertiary rounded-2xl text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform shadow-ambient">
            추천 레시피 보기
          </button>
          <div className="absolute -right-10 -bottom-10 w-56 h-56 opacity-5 group-hover:scale-110 transition-transform duration-700 text-tertiary">
            <AlertTriangle className="w-full h-full" />
          </div>
        </div>

        {/* Larder Insight */}
        <div className="rounded-3xl bg-surface-container-low p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-xs font-black text-primary uppercase tracking-widest">
              Larder 인사이트
            </span>
          </div>
          <h4 className="font-display text-lg font-bold text-on-surface leading-snug">
            재고 최적화 완료.
          </h4>
          <p className="text-sm text-on-surface-variant mt-2">
            건강한 지중해식 샐러드 재료의 85%를 보유 중입니다. 부족한 재료: 페타
            치즈.
          </p>
          <div className="mt-auto pt-4">
            <button className="w-full py-2.5 rounded-xl bg-primary-container/20 text-on-primary-container text-xs font-bold hover:bg-primary-container/30 transition-all">
              장바구니에 추가
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Inventory */}
      <FridgeContent ingredients={ingredients} />
    </div>
  );
}
