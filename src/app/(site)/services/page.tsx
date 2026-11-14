import { Services } from '@/components/sections/services';
import { ToolsPlatforms } from '@/components/sections/tools-platforms';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TextReveal } from '@/components/animations/text-reveal';
import { Card } from '@/components/ui/card';
import { Search, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { CTASection } from '@/components/sections/cta-section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PAGES, serviceHref } from '@/content/services';
import { INDUSTRY_PAGES, industryHref } from '@/content/industries';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Services | PPC Management & Tracking',
  absoluteTitle: true,
  description:
    'Google Ads services for Search, PMax, Shopping, tracking, CRO and reporting, built to reduce wasted spend and improve qualified leads and ROAS.',
  path: '/services',
  imageAlt: 'Google Ads services including Search PMax Shopping and conversion tracking',
  keywords: ['Google Ads services', 'PPC services', 'paid search', 'conversion tracking', 'performance marketing'],
});

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description: 'We analyze your current ad accounts, analytics, and target audience to craft a tailored growth roadmap.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Campaign Setup',
    description: 'Structure campaigns, configure accurate GA4/GTM tracking, and build high-converting ad copy and creatives.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Optimization & Scaling',
    description: 'Daily bid monitoring, A/B testing ad variations, negative keywords, and reallocating budget to top performers.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Reporting & ROI',
    description: 'Transparent weekly dashboards showing real business metrics: CPA, ROAS, leads, and revenue generated.',
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20">
        <Services headingAs="h1" />
      </div>

      {/* Service pages */}
      <section className="py-20 md:py-24 border-y border-[var(--border)] bg-[var(--bg-card)]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Services in detail</p>
            <h2 className="section-heading mb-4">Google Ads services, one page each</h2>
            <p className="section-subheading">
              Each service has its own page explaining what is included, how it works, what you receive and the questions clients ask most.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICE_PAGES.map((service) => (
              <Link
                key={service.slug}
                href={serviceHref(service.slug)}
                className="group flex flex-col justify-between rounded-2xl p-6 md:p-7 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{service.heroHeadline}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Industries</p>
            <h2 className="section-heading mb-4">Google Ads strategies by industry</h2>
            <p className="section-subheading">Industry-specific campaign structures, negative keywords, tracking and FAQs.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {INDUSTRY_PAGES.map((page) => (
              <Link
                key={page.slug}
                href={industryHref(page.slug)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-sm font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                {page.h1}
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ToolsPlatforms />

      {/* 4-Step Process Section */}
      <section className="py-24 relative overflow-hidden bg-[var(--bg-card)]/40 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Proven Framework
            </TextReveal>
            <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
              How We Work Together
            </TextReveal>
            <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
              A systematic, step-by-step approach to taking your campaigns from setup to profitable scaling.
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <Card variant="glass" className="h-full relative overflow-hidden group hover-glow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-number text-4xl font-bold text-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ClientReviews />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
