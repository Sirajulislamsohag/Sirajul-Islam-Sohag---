'use client';

import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/animations/counter';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { STATS } from '@/lib/constants';
import Link from 'next/link';

export function AboutWithImage() {
  return (
    <section id="about-image" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <TextReveal variant="fade-up" as="p" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              About Me
            </TextReveal>
            <TextReveal variant="fade-up" as="h2" className="section-heading">
              Scaling Businesses with <br/> Data-Driven Google Ads 
            </TextReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              With over 5 years of experience in digital marketing, I've helped 200+ businesses across 30+ countries scale their revenue through strategic Google Ads, Facebook Ads, and SEO campaigns. My data-driven approach ensures every dollar spent generates maximum ROI.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I specialize in performance marketing, combining deep analytical skills with creative strategy to build marketing engines that consistently deliver results. From startups to established brands, I create customized growth frameworks that scale.
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      className="text-gradient"
                    />
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <a href="/certificates/PDF/CV(Sirajul Islam Sohag).pdf" download target="_blank" rel="noopener noreferrer">
              </a>
              <Link href="/about">
                <Button variant="ghost" icon={<ArrowRight className="w-4 h-4" />}>
                  Know More
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
