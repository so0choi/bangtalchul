import { Ingredient, IngredientStatus } from 'gql/graphql';
import Image from 'next/image';
import dayjs from 'dayjs';

const statusConfig: Record<
  IngredientStatus,
  { label: string; className: string }
> = {
  [IngredientStatus.Fresh]: {
    label: '신선',
    className: 'bg-primary-container/10 text-primary',
  },
  [IngredientStatus.ExpiringSoon]: {
    label: '만료 임박',
    className: 'bg-tertiary-container/10 text-tertiary',
  },
  [IngredientStatus.Expired]: {
    label: '만료',
    className: 'bg-error-container/10 text-error',
  },
  [IngredientStatus.Used]: {
    label: '사용됨',
    className: 'bg-surface-container text-on-surface-variant',
  },
  [IngredientStatus.Discarded]: {
    label: '폐기',
    className: 'bg-error-container/10 text-error',
  },
};

const IngredientsList: React.FC<{ ingredients: Ingredient[] }> = ({
  ingredients,
}) => {
  return ingredients.map((item) => {
    const status = statusConfig[item.status || IngredientStatus.Fresh];
    return (
      <div
        key={item.name}
        className="rounded-2xl bg-surface-container-lowest px-5 py-4 flex items-center gap-4 hover:shadow-ambient transition cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container shrink-0 flex items-center justify-center">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <span className="text-sm font-bold text-on-surface-variant">
              {item.name[0]}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-sm font-semibold text-on-surface truncate">
            {item.name}
          </h4>
          <p className="text-xs text-on-surface-variant">{item.storage}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.05rem] text-on-surface-variant mb-0.5">
              만료일
            </p>
            <p className="text-xs font-semibold text-on-surface">
              {item.expireAt ? dayjs(item.expireAt).format('YYYY. MM. DD') : <span className="text-on-surface-variant/40">-</span>}
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${status.className}`}
          >
            {status.label}
          </span>
        </div>
      </div>
    );
  });
};
export default IngredientsList;
