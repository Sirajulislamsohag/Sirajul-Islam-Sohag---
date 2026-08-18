'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Card } from '@/components/ui/card';
import {
  Layers,
  BarChart3,
  Cpu,
  Server,
  PieChart,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { useCalendly } from '@/providers/calendly-provider';

interface ToolPlatform {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: typeof Layers;
  accentGradient: string;
  description: string;
  keyFeatures: string[];
  metricsHighlight: string;
  tagline: string;
}

const TOOLS_DATA: ToolPlatform[] = [
  {
    id: 'google-ads',
    category: 'Paid Acquisition',
    name: 'Google Ads',
    subtitle: 'Search, Shopping, Performance Max, Display & YouTube',
    badge: 'Premier Architecture',
    badgeColor: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    icon: Layers,
    accentGradient: 'from-[#4285F4]/20 via-[#34A853]/10 to-transparent',
    description:
      'Engineered multi-tier campaign structures across Search, Shopping feeds, AI-driven Performance Max (PMax), YouTube video sequencing, and Local Services Ads for maximum ROI.',
    keyFeatures: [
      'High-Intent Search Campaigns',
      'Performance Max (PMax) Scaling',
      'Google Shopping Feed Optimization',
      'YouTube & Demand Gen Funnels',
      'Granular Negative Keyword Trees',
      'Smart Bidding (tCPA & tROAS) Tuning',
    ],
    metricsHighlight: '5x+ Scalable ROAS Target',
    tagline: 'High-Intent Customer Acquisition',
  },
  {
    id: 'ga4',
    category: 'Analytics & Insights',
    name: 'Google Analytics 4',
    subtitle: 'Event-Driven Data Models & Funnel Analysis',
    badge: 'Advanced Telemetry',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    icon: BarChart3,
    accentGradient: 'from-[#F59E0B]/20 via-[#10B981]/10 to-transparent',
    description:
      'Bespoke GA4 infrastructure with customized event schemas, e-commerce dataLayers, user lifetime value (LTV) models, and cross-channel funnel drop-off diagnostics.',
    keyFeatures: [
      'Custom Dimension & Metric Schemas',
      'Enhanced E-commerce DataLayer',
      'Checkout Funnel Drop-off Tracking',
      'BigQuery Raw Data Stream Sync',
      'Cross-Domain Session Tracking',
      'User Journey & Attribution Modeling',
    ],
    metricsHighlight: '100% Attribution Precision',
    tagline: 'Deep Product & User Analytics',
  },
  {
    id: 'gtm',
    category: 'Tag Governance',
    name: 'Google Tag Manager',
    subtitle: 'Web & Server Container Architecture',
    badge: 'Core Infrastructure',
    badgeColor: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
    icon: Cpu,
    accentGradient: 'from-[#4285F4]/20 via-[#4F46E5]/10 to-transparent',
    description:
      'Enterprise-grade GTM implementations featuring standardized dataLayer dictionaries, custom JavaScript mutation listeners, and Google Consent Mode v2 governance.',
    keyFeatures: [
      'Web Container Governance',
      'Server-Side GTM Deployment',
      'Google Consent Mode v2 Setup',
      'AJAX & React Form Listeners',
      'Custom JavaScript Event Triggers',
      'DataLayer Standardization',
    ],
    metricsHighlight: 'Zero Tag Conflict Latency',
    tagline: 'Bulletproof Tag Orchestration',
  },
  {
    id: 'server-tracking',
    category: 'Signal Recovery',
    name: 'Server-Side Tracking',
    subtitle: 'Meta CAPI, Stape.io & AWS Containers',
    badge: 'Privacy-First Stack',
    badgeColor: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    icon: Server,
    accentGradient: 'from-[#8B5CF6]/20 via-[#EC4899]/10 to-transparent',
    description:
      'Server-to-server tracking containers deployed via Stape.io and AWS custom subdomains to defeat browser ad-blockers, iOS privacy loss, and extend cookie lifetimes.',
    keyFeatures: [
      'Meta Conversions API (CAPI)',
      'Stape.io Custom Subdomain Cloud',
      'Event Match Quality (EMQ) 9.5+',
      'First-Party Cookie Recovery',
      'Google Ads Server-Side Conversion',
      'Bypass Client Ad-Blockers',
    ],
    metricsHighlight: '+35% Conversion Signal Lift',
    tagline: 'Next-Gen Signal Resilience',
  },
  {
    id: 'looker-studio',
    category: 'Data Visualization',
    name: 'Looker Studio',
    subtitle: 'Live Automated Executive Performance Dashboards',
    badge: 'Executive Clarity',
    badgeColor: 'from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30',
    icon: PieChart,
    accentGradient: 'from-[#06B6D4]/20 via-[#3B82F6]/10 to-transparent',
    description:
      'Interactive, automated dashboards merging Google Ads, Meta Ads, GA4, and CRM revenue into a unified single source of truth updated continuously in real-time.',
    keyFeatures: [
      'Multi-Channel Data Blending',
      'Real-Time Blended ROAS & CAC',
      'Automated Daily/Weekly Reports',
      'Executive KPI Visualizations',
      'Client Portal Transparency',
      'Custom Calculated ROI Formulas',
    ],
    metricsHighlight: '100% Real-Time Transparency',
    tagline: 'Actionable Executive Dashboards',
  },
  {
    id: 'ecosystem-crm',
    category: 'Ecosystem Sync',
    name: 'E-Commerce & CRM Sync',
    subtitle: 'Shopify, HubSpot, WooCommerce & Offline Tracking',
    badge: 'Full-Funnel Pipeline',
    badgeColor: 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30',
    icon: ShoppingBag,
    accentGradient: 'from-[#22C55E]/20 via-[#10B981]/10 to-transparent',
    description:
      'Connecting store checkouts, Stripe webhooks, and CRM sales pipelines directly into advertising bidding algorithms through Offline Conversion Tracking (OCT).',
    keyFeatures: [
      'Shopify & WooCommerce Webhooks',
      'HubSpot & Salesforce GCLID Sync',
      'Offline Conversion Tracking (OCT)',
      'Stripe & PayPal Revenue Signals',
      'Lead Qualification Feedback Loop',
      'High-LTV Customer Match Lists',
    ],
    metricsHighlight: 'Closed-Loop Revenue Attribution',
    tagline: 'CRM & Pipeline Integration',
  },
];

const PLATFORM_PILLS = [
  { name: 'Google Ads', icon: '🎯' },
  { name: 'Google Analytics 4', icon: '📊' },
  { name: 'Google Tag Manager', icon: '⚡' },
  { name: 'Meta CAPI', icon: '🛡️' },
  { name: 'Stape.io', icon: '☁️' },
  { name: 'Looker Studio', icon: '📈' },
  { name: 'Performance Max', icon: '🚀' },
  { name: 'Shopify & WooCommerce', icon: '🛍️' },
  { name: 'HubSpot & CRM Sync', icon: '🔄' },
];

export function ToolsPlatforms() {
  const { openCalendly } = useCalendly();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--bg-card)]/25 to-transparent border-y border-[var(--border)]/40">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3"
          >
            Technical Stack & Infrastructure
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-5">
            Tools & Platforms I Work With
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Enterprise-grade advertising, tracking, and analytics platforms engineered for maximum attribution accuracy, data transparency, and scalable return on ad spend.
          </TextReveal>

          {/* Quick Platform Badges Ticker */}
          <ScrollReveal delay={0.3} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2.5">
              {PLATFORM_PILLS.map((pill) => (
                <div
                  key={pill.name}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] transition-all cursor-default shadow-sm backdrop-blur-sm"
                >
                  <span>{pill.icon}</span>
                  <span className="text-[var(--text-secondary)]">{pill.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOOLS_DATA.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <ScrollReveal key={tool.id} delay={index * 0.08}>
                <div className="relative group h-full">
                  {/* Subtle Card Glow Background */}
                  <div
                    className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${tool.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                  />

                  <Card
                    variant="glass"
                    className="h-full flex flex-col justify-between p-7 relative rounded-3xl border border-[var(--border)] group-hover:border-primary/40 bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300 shadow-inner">
                          <Icon className="w-6 h-6 text-primary group-hover:text-amber-400 transition-colors" />
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md bg-gradient-to-r ${tool.badgeColor}`}
                        >
                          {tool.badge}
                        </span>
                      </div>

                      {/* Tool Title & Subtitle */}
                      <h3 className="text-xl font-heading font-bold text-[var(--text)] group-hover:text-primary transition-colors mb-1.5">
                        {tool.name}
                      </h3>
                      <p className="text-xs font-medium text-primary/90 uppercase tracking-wide mb-3">
                        {tool.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                        {tool.description}
                      </p>

                      {/* Key Features List */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-[var(--border)]">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Capabilities & Setup
                        </p>
                        {tool.keyFeatures.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Stat Footer */}
                    <div className="pt-4 border-t border-[var(--border)]/70 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                        <span className="text-xs font-semibold text-[var(--text)] font-number">
                          {tool.metricsHighlight}
                        </span>
                      </div>

                      <span className="text-[11px] text-[var(--text-muted)] font-medium group-hover:text-primary transition-colors">
                        {tool.tagline}
                      </span>
                    </div>
                  </Card>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal delay={0.4} className="mt-14">
          <div className="rounded-3xl p-8 md:p-10 border border-primary/25 bg-gradient-to-r from-primary/10 via-[var(--bg-card)] to-accent/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                <Zap className="w-3.5 h-3.5" /> End-to-End Tracking & Campaign Audit
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text)]">
                Need your tracking or Google Ads account optimized?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-xl">
                I audit your GA4 setup, GTM tags, server-side CAPI containers, and Google Ads campaigns to uncover wasted budget and scale profitable conversions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openCalendly({ title: 'Schedule Your Free Audit' })}
              className="px-7 py-3.5 rounded-2xl bg-primary text-white font-heading font-semibold hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 text-sm shrink-0 flex items-center gap-2 cursor-pointer"
            >
              Get Free Audit <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
