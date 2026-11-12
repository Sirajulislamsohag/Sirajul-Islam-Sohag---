import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, BarChart3, ClipboardList, Code2, LineChart, Search, Settings2, ShoppingBag, Sparkles, Target, Wrench } from 'lucide-react';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CtaButtons } from '@/components/landing/cta-buttons';
import { PageImageBlock } from '@/components/landing/page-image';
import {
  Breadcrumbs,
  CheckList,
  FaqList,
  RelatedIndustries,
  RelatedServices,
  Section,
  SectionHeading,
  TitledGrid,
} from '@/components/landing/shared-sections';
import { SERVICE_PAGES, getServicePage, serviceHref } from '@/content/services';
import { pageMetadata, absoluteUrl, jsonLdScript, SITE_URL, PERSON_NAME } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return pageMetadata({
      title: page.seoTitle,
      absoluteTitle: true,
      description: page.metaDescription,
      path: serviceHref(page.slug),
    imageAlt: page.imageAlt,
    keywords: page.tags,
  });
}

const ICONS: Record<string, LucideIcon> = {
  'google-ads-management': Settings2,
  'google-ads-audit': ClipboardList,
  'google-search-ads': Search,
  'performance-max-management': Sparkles,
  'google-shopping-management': ShoppingBag,
  'google-ads-conversion-tracking': Target,
  'google-tag-manager': Code2,
  'ga4-consultant': LineChart,
  'looker-studio-dashboard': BarChart3,
};

export default async function ServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const url = absoluteUrl(serviceHref(page.slug));
  const Icon = ICONS[page.slug] ?? Wrench;

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
        name: page.name,
        serviceType: page.name,
        description: page.metaDescription,
        url,
        provider: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PERSON_NAME },
        areaServed: { '@type': 'Country', name: 'United States' },
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
          { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
          { '@type': 'ListItem', position: 3, name: page.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: page.name }]} />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3">Google Ads Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">{page.h1}</h1>
              <p className="text-xl md:text-2xl font-heading font-semibold mb-4">{page.heroHeadline}</p>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">{page.heroText}</p>
              <CheckList items={page.valueProps} />
              <CtaButtons context={page.name} className="mt-8" size="lg" />
            </div>
            <PageImageBlock image={page.heroImage} fallbackIcon={Icon} fallbackLabel={page.name} priority className="aspect-[4/3] lg:aspect-[5/4]" />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading title="Who this service is for" subtitle="The businesses and situations where this makes the biggest difference." />
          <CheckList items={page.whoItsFor} />
        </div>
      </Section>

      {/* Problems */}
      <Section tone="card">
        <SectionHeading title="Problems this solves" subtitle="The issues I find most often when reviewing accounts." />
        <TitledGrid items={page.problems} columns={2} icon={<AlertTriangle className="w-6 h-6 text-amber-400" />} />
      </Section>

      {/* What's included */}
      <Section>
        <SectionHeading
          title={
            <>
              What is included in <span className="text-gradient">{page.name.toLowerCase()}</span>
            </>
          }
        />
        <TitledGrid items={page.included} />
      </Section>

      {/* Process */}
      <Section tone="card">
        <SectionHeading title="How it works" subtitle="A clear process from first review to delivery." />
        <TitledGrid items={page.process} numbered />
      </Section>

      {/* Deliverables and tools */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6">What you receive</h2>
            <CheckList items={page.deliverables} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6">Tools and platforms</h2>
            <div className="flex flex-wrap gap-2">
              {page.tools.map((tool) => (
                <span key={tool} className="text-sm px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section tone="card">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title={<>{page.name}: frequently asked questions</>} center />
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      {/* Related */}
      <Section>
        <div className="space-y-12">
          <RelatedServices slugs={page.relatedServices} />
          <RelatedIndustries slugs={page.relatedIndustries} heading="Industries this service is used in" />
          <p className="text-sm text-[var(--text-muted)]">
            See all <Link href="/services" className="text-primary hover:underline">Google Ads services</Link>, browse{' '}
            <Link href="/portfolio" className="text-primary hover:underline">case studies</Link> or{' '}
            <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
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
