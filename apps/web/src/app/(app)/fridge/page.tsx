'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Bell,
  Settings,
  Plus,
  AlertTriangle,
  Sparkles,
  Pencil,
  Check,
  Trash2,
  ChevronDown,
} from 'lucide-react';

type FilterTab = 'all' | 'fridge' | 'freezer' | 'pantry';
type FreshnessStatus = 'urgent' | 'warning' | 'good';

interface Ingredient {
  id: number;
  name: string;
  location: string;
  category: string;
  quantity: string;
  expiry: string;
  daysLeft: number;
  freshness: number;
  status: FreshnessStatus;
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: '유기농 우유',
    location: '냉장실 1층',
    category: '유제품',
    quantity: '750ml',
    expiry: '2023-10-24',
    daysLeft: 2,
    freshness: 20,
    status: 'urgent',
  },
  {
    id: 2,
    name: '미니 당근',
    location: '야채 서랍',
    category: '채소',
    quantity: '2봉',
    expiry: '2023-11-02',
    daysLeft: 11,
    freshness: 85,
    status: 'good',
  },
  {
    id: 3,
    name: '그릭 요거트',
    location: '냉장실 2층',
    category: '유제품',
    quantity: '1.5kg',
    expiry: '2023-10-28',
    daysLeft: 6,
    freshness: 55,
    status: 'warning',
  },
];

const tabLabels: Record<FilterTab, string> = {
  all: '전체',
  fridge: '냉장',
  freezer: '냉동',
  pantry: '선반',
};

function FreshnessBar({ freshness, status }: { freshness: number; status: FreshnessStatus }) {
  const color =
    status === 'urgent'
      ? 'bg-destructive'
      : status === 'warning'
        ? 'bg-tertiary-container'
        : 'bg-primary';
  return (
    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${freshness}%` }} />
    </div>
  );
}

function ExpiryCell({ expiry, daysLeft, status }: { expiry: string; daysLeft: number; status: FreshnessStatus }) {
  const textColor =
    status === 'urgent'
      ? 'text-destructive'
      : status === 'warning'
        ? 'text-tertiary'
        : 'text-on-surface-variant';
  const subColor =
    status === 'urgent'
      ? 'text-destructive/60'
      : status === 'warning'
        ? 'text-tertiary/60'
        : 'text-on-surface-variant/60';
  return (
    <div>
      <p className={`text-sm font-bold ${textColor}`}>{expiry}</p>
      <p className={`text-[10px] font-bold uppercase ${subColor}`}>{daysLeft}일 남음</p>
    </div>
  );
}

export default function FridgePage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">내 냉장고</h1>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">42개 식재료 관리 중</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            <input
              type="text"
              placeholder="식재료 검색..."
              className="pl-10 pr-4 py-2.5 rounded-xl bg-surface-container text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest w-56 transition-all"
            />
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors p-1">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors p-1">
            <Settings className="h-5 w-5" />
          </button>
          <Link
            href="/fridge/add"
            className="bg-primary text-on-primary rounded-2xl px-4 py-2.5 text-sm font-semibold flex items-center gap-2 shadow-ambient hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            <Plus className="h-4 w-4" />
            재료 추가
          </Link>
        </div>
      </div>

      {/* Filter Tabs + Sort */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
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
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">정렬:</span>
          <select className="bg-transparent border-none text-sm font-semibold text-primary focus:outline-none cursor-pointer">
            <option>유통기한 (임박순)</option>
            <option>수량 (많은순)</option>
            <option>이름순</option>
          </select>
        </div>
      </div>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Expiring Soon */}
        <div className="md:col-span-2 rounded-3xl bg-surface-container-low p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary text-on-tertiary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <AlertTriangle className="h-3 w-3" />
              곧 만료
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
            <span className="text-xs font-black text-primary uppercase tracking-widest">Larder 인사이트</span>
          </div>
          <h4 className="font-display text-lg font-bold text-on-surface leading-snug">재고 최적화 완료.</h4>
          <p className="text-sm text-on-surface-variant mt-2">
            건강한 지중해식 샐러드 재료의 85%를 보유 중입니다. 부족한 재료: 페타 치즈.
          </p>
          <div className="mt-auto pt-4">
            <button className="w-full py-2.5 rounded-xl bg-primary-container/20 text-on-primary-container text-xs font-bold hover:bg-primary-container/30 transition-all">
              장바구니에 추가
            </button>
          </div>
        </div>
      </section>

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
              {ingredients.map((item) => (
                <tr key={item.id} className="group hover:scale-[1.005] transition-transform duration-200">
                  <td className="px-5 py-4 bg-surface-container-lowest rounded-l-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center text-on-surface-variant text-sm font-bold">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface text-sm">{item.name}</p>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 bg-surface-container-lowest">
                    <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-[10px] font-black uppercase tracking-wider">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 bg-surface-container-lowest text-center">
                    <p className="font-semibold text-sm text-on-surface">{item.quantity}</p>
                  </td>
                  <td className="px-5 py-4 bg-surface-container-lowest">
                    <ExpiryCell expiry={item.expiry} daysLeft={item.daysLeft} status={item.status} />
                  </td>
                  <td className="px-5 py-4 bg-surface-container-lowest min-w-[140px]">
                    <FreshnessBar freshness={item.freshness} status={item.status} />
                  </td>
                  <td className="px-5 py-4 bg-surface-container-lowest rounded-r-2xl text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-primary-container/20 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                        <Check className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded-lg text-on-surface-variant hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
    </div>
  );
}
