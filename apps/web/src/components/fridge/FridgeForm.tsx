'use client';

import Form from 'next/form';
import { useActionState, useState } from 'react';
import { Snowflake, Package, UtensilsCrossed } from 'lucide-react';
import TextField from '../form/TextField';
import { DatePicker } from '../date-picker';
import { addIngredient } from './actions/add-ingredient';

type StorageZone = 'FRIDGE' | 'FREEZER' | 'PANTRY';

const zoneOptions: {
  value: StorageZone;
  label: string;
  Icon: React.ElementType;
}[] = [
  { value: 'FRIDGE', label: '냉장', Icon: Snowflake },
  { value: 'FREEZER', label: '냉동', Icon: UtensilsCrossed },
  { value: 'PANTRY', label: '선반', Icon: Package },
];

const inputClass =
  'w-full rounded-xl bg-surface-container px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all';

const FridgeForm = () => {
  const [state, action, pending] = useActionState(addIngredient, undefined);
  const [zone, setZone] = useState<StorageZone>('FRIDGE');

  const fieldError = (field: string) => state?.error?.[field]?.[0];

  return (
    <Form className="space-y-7" action={action}>
      {/* 폼 전체 에러 */}
      {fieldError('_form') && (
        <div className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {fieldError('_form')}
        </div>
      )}

      {/* 재료명 */}
      <TextField
        id="name"
        name="name"
        label="재료명"
        placeholder="예: 시금치"
        required
        error={fieldError('name')}
        className={inputClass}
      />

      {/* 수량 + 단위 */}
      <div className="grid grid-cols-2 gap-4">
        <TextField
          id="quantity"
          name="quantity"
          label="수량"
          type="number"
          placeholder="250"
          error={fieldError('quantity')}
          className={inputClass}
        />
        <div>
          <label
            htmlFor="unit"
            className="text-sm font-semibold text-on-surface-variant"
          >
            단위
          </label>
          <select
            id="unit"
            name="unit"
            className={`mt-2 ${inputClass} appearance-none`}
          >
            <option value="G">그램 (g)</option>
            <option value="KG">킬로그램 (kg)</option>
            <option value="ML">밀리리터 (ml)</option>
            <option value="L">리터 (l)</option>
            <option value="EA">개 (ea)</option>
          </select>
        </div>
      </div>

      {/* 보관 위치 */}
      <div className="space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
          보관 위치
        </label>
        <input type="hidden" name="storage" value={zone} />
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
        {fieldError('storage') && (
          <p className="text-xs text-destructive">{fieldError('storage')}</p>
        )}
      </div>

      {/* 유통기한 */}
      <div className="space-y-2">
        <label
          htmlFor="expireAt"
          className="block text-xs font-semibold uppercase tracking-[0.05rem] text-primary"
        >
          유통기한
        </label>
        <DatePicker
          name="expireAt"
          placeholder="유통기한 선택"
          className={`${inputClass} w-full`}
          disabled={pending}
        />
        {fieldError('expireAt') && (
          <p className="text-xs text-destructive">{fieldError('expireAt')}</p>
        )}
      </div>

      {/* 버튼 */}
      <div className="pt-2 flex gap-3">
        <button
          type="submit"
          disabled={pending}
          className="flex-1 bg-primary text-on-primary rounded-2xl py-3.5 font-semibold shadow-ambient hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? '저장 중...' : '확인 & 저장'}
        </button>
        <button
          type="reset"
          className="px-8 text-primary rounded-2xl py-3.5 font-semibold hover:bg-surface-container transition-all"
        >
          초기화
        </button>
      </div>
    </Form>
  );
};

export default FridgeForm;
