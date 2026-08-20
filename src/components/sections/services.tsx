'use client';

import {
  Search,
  ShoppingBag,
  Video,
  Layers,
  LayoutDashboard,
  Gauge,
  Target,
  Sliders,
  BrainCircuit,
  ArrowUpRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TiltCard } from '@/components/animations/tilt-card';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { useCalendly } from '@/providers/calendly-provider';

const SERVICES_DATA = [
  {
    id: 'search-campaigns',
    title: 'Google Ads Search Campaigns',
    description:
      'Keyword-targeted Search campaigns backed by competitor research, built to capture high-intent traffic and lower cost per lead.',
    icon: Search,
    tags: ['Search Campaigns', 'Competitor Research', 'Keyword Strategy', 'Negative Keyword Management'],
  },
  {
    id: 'pmax-shopping',
    title: 'Performance Max & Shopping',
    description:
      'Performance Max and Shopping campaigns optimized with Smart Bidding and feed management to maximize return on ad spend.',
    icon: ShoppingBag,
    tags: ['Performance Max', 'Shopping Ads', 'Product Feed Optimization', 'Smart Bidding'],
  },
  {
    id: 'display-youtube',
    title: 'Display & YouTube Ads',
    description:
      'Display and YouTube campaigns that extend reach and keep your brand in front of the right audience across the funnel.',
    icon: Video,
    tags: ['Display Network', 'YouTube Ads', 'Remarketing', 'Video Campaigns'],
  },
  {
    id: 'analytics-tracking',
    title: 'Analytics & Conversion Tracking',
    description:
      'Full GA4 and Google Tag Manager setup with server-side tracking through conversions API integration and Stape, so every conversion is attributed correctly.',
    icon: Layers,
    tags: ['GA4 Setup', 'GTM Implementation', 'Server-Side Tracking', 'Conversion Tracking'],
  },
  {
    id: 'reporting-dashboards',
    title: 'Reporting & Dashboards',
    description:
      'Custom Looker Studio dashboards that give you a real-time, transparent view of what your ad spend is actually doing.',
    icon: LayoutDashboard,
    tags: ['Custom Dashboards', 'Multi-Account Reporting', 'Weekly Performance Reports'],
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization',
    description:
      'Landing page and account audits that turn more clicks into leads without increasing budget.',
    icon: Gauge,
    tags: ['Landing Page Audits', 'A/B Testing', 'Account Audits'],
  },
  {
    id: 'conversion-strategy',
    title: 'Conversion-First Strategy',
    description:
      'Every campaign is built around your actual conversion goals, not vanity metrics like clicks or impressions.',
    icon: Target,
    tags: ['Goal-Based Optimization', 'Lead Quality Focus'],
  },
  {
    id: 'smart-bidding',
    title: 'Smart Bidding Expertise',
    description:
      'Target CPA, Target ROAS, and Maximize Conversions strategies structured and monitored closely, not left on autopilot.',
    icon: Sliders,
    tags: ['Target CPA', 'Target ROAS', 'Bid Strategy Management'],
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Decisions',
    description:
      'No guesswork. GA4 data, attribution modeling, and structured testing guide every budget and bidding decision.',
    icon: BrainCircuit,
    tags: ['GA4 Insights', 'Attribution Modeling', 'A/B Testing'],
  },
];

export function Services() {
  const { openCalendly } = useCalendly();

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            WHAT I OFFER
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Google Ads Services That Scale Businesses
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            End-to-end Google Ads management, from strategy and campaign build to tracking and optimization, designed to lower your cost per lead and maximize return on ad spend.
          </TextReveal>
        </div>

        {/* 9-Card Services Grid with Strictly Uniform Heights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.07} className="h-full">
                <TiltCard maxTilt={5} className="h-full">
                  <Card
                    variant="spotlight"
                    className="h-full flex flex-col p-6 sm:p-7 group hover-glow transition-all duration-300 cursor-pointer justify-between"
                    onClick={() =>
                      openCalendly({
                        title: `Consultation: ${service.title}`,
                        subtitle: `Let's discuss scaling your business with ${service.title.toLowerCase()}.`,
                      })
                    }
                  >
                    <div>
                      {/* Icon Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-slate-950 transition-all duration-300 shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-[var(--text-muted)] group-hover:text-primary transition-colors flex items-center gap-1">
                          Discuss <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>

                      {/* Title with uniform min-height for 1 vs 2 line titles */}
                      <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors min-h-[56px] flex items-start">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature Tags with uniform footer alignment */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)] mt-auto min-h-[60px] content-start">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[11px] px-2.5 py-0.5 bg-[var(--bg-card)]/50 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] group-hover:border-primary/30 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
