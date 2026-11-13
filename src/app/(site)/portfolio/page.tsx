import { PageHeader } from '@/components/sections/page-header';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { ImageLightboxGrid } from '@/components/case-studies/image-lightbox-grid';
import { ACCOUNT_SNAPSHOTS, CASE_STUDIES, caseStudyHref } from '@/content/case-studies';
import type { Metadata } from 'next';
import { absoluteUrl, jsonLdScript, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Case Studies & PPC Results | Sirajul Sohag',
  absoluteTitle: true,
  description:
    'See Google Ads and PPC case studies showing lead growth, ROAS gains, lower CPL and campaign scaling across local services and e-commerce brands.',
  path: '/portfolio',
  imageAlt: 'Google Ads case studies and PPC campaign performance results',
  keywords: ['Google Ads case studies', 'PPC results', 'ROAS', 'lead generation', 'portfolio'],
});

export default function PortfolioPage() {
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Google Ads Case Studies',
    itemListElement: CASE_STUDIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(caseStudyHref(c.slug)),
      name: c.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(listSchema)} />
      <PageHeader
        badge="Case Studies"
        title="Google Ads Case Studies & PPC Results"
        subtitle="PPC case studies and Google Ads results from real campaigns: performance marketing case studies across home services, roofing, local services and e-commerce, each backed by screenshots from the ad account."
        breadcrumbCurrent="Case Studies"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} headingLevel="h2" />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--bg-card)]/40 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">More results from real Google Ads accounts</h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              Snapshots from other accounts I manage. Each shows the account&apos;s own date range in the screenshot. Click to enlarge.
            </p>
          </div>
          <ImageLightboxGrid images={ACCOUNT_SNAPSHOTS} columns={3} aspect="aspect-[4/3]" />
        </div>
      </section>

      <TrustedBrands />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
