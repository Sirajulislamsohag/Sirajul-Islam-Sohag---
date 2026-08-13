'use client';

import { Download, ArrowRight, BarChart3, Target, TrendingUp, Award, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Counter } from '@/components/animations/counter';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TiltCard } from '@/components/animations/tilt-card';
import { STATS } from '@/lib/constants';
import Link from 'next/link';

const CORE_PILLARS = [
  {
    number: '01',
    icon: BarChart3,
    title: 'Data-First Precision',
    description: 'Every decision is anchored in hard analytics. From tracking setup to multi-channel attribution, I eliminate guess-work and optimize for measurable revenue.',
    color: '#FDB515',
    bullets: ['GA4 & GTM Event Tracking', 'Multi-Touch Attribution', 'Wasted Spend Scrubbing'],
  },
  {
    number: '02',
    icon: Target,
    title: 'High-Intent Strategy',
    description: 'I design custom full-funnel marketing architectures tailored to your business model, ensuring every ad dollar hits users actively ready to buy.',
    color: '#06B6D4',
    bullets: ['Google Search & PMax', 'Meta ASC & CAPI Integration', 'High-Converting Copywriting'],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Predictable Revenue Scaling',
    description: 'Scaling campaigns isn’t about spending more — it’s about maintaining target ROAS and CPL while aggressively capturing market share.',
    color: '#22C55E',
    bullets: ['Daily Impression Tuning', 'A/B Creative Hook Testing', 'Looker Studio Executive Dashboards'],
  },
];

const SKILLS_BADGES = [
  'Google Ads (PMax & Search)',
  'Facebook & Meta Ads',
  'Server-Side Meta CAPI',
  'Technical SEO & Audit',
  'GA4 & GTM Analytics',
  'Conversion Rate Optimization (CRO)',
  'B2B Lead Generation',
  'E-Commerce Scaling',
];

export function AboutV2() {
  return (
    <section id="about-v2" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header (No Image Required) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <TextReveal variant="fade-up" as="p" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            About My Work & Philosophy
          </TextReveal>
          <TextReveal variant="fade-up" delay={0.1} as="h2" className="section-heading mb-6">
            Driving Scalable Growth Through <span className="text-gradient">Data-Driven Strategy</span>
          </TextReveal>
          <TextReveal variant="fade-up" delay={0.2} as="p" className="section-subheading text-lg leading-relaxed">
            With over 5 years of hands-on experience in performance marketing, I combine deep data analytics with creative strategy to build marketing engines that generate consistent, high-ROI revenue for 200+ brands worldwide.
          </TextReveal>
        </div>

        {/* Stats Banner Grid (Imageless Visual Hero Component) */}
        <ScrollReveal className="mb-16">
          <div className="p-8 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 divide-x-0 md:divide-x divide-[var(--border)]">
              {STATS.map((stat, idx) => (
                <div key={stat.label} className={`text-center ${idx !== 0 ? 'md:pl-8' : ''}`}>
                  <p className="font-number text-4xl md:text-5xl font-black text-gradient mb-2">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </p>
                  <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Bento Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.number} delay={index * 0.1}>
                <TiltCard maxTilt={4}>
                  <Card variant="glass" hover className="h-full p-8 flex flex-col justify-between group hover-glow border-[var(--border)] hover:border-primary/50 transition-all duration-300">
                    <div>
                      {/* Top Bar: Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-number text-3xl font-extrabold text-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                          {pillar.number}
                        </span>
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${pillar.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="pt-4 border-t border-[var(--border)] mt-auto">
                      <ul className="space-y-2">
                        {pillar.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-xs md:text-sm text-[var(--text)]">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Core Competencies Badges & Action Bar */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 md:p-10 rounded-3xl bg-[var(--bg-card)]/80 border border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Specialized Expertise</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-[var(--text)]">
                Core Marketing Competencies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS_BADGES.map((skill) => (
                  <Badge key={skill} variant="primary" className="text-xs px-3 py-1.5 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a
                href="/certificates/PDF/CV(Sirajul Islam Sohag).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="glass" size="lg" icon={<Download className="w-4 h-4" />} className="w-full sm:w-auto rounded-full">
                  Download Resume
                </Button>
              </a>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto rounded-full">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
