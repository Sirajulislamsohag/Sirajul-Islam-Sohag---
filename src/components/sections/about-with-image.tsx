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
              I help businesses turn Google Ads into a predictable and profitable growth channel through strategic campaign planning, precise targeting, and continuous optimization.
<br/>
With 5+ years of experience, I’ve helped 100+ businesses worldwide generate qualified leads, increase sales, improve conversion rates, and maximize their return on ad spend.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
               My expertise covers Google Search Ads, Performance Max, Google Shopping, Lead Generation, eCommerce Advertising, Keyword Research, Conversion Tracking, and Google Ads Optimization.
 <br/>
Every campaign starts with a clear understanding of the business and its customers. From campaign structure and targeting to bidding, ad performance, and conversion tracking, I focus on every detail that can make ad spend work harder and deliver better results.
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
