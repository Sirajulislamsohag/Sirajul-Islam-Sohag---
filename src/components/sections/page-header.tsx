'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbCurrent: string;
}

export function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbCurrent,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      {/* Background Aurora Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--text-muted)] mb-6">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]/50" />
            <span className="text-[var(--text)] font-medium">{breadcrumbCurrent}</span>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="max-w-3xl">
          {badge && (
            <TextReveal
              as="p"
              variant="fade-up"
              className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3"
            >
              {badge}
            </TextReveal>
          )}

          <TextReveal
            as="h1"
            variant="char-reveal"
            className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-4"
          >
            {title}
          </TextReveal>

          {subtitle && (
            <TextReveal
              as="p"
              variant="fade-up"
              delay={0.2}
              className="text-[var(--text-secondary)] text-base md:text-xl leading-relaxed"
            >
              {subtitle}
            </TextReveal>
          )}
        </div>
      </div>
    </section>
  );
}
