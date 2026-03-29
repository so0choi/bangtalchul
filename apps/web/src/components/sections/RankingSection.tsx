import Link from "next/link";

export interface FeaturedRecipe {
  title: string;
  category: string;
  description: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

interface RankingSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  recipes: FeaturedRecipe[];
}

const RankingSection = ({
  eyebrow,
  title,
  description,
  cta,
  recipes,
}: RankingSectionProps) => {
  return (
    <section id="recipes" className="mt-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-base text-slate-500">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <article
            key={recipe.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-emerald-300"
          >
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{recipe.category}</span>
              <span>{recipe.difficulty}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">{recipe.title}</h3>
            <p className="mt-1 text-slate-500">{recipe.description}</p>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-sm">
              <span className="font-semibold text-slate-700">
                ★ {recipe.rating.toFixed(1)}
                <span className="ml-1 font-normal text-slate-500">({recipe.reviewCount} 후기)</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                인기
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {recipe.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RankingSection;
