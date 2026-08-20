'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Target,
  TrendingUp,
  FileCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { useCalendly } from '@/providers/calendly-provider';

interface ApproachPillar {
  number: string;
  badge: string;
  title: string;
  description: string;
  keyFeature: string;
  icon: typeof BarChart3;
  color: string;
  accentBg: string;
  accentBorder: string;
  glowColor: string;
}

const PILLARS: ApproachPillar[] = [
  {
    number: '01',
    badge: 'Evidence-Based Strategy',
    title: 'Data Before Decisions',
    description:
      "I don't guess. Every recommendation is backed by what the account data actually shows, not assumptions.",
    keyFeature: 'Granular search query analysis & algorithmic intent modeling',
    icon: BarChart3,
    color: '#F59E0B',
    accentBg: 'bg-amber-500/10 dark:bg-amber-500/15',
    accentBorder: 'border-amber-500/20 dark:border-amber-500/30',
    glowColor: 'from-amber-500/20 to-transparent',
  },
  {
    number: '02',
    badge: 'Precision Infrastructure',
    title: 'Tracking Accuracy Is Non-Negotiable',
    description:
      "If conversion tracking is wrong, everything built on top of it is wrong too. It's the first thing I fix, before touching a single bid.",
    keyFeature: 'Server-side GTM, GA4 Enhanced Conversions & offline CRM imports',
    icon: Target,
    color: '#06B6D4',
    accentBg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
    accentBorder: 'border-cyan-500/20 dark:border-cyan-500/30',
    glowColor: 'from-cyan-500/20 to-transparent',
  },
  {
    number: '03',
    badge: 'Capital Efficiency',
    title: "Scale What's Proven, Cut What Isn't",
    description:
      "I'd rather grow a smaller number of campaigns that clearly work than spread budget thin across untested ones.",
    keyFeature: 'Aggressive negative keyword scrubbing & budget concentration on high ROAS',
    icon: TrendingUp,
    color: '#10B981',
    accentBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    accentBorder: 'border-emerald-500/20 dark:border-emerald-500/30',
    glowColor: 'from-emerald-500/20 to-transparent',
  },
  {
    number: '04',
    badge: 'Total Accountability',
    title: 'Transparent Reporting, Always',
    description:
      "You should never have to ask what's happening with your ad spend. I make sure you always know.",
    keyFeature: 'Live Looker Studio dashboard, weekly video reviews & zero vanity metrics',
    icon: FileCheck,
    color: '#8B5CF6',
    accentBg: 'bg-purple-500/10 dark:bg-purple-500/15',
    accentBorder: 'border-purple-500/20 dark:border-purple-500/30',
    glowColor: 'from-purple-500/20 to-transparent',
  },
];

export function MyApproach() {
  const { openCalendly } = useCalendly();

  return (
    <section
      id="my-approach"
      className="py-20 md:py-32 relative overflow-hidden bg-[var(--bg)]"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-heading font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> CORE METHODOLOGY
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            My <span className="text-gradient">Approach</span>
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            No guesswork, no wasted budget. Built on uncompromised tracking accuracy, continuous optimization, and radical transparency.
          </TextReveal>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop, 1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[28px] p-8 sm:p-10 bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border)] hover:border-primary/40 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Radial Highlight */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pillar.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div>
                  {/* Top Header: Badge + Number */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide ${pillar.accentBg} ${pillar.accentBorder}`}
                      style={{ color: pillar.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{pillar.badge}</span>
                    </div>

                    <span className="text-sm font-mono font-bold text-[var(--text-muted)] tracking-wider">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text)] group-hover:text-primary transition-colors mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Feature Highlight Tag */}
                <div className="pt-5 border-t border-[var(--border)]/70 flex items-center gap-2.5 text-xs sm:text-[13px] text-[var(--text-muted)] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>{pillar.keyFeature}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 rounded-[24px] p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent border border-primary/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-bold text-[var(--text)] mb-1">
              Want to see this approach applied to your ad account?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Book a 1-on-1 strategy audit and discover immediate growth opportunities.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              openCalendly({
                title: 'Approach & Account Strategy Call',
                subtitle: 'Get a clear, data-driven action plan tailored specifically for your business.',
              })
            }
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-amber-400 to-amber-500 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default MyApproach;
