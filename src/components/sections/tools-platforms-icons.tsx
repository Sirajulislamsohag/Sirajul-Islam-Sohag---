'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface PlatformIconItem {
  id: string;
  name: string;
  category: 'ads' | 'analytics' | 'tracking' | 'bi' | 'ecommerce';
  categoryLabel: string;
  subtitle: string;
  brandColor: string;
  glowColor: string;
  svg: (props: { className?: string; style?: React.CSSProperties }) => React.JSX.Element;
}

// Crisp Authentic SVG Icons for all requested platforms
const PLATFORM_ICONS: PlatformIconItem[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'ads',
    categoryLabel: 'Advertising',
    subtitle: 'Search, Shopping, PMax, Display & YouTube',
    brandColor: '#4285F4',
    glowColor: 'rgba(66, 133, 244, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3.75 14.5L9.5 4.5C9.9 3.8 10.8 3.5 11.5 3.9L16.2 6.6C16.9 7 17.2 7.9 16.8 8.6L11.05 18.6C10.65 19.3 9.75 19.6 9.05 19.2L4.35 16.5C3.65 16.1 3.35 15.2 3.75 14.5Z" fill="#FABB05" />
        <path d="M20.25 14.5C20.65 15.2 20.35 16.1 19.65 16.5L14.95 19.2C14.25 19.6 13.35 19.3 12.95 18.6L7.2 8.6C6.8 7.9 7.1 7 7.8 6.6L12.5 3.9C13.2 3.5 14.1 3.8 14.5 4.5L20.25 14.5Z" fill="#4285F4" />
        <circle cx="5.75" cy="18.25" r="2.75" fill="#34A853" />
      </svg>
    ),
  },
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    category: 'analytics',
    categoryLabel: 'Analytics',
    subtitle: 'Event-Driven Telemetry & Funnel Models',
    brandColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="4" height="8" rx="2" fill="#F59E0B" />
        <rect x="10" y="8" width="4" height="13" rx="2" fill="#F59E0B" />
        <rect x="17" y="3" width="4" height="18" rx="2" fill="#E11D48" />
        <circle cx="12" cy="4" r="2" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    id: 'gtm',
    name: 'Google Tag Manager',
    category: 'tracking',
    categoryLabel: 'Tracking',
    subtitle: 'Web & Server Container Architecture',
    brandColor: '#2563EB',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" fill="rgba(59, 130, 246, 0.15)" />
        <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="#60A5FA" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'meta-capi',
    name: 'Meta CAPI & Ads',
    category: 'ads',
    categoryLabel: 'Advertising',
    subtitle: 'Conversions API, Pixel & Advantage+',
    brandColor: '#0668E1',
    glowColor: 'rgba(6, 104, 225, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    id: 'stape',
    name: 'Stape.io',
    category: 'tracking',
    categoryLabel: 'Server Tracking',
    subtitle: 'Server-Side Cloud Container Hosting',
    brandColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="6" rx="2" stroke="#A78BFA" strokeWidth="2" fill="rgba(139, 92, 246, 0.2)" />
        <rect x="3" y="14" width="18" height="6" rx="2" stroke="#A78BFA" strokeWidth="2" fill="rgba(139, 92, 246, 0.2)" />
        <circle cx="7" cy="7" r="1" fill="#34D399" />
        <circle cx="10" cy="7" r="1" fill="#60A5FA" />
        <circle cx="7" cy="17" r="1" fill="#34D399" />
        <circle cx="10" cy="17" r="1" fill="#60A5FA" />
        <path d="M16 7H17M15 17H17" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'looker-studio',
    name: 'Looker Studio',
    category: 'bi',
    categoryLabel: 'Visualization',
    subtitle: 'Automated Multi-Channel Client Dashboards',
    brandColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#22D3EE" strokeWidth="2" fill="rgba(6, 182, 212, 0.15)" />
        <path d="M12 3V12L18.5 17" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    subtitle: 'DataLayer & Checkout Tracking Integration',
    brandColor: '#96BF48',
    glowColor: 'rgba(150, 191, 72, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 5.7c-.1-.3-.3-.4-.5-.4h-1.6c-.3-1.4-1.3-3.3-3.6-3.3-2.4 0-3.3 1.9-3.6 3.3H7.9c-.3 0-.5.2-.5.5L6 20.3c0 .3.2.6.5.6h11.1c.3 0 .5-.2.5-.5L18.8 5.7zM13.1 3.5c1.4 0 1.9 1.2 2.1 2.2h-4.2c.2-1 .7-2.2 2.1-2.2zM12 17.5l-3.5-3.5 1.4-1.4 2.1 2.1 4.1-4.1 1.4 1.4-5.5 5.5z" />
      </svg>
    ),
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce & WP',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    subtitle: 'Custom E-com Event Hooks & Webhooks',
    brandColor: '#9B5C8F',
    glowColor: 'rgba(155, 92, 143, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="#9B5C8F" />
        <path d="M6 10C6 8.9 6.9 8 8 8C9.1 8 10 8.9 10 10V14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14V10Z" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M14 10C14 8.9 14.9 8 16 8C17.1 8 18 8.9 18 10V14C18 15.1 17.1 16 16 16C14.9 16 14 15.1 14 14V10Z" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'hubspot',
    name: 'HubSpot CRM',
    category: 'tracking',
    categoryLabel: 'CRM Sync',
    subtitle: 'GCLID & Offline Conversion Tracking',
    brandColor: '#FF7A59',
    glowColor: 'rgba(255, 122, 89, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 8.2V5.5c.8-.4 1.4-1.2 1.4-2.2 0-1.4-1.1-2.5-2.5-2.5S15.2 2 15.2 3.4c0 .9.5 1.7 1.3 2.1v2.7c-1.1.4-2.1 1.2-2.7 2.2L8.9 7.1c.1-.4.1-.7.1-1.1 0-2.2-1.8-4-4-4S1 3.8 1 6s1.8 4 4 4c.8 0 1.5-.2 2.1-.6l4.9 3.3c-.6 1-.9 2.1-.9 3.3 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.5-1.5-4.6-3.7-5.5zm-1.1-5.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      </svg>
    ),
  },
  {
    id: 'bigquery',
    name: 'Google BigQuery',
    category: 'analytics',
    categoryLabel: 'Data Warehouse',
    subtitle: 'Raw GA4 Event Export & SQL Analysis',
    brandColor: '#669DF6',
    glowColor: 'rgba(102, 157, 246, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" stroke="#669DF6" strokeWidth="2" fill="rgba(102, 157, 246, 0.15)" />
        <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" stroke="#AECBFA" strokeWidth="1.5" />
        <path d="M15 15L19 19" stroke="#669DF6" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'search-console',
    name: 'Search Console',
    category: 'analytics',
    categoryLabel: 'SEO & Indexing',
    subtitle: 'Query Impression & Crawl Optimization',
    brandColor: '#4585F2',
    glowColor: 'rgba(69, 133, 242, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#4585F2" strokeWidth="2" fill="rgba(69, 133, 242, 0.15)" />
        <path d="M21 21L16.5 16.5" stroke="#4585F2" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 12L10 14L14 9" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'merchant-center',
    name: 'Merchant Center',
    category: 'ads',
    categoryLabel: 'Product Feeds',
    subtitle: 'Google Shopping Feed & Supplemental Rules',
    brandColor: '#EA4335',
    glowColor: 'rgba(234, 67, 53, 0.4)',
    svg: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 7H21L19 19H5L3 7Z" stroke="#EA4335" strokeWidth="2" fill="rgba(234, 67, 53, 0.15)" />
        <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" stroke="#FBBC04" strokeWidth="2" />
        <circle cx="12" cy="13" r="2.5" fill="#34A853" />
      </svg>
    ),
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Tools' },
  { id: 'ads', label: 'Paid Ads' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'tracking', label: 'Server & Tags' },
  { id: 'bi', label: 'Dashboards' },
  { id: 'ecommerce', label: 'E-Commerce & CRM' },
];

export function ToolsPlatformsIcons() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const filteredIcons =
    selectedCategory === 'all'
      ? PLATFORM_ICONS
      : PLATFORM_ICONS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--bg-card)]/40 to-transparent border-y border-[var(--border)]/50">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Ecosystem & Integrations
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Tools & Platforms I Work With
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading max-w-2xl mx-auto">
            Google Ads (Search, Shopping, Performance Max, Display, YouTube) · Google Analytics 4 · Google Tag Manager · Server-side tracking (Meta CAPI, Stape) · Looker Studio
          </TextReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={0.25} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-white/[0.04] text-[var(--text-secondary)] border border-white/10 hover:border-primary/40 hover:text-[var(--text)] hover:bg-white/[0.08]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Animated Icon Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
        >
          <AnimatePresence>
            {filteredIcons.map((item, index) => {
              const SvgIcon = item.svg;
              const isHovered = hoveredTool === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onMouseEnter={() => setHoveredTool(item.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing halo behind icon tile */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"
                    style={{ backgroundColor: item.glowColor }}
                  />

                  {/* Icon Card Tile */}
                  <div className="h-full flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border)] group-hover:border-primary/50 group-hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1.5 shadow-md group-hover:shadow-xl">
                    {/* Brand SVG Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-inner">
                      <SvgIcon className="w-8 h-8 transition-transform duration-300" style={{ color: item.brandColor }} />
                    </div>

                    {/* Platform Title */}
                    <h4 className="text-sm font-heading font-bold text-[var(--text)] group-hover:text-primary transition-colors line-clamp-1">
                      {item.name}
                    </h4>

                    {/* Category Micro Badge */}
                    <span className="mt-1 text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                      {item.categoryLabel}
                    </span>

                    {/* Subtitle / Capabilities (Visible on Hover/Always on Mobile) */}
                    <p className="mt-2 text-[11px] text-[var(--text-secondary)] line-clamp-2 opacity-80 group-hover:opacity-100 leading-tight transition-opacity">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Continuous Animated Marquee Ticker */}
        <ScrollReveal delay={0.4} className="mt-14 pt-10 border-t border-[var(--border)]/50">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
              Seamlessly Synchronized Across All Major Ad & Data Ecosystems
            </p>
          </div>

          <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee space-x-8 items-center">
              {[...PLATFORM_ICONS, ...PLATFORM_ICONS].map((item, idx) => {
                const SvgIcon = item.svg;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 shrink-0 hover:border-primary/40 transition-colors"
                  >
                    <SvgIcon className="w-5 h-5" style={{ color: item.brandColor }} />
                    <span className="text-xs font-semibold text-[var(--text-secondary)] whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
