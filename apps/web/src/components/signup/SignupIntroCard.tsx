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
    <section className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-950 p-8 shadow-2xl shadow-black/20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base text-slate-300">{description}</p>
      <div className="mt-8 grid gap-4 text-sm text-slate-200">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
            {progress.title}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{progress.subtitle}</p>
          <p className="text-slate-400">{progress.details}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">BENEFITS</p>
          <ul className="mt-3 space-y-2">
            {benefits.map((benefit) => (
              <li key={benefit}>· {benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SignupIntroCard;
