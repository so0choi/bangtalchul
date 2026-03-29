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
          <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary">
            {eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-on-surface">{title}</h2>
          <p className="mt-1 text-on-surface-variant">{description}</p>
        </div>
        <Link
          href={cta.href}
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {cta.label}
        </Link>
      </div>
      {/* Tonal container */}
      <div className="mt-10 rounded-3xl bg-surface-container-low p-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl bg-surface-container-lowest p-6 text-left transition hover:shadow-ambient"
            >
              <p className="text-on-surface-variant leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{review.name}</p>
                  <p className="text-xs text-on-surface-variant">{review.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewHighlightsSection;
