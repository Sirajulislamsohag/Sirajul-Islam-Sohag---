'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Wrench,
  Car,
  Briefcase,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { useCalendly } from '@/providers/calendly-provider';

interface VerticalCard {
  id: string;
  icon: typeof Sparkles;
  title: string;
  description: string;
  stat: string;
  tileBg: string;
  tileBorder: string;
  iconColor: string;
}

const VERTICALS: VerticalCard[] = [
  {
    id: 'cleaning',
    icon: Sparkles,
    title: 'Google Ads for Cleaning Businesses',
    description:
      'More booked cleaning jobs from residential and commercial searches, built around service-area targeting and call tracking.',
    stat: '$22 Avg Cost Per Lead',
    tileBg: 'bg-[#F3E8FF] dark:bg-[#581c87]/30',
    tileBorder: 'border-[#E9D5FF] dark:border-[#7e22ce]/40',
    iconColor: 'text-[#9333EA] dark:text-[#c084fc]',
  },
  {
    id: 'roofing',
    icon: ShieldCheck,
    title: 'Google Ads for Roofing Companies',
    description:
      'Capture homeowners actively searching for roof repair or replacement, not just browsing. Built around Local Services Ads and high-intent Search campaigns.',
    stat: '8.5x Pipeline ROI',
    tileBg: 'bg-[#FFE4E6] dark:bg-[#881337]/30',
    tileBorder: 'border-[#FECDD3] dark:border-[#be123c]/40',
    iconColor: 'text-[#E11D48] dark:text-[#fb7185]',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Google Ads for Electrical Contractors',
    description:
      'Generate qualified residential and commercial electrical leads while filtering out low-value, price-shopping clicks.',
    stat: '$28 Avg Qualified Call',
    tileBg: 'bg-[#FEF3C7] dark:bg-[#78350f]/30',
    tileBorder: 'border-[#FDE68A] dark:border-[#b45309]/40',
    iconColor: 'text-[#D97706] dark:text-[#fbbf24]',
  },
  {
    id: 'hvac-plumbing',
    icon: Wrench,
    title: 'Google Ads for HVAC & Plumbing',
    description:
      'Capture both emergency, same-day searches and scheduled maintenance requests with campaigns built around call tracking and service-area targeting.',
    stat: '5.4x Average ROAS',
    tileBg: 'bg-[#E0F2FE] dark:bg-[#0c4a6e]/30',
    tileBorder: 'border-[#BAE6FD] dark:border-[#0369a1]/40',
    iconColor: 'text-[#0284C7] dark:text-[#38bdf8]',
  },
  {
    id: 'auto-tyre',
    icon: Car,
    title: 'Google Ads for Auto & Tyre Services',
    description:
      'Local search campaigns built to fill your appointment book, structured around service-specific keywords instead of broad, expensive terms.',
    stat: '$14 Avg Booking Cost',
    tileBg: 'bg-[#FCE7F3] dark:bg-[#831843]/30',
    tileBorder: 'border-[#FBCFE8] dark:border-[#be185d]/40',
    iconColor: 'text-[#DB2777] dark:text-[#f472b6]',
  },
  {
    id: 'service-based',
    icon: Briefcase,
    title: 'Google Ads for Service-Based Businesses',
    description:
      'Consistent leads for any service company not listed above, structured around your booking capacity and customer lifetime value.',
    stat: '3x–10x Target ROAS',
    tileBg: 'bg-[#EEF2FF] dark:bg-[#1e1b4b]/50',
    tileBorder: 'border-[#E0E7FF] dark:border-[#4338ca]/40',
    iconColor: 'text-[#4F46E5] dark:text-[#818cf8]',
  },
];

export function ServiceVerticalsBento() {
  const { openCalendly } = useCalendly();

  return (
    <section
      id="specialized-verticals"
      className="py-16 md:py-24 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Eyebrow Header with Purple Dot (Matching Reference) */}
        <div className="flex items-center gap-2 mb-8 md:mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] shadow-[0_0_8px_#6366F1]" />
          <h3 className="text-xs md:text-sm font-heading font-bold tracking-widest uppercase text-[#6366F1] dark:text-[#818cf8]">
            SPECIALIZED SERVICE VERTICALS
          </h3>
        </div>

        {/* 4-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {/* Row 1: 4 Cards */}
          {VERTICALS.slice(0, 4).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative h-full rounded-[24px] p-7 md:p-8 bg-white dark:bg-[var(--bg-card)] border border-slate-200/90 dark:border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pastel Squircle Icon Tile */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.tileBg} ${item.tileBorder} ${item.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300 mb-6`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-[17px] md:text-[18px] font-heading font-bold text-slate-900 dark:text-[var(--text)] group-hover:text-primary transition-colors mb-3 leading-snug">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] md:text-[14px] text-slate-600 dark:text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stat & Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-[var(--border)]/70">
                  {/* Verified Metric */}
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                    <span>{item.stat}</span>
                  </div>

                  {/* Strategy Link */}
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly({
                        title: `Strategy Call: ${item.title}`,
                        subtitle: `Let's discuss proven benchmarks and a scaling roadmap for your market.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-[13px] font-heading font-bold text-[#F59E0B] hover:text-[#D97706] dark:text-[#FBBF24] dark:hover:text-[#F59E0B] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>Learn the strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Row 2: 2 Standard Cards (1 col each) */}
          {VERTICALS.slice(4, 6).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.32 + index * 0.08 }}
                className="group relative h-full rounded-[24px] p-7 md:p-8 bg-white dark:bg-[var(--bg-card)] border border-slate-200/90 dark:border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pastel Squircle Icon Tile */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.tileBg} ${item.tileBorder} ${item.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300 mb-6`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-[17px] md:text-[18px] font-heading font-bold text-slate-900 dark:text-[var(--text)] group-hover:text-primary transition-colors mb-3 leading-snug">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] md:text-[14px] text-slate-600 dark:text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stat & Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-[var(--border)]/70">
                  {/* Verified Metric */}
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                    <span>{item.stat}</span>
                  </div>

                  {/* Strategy Link */}
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly({
                        title: `Strategy Call: ${item.title}`,
                        subtitle: `Let's discuss proven benchmarks and a scaling roadmap for your market.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-[13px] font-heading font-bold text-[#F59E0B] hover:text-[#D97706] dark:text-[#FBBF24] dark:hover:text-[#F59E0B] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>Learn the strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Row 2: 2-Column Wide Standout Royal Indigo CTA Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="sm:col-span-2 lg:col-span-2 relative h-full rounded-[24px] p-8 md:p-10 bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#3730A3] text-white shadow-[0_10px_35px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_45px_rgba(79,70,229,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden border border-indigo-400/40 group"
          >
            {/* Ambient Background Shimmer */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-black/25 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>20+ Industries Covered</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3.5 tracking-tight">
                Don’t See Your Industry?
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-indigo-100 leading-relaxed mb-8 max-w-xl font-normal">
                I manage Google Ads across a wide range of service and e-commerce verticals. Book a free consultation call and I'll walk you through verified benchmarks and what's actually possible in your specific market.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-2">
              <button
                type="button"
                onClick={() =>
                  openCalendly({
                    title: 'Custom Industry Strategy Call',
                    subtitle: `Let's discuss how Google Ads can be structured for your exact market and business model.`,
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#3730A3] font-heading font-bold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Book Free Call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceVerticalsBento;
