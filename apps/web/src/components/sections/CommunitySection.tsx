import Link from "next/link";

export interface CommunityPost {
  title: string;
  author: string;
  category: string;
}

interface SpotlightContent {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
}

interface CommunitySectionProps {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  posts: CommunityPost[];
  spotlight: SpotlightContent;
}

const CommunitySection = ({
  eyebrow,
  title,
  ctaLabel,
  posts,
  spotlight,
}: CommunitySectionProps) => {
  return (
    <section id="community" className="mt-20 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
          </div>
          <button className="text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline">
            {ctaLabel}
          </button>
        </div>
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-500">by {post.author}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 p-8 shadow-lg shadow-emerald-200/60">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
          {spotlight.eyebrow}
        </p>
        <h3 className="mt-4 text-2xl font-bold text-white">{spotlight.title}</h3>
        <p className="mt-3 text-sm text-emerald-50 leading-relaxed">{spotlight.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-white">
          {spotlight.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/30 text-white text-[10px] font-bold">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href={spotlight.cta.href}
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:shadow-md"
        >
          {spotlight.cta.label}
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
