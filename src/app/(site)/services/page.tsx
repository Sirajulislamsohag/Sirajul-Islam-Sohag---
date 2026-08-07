import { PageHeader } from '@/components/sections/page-header';
import { Services } from '@/components/sections/services';
import { ClientUnderstanding } from '@/components/sections/client-understanding';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TextReveal } from '@/components/animations/text-reveal';
import { Card } from '@/components/ui/card';
import { Search, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Sirajul - Performance Marketing Solutions',
  description: 'Explore full-funnel digital marketing services: Google Ads management, Meta Ads, SEO optimization, GA4 analytics setup, and CRO to maximize ROI.',
  keywords: ['google ads management', 'facebook ads service', 'seo optimization service', 'ga4 tracking', 'ppc consultant'],
};

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
      <div className="pt-24 md:pt-32">
        <Services />
      </div>

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

      <ClientUnderstanding />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
