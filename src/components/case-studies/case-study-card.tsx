import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { caseStudyHref, type CaseStudy } from '@/content/case-studies';

/** Whole card links to the case study page. Server component. */
export function CaseStudyCard({ study, headingLevel = 'h3' }: { study: CaseStudy; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <Link
      href={caseStudyHref(study.slug)}
      aria-label={study.title}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={study.thumbnail.src}
          alt={study.thumbnail.alt}
          width={study.thumbnail.width}
          height={study.thumbnail.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {study.industry}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-lg font-heading font-bold leading-snug text-[var(--text)] group-hover:text-primary transition-colors mb-3">
          {study.title}
        </Heading>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{study.summary}</p>
        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-4">
          {study.highlights.map((h) => (
            <div key={h.label}>
              <p className="text-base md:text-lg font-heading font-bold text-primary leading-tight">{h.value}</p>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug mt-1">{h.label}</p>
            </div>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary group-hover:translate-x-1 transition-transform">
          Read the case study <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
