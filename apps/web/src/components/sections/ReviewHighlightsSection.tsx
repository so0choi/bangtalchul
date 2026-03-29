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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-slate-500">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm"
          >
            <p className="text-slate-600 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                {review.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-500">{review.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ReviewHighlightsSection;
