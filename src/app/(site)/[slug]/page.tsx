import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Car,
  Droplets,
  Hammer,
  HardHat,
  Home,
  Layers,
  MapPin,
  Scale,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Store,
  Thermometer,
  Wrench,
  Zap,
} from 'lucide-react';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CtaButtons } from '@/components/landing/cta-buttons';
import { PageImageBlock } from '@/components/landing/page-image';
import { CaseStudiesSection } from '@/components/case-studies/case-studies-section';
import { ImageLightboxGrid } from '@/components/case-studies/image-lightbox-grid';
import { caseStudiesForIndustry, snapshotsForIndustry } from '@/content/case-studies';
import {
  Breadcrumbs,
  CheckList,
  FaqList,
  RelatedIndustries,
  RelatedServices,
  Section,
  SectionHeading,
  TitledGrid,
  WORK_PROCESS,
} from '@/components/landing/shared-sections';
import { INDUSTRY_PAGES, getIndustryPage, industryHref } from '@/content/industries';
import { SERVICE_PAGES, serviceHref } from '@/content/services';
import { pageMetadata, absoluteUrl, jsonLdScript, SITE_URL, PERSON_NAME } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return pageMetadata({
      title: page.seoTitle,
      absoluteTitle: true,
      description: page.metaDescription,
      path: industryHref(page.slug),
    imageAlt: page.imageAlt,
    keywords: page.tags,
  });
}

const ICONS: Record<string, LucideIcon> = {
  'google-ads-for-roofing': Home,
  'google-ads-for-hvac': Thermometer,
  'google-ads-for-plumbers': Droplets,
  'google-ads-for-electricians': Zap,
  'google-ads-for-contractors': HardHat,
  'google-ads-for-cleaning-businesses': Sparkles,
  'google-ads-for-auto-services': Car,
  'google-ads-for-dentists': Stethoscope,
  'google-ads-for-law-firms': Scale,
  'google-ads-for-ecommerce': ShoppingCart,
  'google-ads-for-local-businesses': Store,
  'google-ads-for-home-services': Hammer,
};

const SERVICE_SLUGS_FOR_SECTION = [
  'google-ads-audit',
  'google-ads-management',
  'google-search-ads',
  'google-ads-conversion-tracking',
  'google-tag-manager',
  'looker-studio-dashboard',
];

export default async function IndustryLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();
  const relatedStudies = caseStudiesForIndustry(page.slug);
  const relatedSnapshots = snapshotsForIndustry(page.slug);

  const url = absoluteUrl(industryHref(page.slug));
  const Icon = ICONS[page.slug] ?? Wrench;
  const servicesForSection = SERVICE_SLUGS_FOR_SECTION.map((s) => SERVICE_PAGES.find((p) => p.slug === s)).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.metaDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${url}#service` },
        author: { '@id': `${SITE_URL}/#person` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        serviceType: 'Google Ads management',
        description: page.metaDescription,
        url,
        provider: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PERSON_NAME },
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: { '@type': 'BusinessAudience', name: page.name },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Industries', item: absoluteUrl('/industries') },
          { '@type': 'ListItem', position: 3, name: page.h1, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      {/* A. Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }, { label: page.name }]} />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3">Google Ads Management for {page.name}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">{page.h1}</h1>
              <p className="text-xl md:text-2xl font-heading font-semibold text-[var(--text)] mb-4">{page.heroHeadline}</p>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">{page.heroText}</p>
              <CheckList items={page.valueProps} />
              <CtaButtons context={page.name} className="mt-8" size="lg" />
            </div>
            <PageImageBlock image={page.heroImage} fallbackIcon={Icon} fallbackLabel={page.h1} priority className="aspect-[4/3] lg:aspect-[5/4]" />
          </div>
        </div>
      </section>

      {page.overview && (
        <section className="py-12 md:py-16 border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)]">{page.overview}</p>
          </div>
        </section>
      )}

      {/* B. Challenges */}
      <Section>
        <SectionHeading
          title={<>Why Google Ads underperforms for {page.noun}</>}
          subtitle="These are the problems I see most often when auditing accounts in this industry."
        />
        <TitledGrid items={page.challenges} icon={<AlertTriangle className="w-6 h-6 text-amber-400" />} />
      </Section>

      {/* C. Strategy */}
      <Section tone="card">
        <SectionHeading
          title={
            <>
              My Google Ads strategy for <span className="text-gradient">{page.name.toLowerCase()}</span>
            </>
          }
          subtitle="How campaigns are researched, built and optimized for this industry."
        />
        <TitledGrid items={page.strategy} numbered />
      </Section>

      {/* D. Campaign structure examples */}
      <Section>
        <SectionHeading
          title="Example campaign structure"
          subtitle="A realistic starting structure based on how customers in this industry search. Match types shown as [exact], &quot;phrase&quot; and broad."
        />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {page.campaignExamples.map((campaign) => (
            <div key={campaign.campaign} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden">
              <div className="px-6 py-4 border-b border-[var(--border)] flex items-start gap-3">
                <Layers className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold">{campaign.campaign}</h3>
                  <p className="text-xs md:text-sm text-[var(--text-muted)] mt-0.5">Goal: {campaign.goal}</p>
                </div>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {campaign.adGroups.map((group) => (
                  <div key={group.name} className="px-6 py-4">
                    <p className="text-sm font-semibold mb-2">Ad group: {group.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.keywords.map((kw) => (
                        <code key={kw} className="text-xs md:text-[13px] px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]">
                          {kw}
                        </code>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* F. Location targeting */}
      <Section tone="card">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {page.sectionImage && (
            <PageImageBlock
              image={page.sectionImage}
              fallbackIcon={Icon}
              fallbackLabel={page.h1}
              className="aspect-[4/3] order-last lg:order-first"
            />
          )}
          <div className={page.sectionImage ? '' : 'lg:col-span-2 max-w-3xl'}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Location targeting</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{page.locationTargeting.intro}</p>
            <ul className="space-y-3">
              {page.locationTargeting.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* G. Services */}
      <Section>
        <SectionHeading
          title={<>Google Ads services for {page.noun}</>}
          subtitle="Everything needed to run the account properly, from the first audit to monthly reporting."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesForSection.map((service) => (
            <Link
              key={service!.slug}
              href={serviceHref(service!.slug)}
              className="group rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
            >
              <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                {service!.name}
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{service!.heroHeadline}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* H. Conversion and lead-quality tracking */}
      <Section tone="card">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Conversion and lead-quality tracking</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{page.trackingText}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href={serviceHref('google-ads-conversion-tracking')} className="text-primary font-semibold hover:underline">
                Conversion tracking setup
              </Link>
              <span className="text-[var(--text-muted)]">|</span>
              <Link href={serviceHref('google-tag-manager')} className="text-primary font-semibold hover:underline">
                Google Tag Manager
              </Link>
              <span className="text-[var(--text-muted)]">|</span>
              <Link href={serviceHref('ga4-consultant')} className="text-primary font-semibold hover:underline">
                GA4 consulting
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" /> The journey we measure
            </p>
            <ol className="space-y-3">
              {page.conversionJourney.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-[var(--text-secondary)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* I. Case studies (real accounts) */}
      {(relatedStudies.length > 0 || relatedSnapshots.length > 0) && (
        <section id="case-studies" className="border-y border-[var(--border)] bg-[var(--bg-card)]/40">
          <CaseStudiesSection
            studies={relatedStudies}
            id="industry-case-studies"
            title={<>Google Ads results for {page.noun}</>}
            subtitle="Case studies from real Google Ads accounts I manage, with the account screenshots on each page."
          />
          {relatedSnapshots.length > 0 && (
            <div className={`max-w-7xl mx-auto px-6 pb-20 ${relatedStudies.length === 0 ? 'pt-20' : ''}`}>
              <h3 className="text-2xl font-heading font-bold mb-6">Real account snapshot</h3>
              <ImageLightboxGrid images={relatedSnapshots} columns={3} aspect="aspect-[4/3]" />
            </div>
          )}
        </section>
      )}

      {/* J. Work process */}
      <Section>
        <SectionHeading title="How we work together" subtitle="From the first audit to ongoing management and reporting." />
        <TitledGrid items={WORK_PROCESS} numbered />
      </Section>

      {/* L. FAQs */}
      <Section tone="card">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title={<>Google Ads for {page.name.toLowerCase()}: frequently asked questions</>} center />
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      {/* Related */}
      <Section>
        <div className="space-y-12">
          <RelatedServices slugs={page.relatedServices} />
          <RelatedIndustries slugs={page.relatedIndustries} />
          <p className="text-sm text-[var(--text-muted)]">
            See all <Link href="/industries" className="text-primary hover:underline">industries</Link>, browse{' '}
            <Link href="/portfolio" className="text-primary hover:underline">case studies</Link> or read the{' '}
            <Link href="/blog" className="text-primary hover:underline">Google Ads blog</Link>.
          </p>
        </div>
      </Section>

      {/* M. Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">{page.finalCta.heading}</h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{page.finalCta.text}</p>
          <CtaButtons context={page.name} className="justify-center" size="lg" />
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
