import Link from "next/link";

export interface FeaturedRoom {
  title: string;
  studio: string;
  location: string;
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
  rooms: FeaturedRoom[];
}

const RankingSection = ({
  eyebrow,
  title,
  description,
  cta,
  rooms,
}: RankingSectionProps) => {
  return (
    <section id="ranking" className="mt-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
          <p className="mt-1 text-base text-slate-400">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-indigo-300 underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {rooms.map((room) => (
          <article
            key={room.title}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-indigo-500/60"
          >
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{room.studio}</span>
              <span>{room.difficulty}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{room.title}</h3>
            <p className="mt-1 text-slate-300">{room.location}</p>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-black/30 px-4 py-3 text-sm text-slate-200">
              <span className="font-semibold">
                ★ {room.rating.toFixed(1)} ({room.reviewCount} 리뷰)
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                트렌딩
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {room.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-slate-200">
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
