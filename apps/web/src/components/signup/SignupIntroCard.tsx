interface SignupIntroCardProps {
  eyebrow: string;
  title: string;
  description: string;
  progress: { title: string; subtitle: string; details: string };
  benefits: string[];
}

const SignupIntroCard = ({
  eyebrow,
  title,
  description,
  progress,
  benefits,
}: SignupIntroCardProps) => {
  return (
    <section className="flex-1 rounded-3xl bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 p-8 shadow-lg shadow-emerald-200/60">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base text-emerald-50 leading-relaxed">{description}</p>
      <div className="mt-8 grid gap-4 text-sm">
        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">
            {progress.title}
          </p>
          <p className="mt-2 text-lg font-bold text-white">{progress.subtitle}</p>
          <p className="text-emerald-100 text-sm">{progress.details}</p>
        </div>
        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">BENEFITS</p>
          <ul className="mt-3 space-y-2 text-white">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/30 text-[10px] font-bold">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SignupIntroCard;
