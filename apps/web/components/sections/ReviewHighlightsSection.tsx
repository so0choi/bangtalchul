import Link from "next/link";

export interface ReviewHighlight {
  name: string;
  role: string;
  quote: string;
}

interface ReviewHighlightsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  reviews: ReviewHighlight[];
}

const ReviewHighlightsSection = ({
  eyebrow,
  title,
  description,
  cta,
  reviews,
}: ReviewHighlightsSectionProps) => {
  return (
    <section id="reviews" className="mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
          <p className="mt-1 text-slate-400">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-white underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-left shadow-lg shadow-black/20"
          >
            <p className="text-slate-300">{review.quote}</p>
            <figcaption className="mt-6 text-sm font-semibold text-white">
              {review.name}
              <span className="ml-2 text-xs font-normal text-slate-400">{review.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ReviewHighlightsSection;
