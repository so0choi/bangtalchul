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
      {/* Posts column */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
              {eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-on-surface">{title}</h2>
          </div>
          <button className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            {ctaLabel}
          </button>
        </div>
        {/* Items separated by spacing, no dividers */}
        <div className="mt-8 rounded-3xl bg-surface-container-low p-4 space-y-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl bg-surface-container-lowest px-5 py-4 transition hover:shadow-ambient"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
                {post.category}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-on-surface">{post.title}</h3>
              <p className="mt-1 text-sm text-on-surface-variant">by {post.author}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Spotlight — primary gradient CTA panel */}
      <div className="rounded-3xl bg-linear-to-br from-primary to-primary-container p-8 shadow-ambient">
        <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-on-primary/70">
          {spotlight.eyebrow}
        </p>
        <h3 className="font-display mt-4 text-2xl font-bold text-on-primary">{spotlight.title}</h3>
        <p className="mt-3 text-sm text-on-primary/80 leading-relaxed">{spotlight.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-on-primary">
          {spotlight.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-on-primary/20 text-on-primary text-[10px] font-bold">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href={spotlight.cta.href}
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-on-primary px-6 py-3 text-base font-semibold text-primary shadow-ambient transition hover:opacity-90"
        >
          {spotlight.cta.label}
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
