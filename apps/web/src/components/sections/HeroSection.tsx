import Link from "next/link";

interface HeroStat {
  label: string;
  value: string;
}

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  stats: HeroStat[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const HeroSection = ({
  eyebrow,
  headline,
  description,
  stats,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) => {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 px-8 py-16 text-center shadow-2xl shadow-indigo-900/30">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-slate-300">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 text-left text-sm sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-16 -top-10 h-32 rounded-full bg-indigo-500/20 blur-3xl" />
    </section>
  );
};

export default HeroSection;
