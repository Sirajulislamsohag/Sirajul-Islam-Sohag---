'use client';

import React from 'react';
import {
  BarChart3,
  LayoutDashboard,
  Users2,
  Cpu,
  Workflow,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { MagicBento, BentoCardData } from '@/components/ui/magic-bento';
import { TextReveal } from '@/components/animations/text-reveal';
import { useCalendly } from '@/providers/calendly-provider';

// 6 Cards structured identically to the reference screenshot
const BENTO_FEATURES: BentoCardData[] = [
  {
    id: 'analytics',
    label: 'Insights',
    title: 'Analytics',
    description: 'Track user behavior & conversion signals',
    icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'dashboard',
    label: 'Overview',
    title: 'Dashboard',
    description: 'Centralized live ROAS data view',
    icon: <LayoutDashboard className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'collaboration',
    label: 'Teamwork',
    title: 'Collaboration',
    description: 'Work together seamlessly to scale campaigns & revenue pipelines across multi-channel funnels.',
    icon: <Users2 className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 'automation',
    label: 'Efficiency',
    title: 'Automation',
    description: 'Streamline workflows with server-side Meta CAPI, GA4 offline conversion imports, and automated Smart Bidding rules.',
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 'integration',
    label: 'Connectivity',
    title: 'Integration',
    description: 'Connect Shopify, CRM & favorite tools',
    icon: <Workflow className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'security',
    label: 'Protection',
    title: 'Security',
    description: 'Enterprise-grade click fraud prevention',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
  },
];

export function SpecializedVerticalsGrid() {
  const { openCalendly } = useCalendly();

  const handleCardClick = (card: BentoCardData) => {
    openCalendly({
      title: `${card.title} Strategy Consultation`,
      subtitle: `Let's discuss how we implement ${card.title.toLowerCase()} for your marketing ecosystem.`,
    });
  };

  return (
    <section
      id="specialized-verticals-grid"
      className="py-20 md:py-28 relative overflow-hidden bg-[var(--bg)]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Performance Architecture
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Engineered for <span className="text-gradient">Maximum Impact</span>
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Interactive, data-driven systems designed for granular tracking, continuous ROI tuning, and predictable growth.
          </TextReveal>
        </div>

        {/* The Exact 6-Card Interlocking Magic Bento Grid */}
        <MagicBento
          cards={BENTO_FEATURES}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={350}
          particleCount={12}
          glowColor="245, 158, 11" // Portfolio signature gold/amber theme
          onCardClick={handleCardClick}
        />
      </div>
    </section>
  );
}

export default SpecializedVerticalsGrid;
