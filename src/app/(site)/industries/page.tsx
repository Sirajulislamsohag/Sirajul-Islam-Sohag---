import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/page-header';
import { CTASection } from '@/components/sections/cta-section';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { INDUSTRY_PAGES } from '@/lib/industries';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads by Industry - Home Services, Local & E-commerce',
  description:
    'Google Ads management by industry: roofing, HVAC and plumbing, cleaning, electrical, home services, local businesses, auto and tyre services, and e-commerce.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Google Ads by Industry"
        subtitle="Every industry has different search intent, urgency and cost per lead. Pick yours to see how I would run your Google Ads."
        breadcrumbCurrent="Industries"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {INDUSTRY_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/industries/${page.slug}`}
              className="group flex flex-col justify-between rounded-2xl p-7 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
            >
              <div>
                <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {page.h1}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{page.metaDescription}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary">
                See the strategy <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
