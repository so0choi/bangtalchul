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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
          </div>
          <button className="text-sm font-semibold text-indigo-300 underline-offset-4 hover:underline">
            {ctaLabel}
          </button>
        </div>
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                {post.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-slate-400">by {post.author}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/80 via-slate-950 to-slate-950 p-8 shadow-xl shadow-black/20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
          {spotlight.eyebrow}
        </p>
        <h3 className="mt-4 text-2xl font-bold text-white">{spotlight.title}</h3>
        <p className="mt-3 text-sm text-slate-300">{spotlight.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-200">
          {spotlight.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href={spotlight.cta.href}
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:bg-white/20"
        >
          {spotlight.cta.label}
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
