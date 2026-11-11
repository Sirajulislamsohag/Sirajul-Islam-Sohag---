import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Search, AlertTriangle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { INDUSTRY_PAGES, getIndustryPage } from '@/lib/industries';
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
    title: page.metaTitle,
    absoluteTitle: true,
    description: page.metaDescription,
    path: `/industries/${page.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  const url = absoluteUrl(`/industries/${page.slug}`);
  const related = INDUSTRY_PAGES.filter((p) => p.slug !== page.slug).slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        serviceType: 'Google Ads management',
        description: page.metaDescription,
        url,
        provider: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PERSON_NAME },
        areaServed: ['US', 'AU', 'GB', 'CA'],
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

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[var(--text-muted)] mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href="/industries" className="hover:text-primary transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-[var(--text)] font-medium">{page.name}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3">
              Google Ads Management
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-5">{page.h1}</h1>
            <p className="text-[var(--text-secondary)] text-base md:text-xl leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Free Google Ads Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/8801793859694"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4 max-w-3xl">
            Why {page.name.toLowerCase()} waste money on Google Ads
          </h2>
          <p className="section-subheading mb-12 max-w-3xl">
            These are the issues I see most often when I audit accounts in this industry.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {page.problems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl p-7 bg-[var(--bg-card)] border border-[var(--border)]">
                  <AlertTriangle className="w-6 h-6 text-amber-400 mb-4" />
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-24 bg-[var(--bg-card)]/40 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4 max-w-3xl">
            How I run Google Ads for <span className="text-gradient">{page.name}</span>
          </h2>
          <p className="section-subheading mb-12 max-w-3xl">
            Every account is built around your services, your area and the jobs you want more of.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {page.approach.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="h-full flex gap-4 rounded-2xl p-7 bg-[var(--bg-card)] border border-[var(--border)]">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign types and keywords */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Campaign types I use</h2>
            <ul className="space-y-3">
              {page.campaignTypes.map((type) => (
                <li key={type} className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">High-intent searches we target</h2>
            <div className="flex flex-wrap gap-2.5">
              {page.keywordExamples.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]"
                >
                  <Search className="w-3.5 h-3.5 text-primary" />
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-[var(--bg-card)]/40 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-6 open:border-primary/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-base md:text-lg">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                </summary>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Other industries I work with</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="group flex items-center justify-between rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
              >
                <span className="font-heading font-semibold group-hover:text-primary transition-colors">
                  Google Ads for {item.name}
                </span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
