'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Counter } from '@/components/animations/counter';
import { TextReveal } from '@/components/animations/text-reveal';

interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: typeof Award;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  glowColor: string;
}

const STATS: StatItem[] = [
  {
    id: 'experience',
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Continuous campaign scaling & algorithmic optimization across Google Ads.',
    icon: Award,
    iconBg: 'bg-amber-500/10 dark:bg-amber-500/15',
    iconBorder: 'border-amber-500/20 dark:border-amber-500/30',
    iconColor: 'text-amber-500 dark:text-amber-400',
    glowColor: 'from-amber-500/20 to-transparent',
  },
  {
    id: 'businesses',
    value: 100,
    suffix: '+',
    label: 'Businesses Helped',
    description: 'From local service companies to multi-category e-commerce brands.',
    icon: Building2,
    iconBg: 'bg-blue-500/10 dark:bg-blue-500/15',
    iconBorder: 'border-blue-500/20 dark:border-blue-500/30',
    iconColor: 'text-blue-500 dark:text-blue-400',
    glowColor: 'from-blue-500/20 to-transparent',
  },
  {
    id: 'leads',
    value: 800,
    suffix: '+',
    label: 'Leads Generated',
    description: 'High-intent qualified phone calls, consultation forms & inbound bookings.',
    icon: Users,
    iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    iconBorder: 'border-emerald-500/20 dark:border-emerald-500/30',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    glowColor: 'from-emerald-500/20 to-transparent',
  },
  {
    id: 'revenue',
    value: 2,
    prefix: '$',
    suffix: 'M+',
    label: 'Monthly Revenue Influenced',
    description: 'Directly driven and verified across client pipelines & online storefronts.',
    icon: TrendingUp,
    iconBg: 'bg-purple-500/10 dark:bg-purple-500/15',
    iconBorder: 'border-purple-500/20 dark:border-purple-500/30',
    iconColor: 'text-purple-500 dark:text-purple-400',
    glowColor: 'from-purple-500/20 to-transparent',
  },
];

export function ByTheNumbers() {
  return (
    <section
      id="by-the-numbers"
      className="py-20 md:py-28 relative overflow-hidden bg-[var(--bg)]"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-heading font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> KEY METRICS & IMPACT
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            By the <span className="text-gradient">Numbers</span>
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Measurable, verifiable outcomes delivered through data-backed Google Ads architecture and revenue-focused optimization.
          </TextReveal>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[28px] p-7 md:p-8 bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border)] hover:border-primary/40 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Ambient Gradient Accent */}
                <div
                  className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${stat.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ${stat.iconBg} ${stat.iconBorder} ${stat.iconColor}`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className="text-xs font-mono font-medium text-[var(--text-muted)] tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Animated Counter Number */}
                  <div className="text-4xl sm:text-5xl md:text-[46px] lg:text-5xl font-number font-extrabold text-[var(--text)] tracking-tight mb-2 group-hover:text-primary transition-colors">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2.2}
                    />
                  </div>

                  {/* Stat Title */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text)] mb-2.5 leading-snug">
                    {stat.label}
                  </h3>

                  {/* Stat Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Highlight Line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-[var(--border)]/60 flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Performance
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbers;
