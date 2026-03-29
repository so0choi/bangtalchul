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
    <section className="relative isolate overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 px-8 py-16 text-center shadow-xl shadow-emerald-200/60">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-emerald-50">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-full border-2 border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 text-left text-sm sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 rounded-full bg-white/10 blur-3xl" />
    </section>
  );
};

export default HeroSection;
