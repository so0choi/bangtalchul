'use client';

import { useState } from 'react';
import {
  Snowflake,
  Package,
  UtensilsCrossed,
  Camera,
  Leaf,
  Timer,
  ShoppingBasket,
  Info,
} from 'lucide-react';

type StorageZone = 'fridge' | 'freezer' | 'pantry';

const zoneOptions: { value: StorageZone; label: string; Icon: React.ElementType }[] = [
  { value: 'fridge', label: '냉장', Icon: Snowflake },
  { value: 'freezer', label: '냉동', Icon: UtensilsCrossed },
  { value: 'pantry', label: '선반', Icon: Package },
];

const inventoryItems = [
  {
    name: '유기농 케일',
    sub: '오늘 추가됨',
    Icon: Leaf,
    badge: '신선',
    badgeClass: 'bg-primary/10 text-primary',
    iconBg: 'bg-primary-container/20 text-primary',
  },
  {
    name: '그릭 요거트',
    sub: '내일 만료',
    Icon: Timer,
    badge: '긴급',
    badgeClass: 'bg-destructive/10 text-destructive',
    iconBg: 'bg-tertiary-container/20 text-tertiary',
  },
  {
    name: '방목 달걀',
    sub: '냉장 보관 중',
    Icon: ShoppingBasket,
    badge: '선반',
    badgeClass: 'bg-org/10 text-org',
    iconBg: 'bg-secondary-fixed/60 text-org',
  },
] as const;

const capacityBars = [
  { label: '냉장', percent: 82, barColor: 'bg-primary', textColor: 'text-primary' },
  { label: '냉동', percent: 45, barColor: 'bg-org', textColor: 'text-org' },
];

export default function AddIngredientPage() {
  const [zone, setZone] = useState<StorageZone>('fridge');

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Page Title */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary mb-1">냉장고</p>
        <h1 className="font-display text-4xl font-bold text-on-surface tracking-tight">
          재료 채우기
        </h1>
        <p className="text-sm text-on-surface-variant mt-2 max-w-lg">
          신선한 식재료를 입력하여 주방의 실제 재고와 디지털 냉장고를 동기화하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ── Form Card ── */}
        <div className="lg:col-span-7 rounded-3xl bg-surface-container-lowest p-8 shadow-ambient">
          <form className="space-y-7">
            {/* Ingredient Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                재료명
              </label>
              <input
                type="text"
                placeholder="예: 시금치"
                className="w-full rounded-xl bg-surface-container px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Quantity + Unit */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                  수량
                </label>
                <input
                  type="number"
                  placeholder="250"
                  className="w-full rounded-xl bg-surface-container px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                  단위
                </label>
                <select className="w-full rounded-xl bg-surface-container px-4 py-3 text-sm text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none">
                  <option>그램 (g)</option>
                  <option>킬로그램 (kg)</option>
                  <option>밀리리터 (ml)</option>
                  <option>리터 (l)</option>
                  <option>개 (ea)</option>
                </select>
              </div>
            </div>

            {/* Storage Zone */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                보관 위치
              </label>
              <div className="flex flex-wrap gap-3">
                {zoneOptions.map(({ value, label, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setZone(value)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                      zone === value
                        ? 'bg-org text-on-primary shadow-ambient'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Expiration Date */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                유통기한
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-xl bg-surface-container px-4 py-3 text-sm text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-xs font-semibold text-tertiary bg-tertiary-container/20 px-2 py-1 rounded-lg">
                    신선도 리드: 7일
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-primary text-on-primary rounded-2xl py-3.5 font-semibold shadow-ambient hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                확인 &amp; 저장
              </button>
              <button
                type="reset"
                className="px-8 text-primary rounded-2xl py-3.5 font-semibold hover:bg-surface-container transition-all"
              >
                초기화
              </button>
            </div>
          </form>
        </div>

        {/* ── Right Panel ── */}
        <div className="lg:col-span-5 space-y-5">
          {/* Scan & Auto-Fill CTA */}
          <div className="rounded-3xl bg-linear-to-br from-primary to-primary-container p-8 shadow-ambient">
            <h3 className="font-display text-2xl font-bold text-on-primary mb-2">
              스캔 &amp; 자동 입력
            </h3>
            <p className="text-on-primary/80 text-sm mb-6 leading-relaxed">
              AI가 영수증에서 식재료, 수량, 유통기한을 자동으로 인식합니다.
            </p>
            <button
              type="button"
              className="w-full py-3 rounded-2xl bg-on-primary/10 text-on-primary font-semibold hover:bg-on-primary hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              <Camera className="h-5 w-5" />
              스캐너 시작
            </button>
          </div>

          {/* Inventory Status */}
          <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-ambient">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-lg font-bold text-on-surface">재고 현황</h3>
              <Info className="h-4 w-4 text-on-surface-variant/40" />
            </div>
            <div className="space-y-4">
              {inventoryItems.map(({ name, sub, Icon, badge, badgeClass, iconBg }) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">{name}</p>
                      <p className="text-xs text-on-surface-variant">{sub}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase ${badgeClass}`}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Storage Capacity */}
          <div className="rounded-3xl bg-surface-container-low p-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary mb-5">
              보관 용량
            </h4>
            <div className="space-y-4">
              {capacityBars.map(({ label, percent, barColor, textColor }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1.5 font-medium">
                    <span className="text-on-surface-variant">{label}</span>
                    <span className={textColor}>{percent}%</span>
                  </div>
                  <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
