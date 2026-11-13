import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck, CalendarDays, Info, Layers, MapPin, Target, UserRound } from 'lucide-react';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CtaButtons } from '@/components/landing/cta-buttons';
import { Breadcrumbs, CheckList, Section, SectionHeading } from '@/components/landing/shared-sections';
import { ImageLightboxGrid } from '@/components/case-studies/image-lightbox-grid';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { CASE_STUDIES, caseStudyHref, getCaseStudy } from '@/content/case-studies';
import { INDUSTRY_PAGES, industryHref } from '@/content/industries';
import { absoluteUrl, jsonLdScript, pageMetadata, PERSON_NAME, SITE_URL } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.seoTitle,
    absoluteTitle: true,
    description: study.metaDescription,
    path: caseStudyHref(study.slug),
    imageAlt: study.thumbnail.alt,
    keywords: ['Google Ads case study', `${study.industry} Google Ads`, 'PPC results', ...study.campaignTypes],
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = absoluteUrl(caseStudyHref(study.slug));
  const hasBefore = study.results.some((r) => r.before);
  const industries = INDUSTRY_PAGES.filter((p) => study.relatedIndustries.includes(p.slug));
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: study.title,
        description: study.metaDescription,
        image: absoluteUrl(study.thumbnail.src),
        url,
        author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PERSON_NAME },
        publisher: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PERSON_NAME },
        about: `Google Ads for ${study.industry}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: absoluteUrl('/portfolio') },
          { '@type': 'ListItem', position: 3, name: study.title, item: url },
        ],
      },
    ],
  };

  const facts = [
    { icon: Layers, label: 'Industry', value: study.industry },
    ...(study.location ? [{ icon: MapPin, label: 'Country', value: study.location }] : []),
    { icon: CalendarDays, label: 'Results period', value: study.period.after },
    { icon: UserRound, label: 'My role', value: study.role },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      {/* Hero */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/portfolio' }, { label: study.industry }]} />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3">
                Google Ads Case Study: {study.industry}
              </p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">{study.title}</h1>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">{study.summary}</p>
              <dl className="grid sm:grid-cols-2 gap-4 mb-8">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{label}</dt>
                      <dd className="text-sm text-[var(--text)]">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <CtaButtons context={`${study.industry} Google Ads`} size="lg" />
            </div>
            <Image
              src={study.thumbnail.src}
              alt={study.thumbnail.alt}
              width={study.thumbnail.width}
              height={study.thumbnail.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto rounded-3xl border border-[var(--border)] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Key results */}
      <section className="py-12 md:py-16 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
          {study.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{h.value}</p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real account screenshots */}
      <Section tone="card" id="screenshots">
        <div className="max-w-3xl mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 mb-4">
            <BadgeCheck className="w-4 h-4" /> Real Google Ads account
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Screenshots from the Google Ads account</h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
            Taken directly from the client&apos;s Google Ads account. Account names, emails and IDs are cropped out for privacy. Click any screenshot to enlarge it.
          </p>
        </div>
        <ImageLightboxGrid images={study.screenshots} />
      </Section>

      {/* Results table */}
      <Section>
        <SectionHeading
          title="Results"
          subtitle={hasBefore ? `Before: ${study.period.before}. After: ${study.period.after}.` : `Results period: ${study.period.after}.`}
        />
        <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
          <table className="w-full min-w-[480px] text-left text-sm md:text-base">
            <thead className="bg-[var(--bg-card)] text-[var(--text-muted)] text-xs uppercase tracking-wide">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Metric</th>
                {hasBefore && <th scope="col" className="px-5 py-4 font-semibold">Before</th>}
                <th scope="col" className="px-5 py-4 font-semibold">{hasBefore ? 'After' : 'Result'}</th>
              </tr>
            </thead>
            <tbody>
              {study.results.map((row) => (
                <tr key={row.label} className="border-t border-[var(--border)]">
                  <th scope="row" className="px-5 py-4 font-medium text-[var(--text)]">{row.label}</th>
                  {hasBefore && <td className="px-5 py-4 text-[var(--text-secondary)]">{row.before ?? '-'}</td>}
                  <td className="px-5 py-4 font-heading font-bold text-primary">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {study.notes && study.notes.length > 0 && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 text-sm text-[var(--text-secondary)] leading-relaxed">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-2">
              {study.notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Story */}
      <Section tone="card">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">The challenge</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{study.challenge}</p>
            <h3 className="text-lg font-heading font-semibold mb-3">Before optimization</h3>
            <ul className="space-y-2 text-[var(--text-secondary)] mb-10 list-disc pl-5">
              {study.beforeProblems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" /> Goals
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{study.goals}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">What I did</h2>
            <CheckList items={study.workDone} />
            <p className="mt-6 text-sm text-[var(--text-muted)]">Campaign types: {study.campaignTypes.join(', ')}</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-10 mb-4">The outcome</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{study.outcome}</p>
          </div>
        </div>
      </Section>

      {/* Related pages */}
      <Section>
        {industries.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Related Google Ads services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((p) => (
                <Link
                  key={p.slug}
                  href={industryHref(p.slug)}
                  className="group flex items-center justify-between rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
                >
                  <span className="font-heading font-semibold group-hover:text-primary transition-colors">{p.h1}</span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">More case studies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 border-t border-[var(--border)] bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Want results like these for your business?</h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8">
            Book a free strategy call or request a Google Ads audit. I will review your account, tracking and lead quality and show you where the biggest gains are.
          </p>
          <CtaButtons context={`${study.industry} Google Ads`} size="lg" className="justify-center" />
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
