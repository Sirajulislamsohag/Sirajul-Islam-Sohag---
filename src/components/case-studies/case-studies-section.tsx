import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '@/content/case-studies';
import { CaseStudyCard } from './case-study-card';

/**
 * Case study cards for the homepage and industry pages.
 * Pass `studies` to show a subset (e.g. those related to one industry).
 */
export function CaseStudiesSection({
  studies = CASE_STUDIES,
  title = 'Google Ads Case Studies',
  subtitle = 'Real results from Google Ads campaigns I manage for US businesses, with verified before and after numbers.',
  showAllLink = true,
  id = 'case-studies',
}: {
  studies?: CaseStudy[];
  title?: React.ReactNode;
  subtitle?: string;
  showAllLink?: boolean;
  id?: string;
}) {
  if (studies.length === 0) return null;
  return (
    <section id={id} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" /> Verified Google Ads results
          </p>
          <h2 className="section-heading mb-4">{title}</h2>
          <p className="section-subheading">{subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        {showAllLink && (
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
