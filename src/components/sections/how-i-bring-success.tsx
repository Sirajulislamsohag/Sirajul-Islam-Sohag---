'use client';

import { Search, Layers, TrendingUp, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TiltCard } from '@/components/animations/tilt-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SUCCESS_STEPS = [
  {
    step: '01',
    badge: 'Phase 1: Audit & Discovery',
    title: 'Deep Data & Account Audit',
    description: 'We dissect your ad accounts, pixel tracking, and competitors to eliminate wasted ad spend and uncover high-converting keyword opportunities.',
    icon: Search,
    color: '#FDB515',
    highlights: [
      'GA4 & GTM Conversion Health Check',
      'Competitor Bidding & Keyword Analysis',
      'Immediate Ad Spend Waste Elimination',
    ],
  },
  {
    step: '02',
    badge: 'Phase 2: Funnel Architecture',
    title: 'Precision Targeting & CAPI Setup',
    description: 'Structuring high-intent Google Search, Performance Max, Meta ASC campaigns and Server-Side CAPI tracking for 100% conversion attribution.',
    icon: Layers,
    color: '#06B6D4',
    highlights: [
      'Server-Side Meta CAPI & Stape Setup',
      'Granular Campaign & Audience Segmentation',
      'High-Converting Ad Copy & Creative Hooks',
    ],
  },
  {
    step: '03',
    badge: 'Phase 3: Optimization',
    title: 'Rapid Testing & ROAS Tuning',
    description: 'Daily bid monitoring, A/B testing creative variations, negative keyword scrubbing, and shifting budget to top-performing ad sets.',
    icon: TrendingUp,
    color: '#8B5CF6',
    highlights: [
      'Daily Impression Share & Bid Tuning',
      'Creative Hook & Angle A/B Testing',
      'Aggressive Negative Keyword Scrubbing',
    ],
  },
  {
    step: '04',
    badge: 'Phase 4: Scaling',
    title: 'Predictable Revenue Scaling',
    description: 'Scaling ad spend aggressively while maintaining target ROAS, providing real-time transparent executive dashboards for complete peace of mind.',
    icon: Rocket,
    color: '#22C55E',
    highlights: [
      'Looker Studio Real-Time Dashboards',
      'Aggressive Profitable Budget Scaling',
      'Weekly Executive Growth Strategy Calls',
    ],
  },
];

export function HowIBringSuccess() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent border-y border-[var(--border)]">
      {/* Glow Orbs background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Proven Framework
          </TextReveal>
          <TextReveal as="h2" variant="fade-up" className="section-heading mb-4">
            How I Bring <span className="text-gradient">Your Success</span>
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            A systematic, data-driven 4-step performance marketing strategy engineered to lower customer acquisition costs and predictably scale revenue.
          </TextReveal>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {SUCCESS_STEPS.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return (
              <ScrollReveal key={stepItem.step} delay={index * 0.1}>
                <TiltCard maxTilt={3}>
                  <Card variant="glass" hover className="h-full p-8 group relative overflow-hidden hover-glow border-[var(--border)] hover:border-primary/50 transition-all duration-300">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-number text-4xl font-extrabold text-gradient opacity-70 group-hover:opacity-100 transition-opacity">
                        {stepItem.step}
                      </span>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${stepItem.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: stepItem.color }} />
                      </div>
                    </div>

                    {/* Phase Badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ backgroundColor: `${stepItem.color}15`, color: stepItem.color }}
                    >
                      {stepItem.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {stepItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {stepItem.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 pt-4 border-t border-[var(--border)]">
                      {stepItem.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs md:text-sm text-[var(--text)]">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Footer inside section */}
        <ScrollReveal delay={0.4}>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                Ready to Scale Your Ad Revenue?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Book a free 30-minute growth strategy audit. I'll analyze your current campaigns and show you exactly where you're losing money.
              </p>
            </div>
            <Link href="#contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="rounded-full shrink-0">
                Book Free Audit
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
