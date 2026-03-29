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
          <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
            {eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-on-surface">{title}</h2>
          <p className="mt-1 text-base text-on-surface-variant">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      {/* Tonal container — surface-container-low wraps surface-container-lowest cards */}
      <div className="mt-10 rounded-3xl bg-surface-container-low p-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="group rounded-2xl bg-surface-container-lowest p-6 transition hover:shadow-ambient"
            >
              <div className="flex items-center justify-between text-sm text-on-surface-variant">
                <span>{recipe.category}</span>
                <span>{recipe.difficulty}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold text-on-surface">{recipe.title}</h3>
              <p className="mt-1 text-on-surface-variant">{recipe.description}</p>
              {/* Rating row */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-surface-container px-4 py-3 text-sm">
                <span className="font-semibold text-on-surface">
                  ★ {recipe.rating.toFixed(1)}
                  <span className="ml-1 font-normal text-on-surface-variant">({recipe.reviewCount} 후기)</span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                  인기
                </span>
              </div>
              {/* Ingredient chips — secondary-fixed */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary-fixed px-3 py-1 text-on-secondary-fixed"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
