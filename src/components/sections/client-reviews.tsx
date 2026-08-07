'use client';

import { GSAPMarquee } from '@/components/animations/marquee';
import { TextReveal } from '@/components/animations/text-reveal';
import { Card } from '@/components/ui/card';
import { REVIEWS } from '@/lib/constants';
import Image from 'next/image';

export function ClientReviews() {
  const firstRow = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2));
  const secondRow = REVIEWS.slice(Math.ceil(REVIEWS.length / 2));

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Testimonials
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            What Clients Say
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
          </TextReveal>
        </div>
      </div>

      {/* First Row - Left to right */}
      <div className="mb-4">
        <GSAPMarquee pauseOnHover speed={35} gap={16}>
          {firstRow.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </GSAPMarquee>
      </div>

      {/* Second Row - Right to left */}
      <GSAPMarquee pauseOnHover speed={35} gap={16} reverse>
        {secondRow.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </GSAPMarquee>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="w-[320px] md:w-[360px] shrink-0">
      <Card variant="glass" hover className="h-full hover-glow p-6">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} className="text-primary text-base font-bold">★</span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-4 font-normal">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-[var(--border)]">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0">
            <Image
              src={review.photo}
              alt={review.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-heading font-semibold text-[var(--text)] leading-tight truncate">{review.name}</p>
            <p className="text-xs text-[var(--text-muted)] truncate">{review.role}, {review.company}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
