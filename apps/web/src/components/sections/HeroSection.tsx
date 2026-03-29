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
    <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary-container px-8 py-16 text-center shadow-ambient">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-on-primary/70">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-on-primary sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-on-primary/80">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-on-primary px-8 py-3 text-base font-semibold text-primary shadow-ambient transition hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-full border-2 border-on-primary/40 px-8 py-3 text-base font-semibold text-on-primary transition hover:bg-on-primary/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
      {/* Stats — glassmorphism floating cards */}
      <div className="mt-12 grid grid-cols-2 gap-4 text-left text-sm sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-surface-container-lowest/20 p-4 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.05rem] text-on-primary/70">
              {stat.label}
            </p>
            <p className="font-display mt-2 text-2xl font-bold text-on-primary">{stat.value}</p>
          </div>
        ))}
      </div>
      {/* Decorative blur */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 rounded-full bg-on-primary/5 blur-3xl" />
    </section>
  );
};

export default HeroSection;
