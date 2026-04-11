'use client';

import { useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Search, Pencil, Check, Trash2, ChevronDown } from 'lucide-react';
import { Ingredient, IngredientStatus, StorageType } from 'gql/graphql';

type FilterTab = 'all' | 'fridge' | 'freezer' | 'pantry';
type FreshnessStatus = 'urgent' | 'warning' | 'good';

const tabLabels: Record<FilterTab, string> = {
  all: '전체',
  fridge: '냉장',
  freezer: '냉동',
  pantry: '실온',
};

const tabToStorage: Record<FilterTab, StorageType | null> = {
  all: null,
  fridge: StorageType.Fridge,
  freezer: StorageType.Freezer,
  pantry: StorageType.Pantry,
};

const categoryLabels: Record<string, string> = {
  MEAT: '육류',
  SEAFOOD: '해산물',
  VEGETABLE: '채소',
  FRUIT: '과일',
  DAIRY: '유제품',
};

const storageLabels: Record<StorageType, string> = {
  [StorageType.Fridge]: '냉장',
  [StorageType.Freezer]: '냉동',
  [StorageType.Pantry]: '실온',
};

function getStatus(ingredientStatus: IngredientStatus): FreshnessStatus {
  if (ingredientStatus === IngredientStatus.Expired) return 'urgent';
  if (ingredientStatus === IngredientStatus.ExpiringSoon) return 'warning';
  return 'good';
}

function getFreshness(expireAt: string | null | undefined, ingredientStatus: IngredientStatus): number {
  if (!expireAt) {
    if (ingredientStatus === IngredientStatus.Expired) return 5;
    if (ingredientStatus === IngredientStatus.ExpiringSoon) return 25;
    return 90;
  }
  const daysLeft = dayjs(expireAt).diff(dayjs(), 'day');
  return Math.max(0, Math.min(100, (daysLeft / 30) * 100));
}

function FreshnessBar({ freshness, status }: { freshness: number; status: FreshnessStatus }) {
  const color =
    status === 'urgent' ? 'bg-error' : status === 'warning' ? 'bg-tertiary' : 'bg-primary';
  return (
    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${freshness}%` }} />
    </div>
  );
}

function ExpiryCell({
  expireAt,
  status,
}: {
  expireAt: string | null | undefined;
  status: FreshnessStatus;
}) {
  const daysLeft = expireAt ? dayjs(expireAt).diff(dayjs(), 'day') : null;
  const formatted = expireAt ? dayjs(expireAt).format('YYYY. MM. DD') : '-';
  const textColor =
    status === 'urgent'
      ? 'text-error'
      : status === 'warning'
        ? 'text-tertiary'
        : 'text-on-surface-variant';
  const subColor =
    status === 'urgent'
      ? 'text-error/60'
      : status === 'warning'
        ? 'text-tertiary/60'
        : 'text-on-surface-variant/60';

  return (
    <div>
      <p className={`text-sm font-bold ${textColor}`}>{formatted}</p>
      {daysLeft !== null && (
        <p className={`text-[10px] font-bold uppercase ${subColor}`}>{daysLeft}일 남음</p>
      )}
    </div>
  );
}

export default function FridgeContent({ ingredients }: { ingredients: Ingredient[] }) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [search, setSearch] = useState('');

  const filtered = ingredients
    .filter((i) => tabToStorage[activeTab] === null || i.storage === tabToStorage[activeTab])
    .filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {/* Filter Tabs + Search + Sort */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="식재료 검색..."
              className="pl-10 pr-4 py-2.5 rounded-xl bg-surface-container text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest w-56 transition-all"
            />
          </div>
          <div className="flex p-1 bg-surface-container-low rounded-xl gap-1">
            {(Object.keys(tabLabels) as FilterTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-surface-container-lowest text-primary shadow-ambient'
                    : 'text-on-surface-variant hover:bg-surface-container-lowest/50'
                }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">
            정렬:
          </span>
          <select className="bg-transparent border-none text-sm font-semibold text-primary focus:outline-none cursor-pointer">
            <option>유통기한 (임박순)</option>
            <option>수량 (많은순)</option>
            <option>이름순</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <section className="bg-surface-container-low rounded-3xl p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em]">
                <th className="px-5 pb-2">식재료</th>
                <th className="px-5 pb-2">카테고리</th>
                <th className="px-5 pb-2 text-center">수량</th>
                <th className="px-5 pb-2">유통기한</th>
                <th className="px-5 pb-2">신선도</th>
                <th className="px-5 pb-2 text-right">작업</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-sm text-on-surface-variant">
                    해당 재료가 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => {
                  const status = getStatus(item.status ?? IngredientStatus.Fresh);
                  const freshness = getFreshness(item.expireAt, item.status ?? IngredientStatus.Fresh);

                  return (
                    <tr
                      key={item.id}
                      className="group hover:scale-[1.005] transition-transform duration-200"
                    >
                      <td className="px-5 py-4 bg-surface-container-lowest rounded-l-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-surface-container flex-shrink-0 overflow-hidden flex items-center justify-center">
                            {item.imageUrl ? (
                              <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={44}
                                height={44}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            ) : (
                              <span className="text-sm font-bold text-on-surface-variant">
                                {item.name[0]}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-on-surface text-sm">{item.name}</p>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-0.5">
                              {storageLabels[item.storage]}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 bg-surface-container-lowest">
                        <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-[10px] font-black uppercase tracking-wider">
                          {item.category ? (categoryLabels[item.category] ?? item.category) : '-'}
                        </span>
                      </td>
                      <td className="px-5 py-4 bg-surface-container-lowest text-center">
                        <p className="font-semibold text-sm text-on-surface">
                          {item.quantity != null ? `${item.quantity}${item.unit ?? ''}` : '-'}
                        </p>
                      </td>
                      <td className="px-5 py-4 bg-surface-container-lowest">
                        <ExpiryCell expireAt={item.expireAt} status={status} />
                      </td>
                      <td className="px-5 py-4 bg-surface-container-lowest min-w-[140px]">
                        <FreshnessBar freshness={freshness} status={status} />
                      </td>
                      <td className="px-5 py-4 bg-surface-container-lowest rounded-r-2xl text-right">
                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button className="p-2 hover:bg-primary-container/20 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                            <Check className="h-4 w-4" />
                          </button>
                          <button className="p-2 hover:bg-error/10 rounded-lg text-on-surface-variant hover:text-error transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="group px-8 py-3 rounded-full hover:bg-surface-container transition-colors flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">
              더 보기
            </span>
            <ChevronDown className="h-4 w-4 text-on-surface-variant/40 group-hover:text-primary transition-colors mt-1" />
          </button>
        </div>
      </section>
    </>
  );
}
