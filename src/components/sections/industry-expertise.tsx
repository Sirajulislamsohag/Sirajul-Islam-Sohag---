'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  MapPin,
  Home,
  Sparkles,
  ShieldCheck,
  Zap,
  Wrench,
  Car,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useCalendly } from '@/providers/calendly-provider';

// Top Row Featured Industries
const FEATURED_INDUSTRIES = [
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'Google Ads for E-commerce',
    tag: 'High-Volume Scale',
    description:
      'Shopping and Performance Max campaigns built around product feed optimization and Smart Bidding, structured to lower cost per acquisition and scale profitably.',
    stat: '4.8x Avg ROAS',
    subStat: '+185% Revenue YoY',
    color: '#F59E0B',
    bgColor: 'from-amber-500/10 via-amber-500/5 to-transparent',
    borderColor: 'group-hover:border-amber-500/50',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]',
  },
  {
    id: 'local-business',
    icon: MapPin,
    title: 'Google Ads for Local Service Businesses',
    tag: 'Local Dominance',
    description:
      'A complete local Google Ads strategy built around your service area and store visibility, so nearby customers find you before your competitors.',
    stat: '$18–$35 Cost / Lead',
    subStat: '+240% Inbound Calls',
    color: '#06B6D4',
    bgColor: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
    borderColor: 'group-hover:border-cyan-500/50',
    iconBg: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
  },
  {
    id: 'home-services',
    icon: Home,
    title: 'Google Ads for Home Service Businesses',
    tag: 'High-Ticket Booking',
    description:
      'Consistent, qualified leads for home service companies like roofing, HVAC, plumbing, and cleaning, structured around your booking capacity and job value.',
    stat: '6.2x Return on Ad Spend',
    subStat: '92% Job Booking Rate',
    color: '#22C55E',
    bgColor: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    borderColor: 'group-hover:border-emerald-500/50',
    iconBg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
  },
];

// Standard Row Industries
const STANDARD_INDUSTRIES = [
  {
    id: 'cleaning',
    icon: Sparkles,
    title: 'Google Ads for Cleaning Businesses',
    description:
      'More booked cleaning jobs from residential and commercial searches, built around service-area targeting and call tracking.',
    stat: '$22 Avg Cost Per Lead',
    color: '#A855F7',
    iconBg: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]',
  },
  {
    id: 'roofing',
    icon: ShieldCheck,
    title: 'Google Ads for Roofing Companies',
    description:
      'Capture homeowners actively searching for roof repair or replacement, not just browsing. Built around Local Services Ads and high-intent Search campaigns.',
    stat: '8.5x Pipeline ROI',
    color: '#F43F5E',
    iconBg: 'bg-gradient-to-br from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-400 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.25)]',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Google Ads for Electrical Contractors',
    description:
      'Generate qualified residential and commercial electrical leads while filtering out low-value, price-shopping clicks.',
    stat: '$28 Avg Qualified Call',
    color: '#EAB308',
    iconBg: 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.25)]',
  },
  {
    id: 'hvac-plumbing',
    icon: Wrench,
    title: 'Google Ads for HVAC & Plumbing',
    description:
      'Capture both emergency, same-day searches and scheduled maintenance requests with campaigns built around call tracking and service-area targeting.',
    stat: '5.4x Average ROAS',
    color: '#3B82F6',
    iconBg: 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]',
  },
  {
    id: 'auto-tyre',
    icon: Car,
    title: 'Google Ads for Auto & Tyre Services',
    description:
      'Local search campaigns built to fill your appointment book, structured around service-specific keywords instead of broad, expensive terms.',
    stat: '$14 Avg Booking Cost',
    color: '#EC4899',
    iconBg: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-pink-500/30 text-pink-400 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.25)]',
  },
  {
    id: 'service-based',
    icon: Briefcase,
    title: 'Google Ads for Service-Based Businesses',
    description:
      'Consistent leads for any service company not listed above, structured around your booking capacity and customer lifetime value.',
    stat: '3x–10x Target ROAS',
    color: '#6366F1',
    iconBg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]',
  },
];

export function IndustryExpertise() {
  const { openCalendly } = useCalendly();

  return (
    <section
      id="industry-expertise"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--bg-card)]/25 to-transparent border-y border-[var(--border)]/40"
    >
      {/* Dynamic Ambient Background Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" /> Industry Expertise
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-5">
            Google Ads for <span className="text-gradient">Every Business</span>
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Google Ads works differently for every industry — different search intent, different customer urgency, different cost per lead. Here's how I approach it by industry.
          </TextReveal>
        </div>

        {/* TOP ROW: Highlighted Larger / Featured Cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Core Industry Frameworks
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_INDUSTRIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <div
                    className={`group relative h-full rounded-3xl p-7 md:p-8 bg-[var(--bg-card)] border border-[var(--border)] ${item.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Top Radial Glow on Hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-36 bg-gradient-to-b ${item.bgColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    />

                    <div>
                      {/* Top Bar: Lucide Vector Icon Badge & Tag */}
                      <div className="flex items-center justify-between mb-5 relative z-10">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-inner ${item.iconBg} transition-all duration-300`}>
                          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[var(--text-secondary)]">
                          {item.tag}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-lg md:text-xl font-heading font-bold text-[var(--text)] group-hover:text-primary transition-colors mb-3 leading-snug">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer: Verified Stat & CTA Link */}
                    <div className="pt-4 border-t border-[var(--border)]/70 relative z-10">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{item.stat}</span>
                        </div>
                        <span className="text-[11px] text-[var(--text-muted)] font-number">
                          {item.subStat}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openCalendly({
                            title: `Strategy Call: ${item.title}`,
                            subtitle: `Let's discuss proven benchmarks and a scaling roadmap for your business.`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all cursor-pointer"
                      >
                        <span>Learn the strategy</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GRID: Standard Industry Cards + Distinctive Reference CTA Card */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Specialized Service Verticals
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* Standard Vertical Cards */}
            {STANDARD_INDUSTRIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} delay={0.05 * index}>
                  <div className="group h-full rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm ${item.iconBg} transition-all duration-300`}>
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-heading font-bold text-[var(--text)] group-hover:text-primary transition-colors mb-2.5 leading-snug">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Verified Stat & Learn Strategy */}
                    <div className="pt-3 border-t border-[var(--border)]/60">
                      <div className="flex items-center justify-between gap-1 mb-2.5">
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> {item.stat}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openCalendly({
                            title: `Strategy Call: ${item.title}`,
                            subtitle: `Let's discuss proven benchmarks and a scaling roadmap for your market.`,
                          })
                        }
                        className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all cursor-pointer"
                      >
                        <span>Learn the strategy</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* DISTINCTIVE STANDOUT CTA CARD (Styled like the reference photo) */}
            <ScrollReveal delay={0.35} className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="h-full rounded-2xl p-7 md:p-8 bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#3730A3] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-indigo-400/30 group">
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 blur-2xl rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>20+ Industries Covered</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3">
                    Don't See Your Industry?
                  </h3>

                  <p className="text-xs md:text-sm text-indigo-100 leading-relaxed mb-6 max-w-lg">
                    I manage Google Ads across a wide range of service and e-commerce verticals. Book a free consultation call and I'll walk you through verified benchmarks and what's actually possible in your specific market.
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      openCalendly({
                        title: 'Custom Industry Strategy Call',
                        subtitle: `Let's discuss how Google Ads can be structured for your exact market and business model.`,
                      })
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#312E81] font-heading font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>Book Free Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
