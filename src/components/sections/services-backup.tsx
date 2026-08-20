'use client';

import { Target, Megaphone, Search, BarChart3, Mail, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TiltCard } from '@/components/animations/tilt-card';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Mail: <Mail className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            What I Offer
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Services That Drive Growth
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Comprehensive digital marketing solutions designed to maximize your ROI and accelerate business growth.
          </TextReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <TiltCard maxTilt={5}>
                <Card variant="spotlight" className="h-full group cursor-pointer hover-glow">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.slice(0, 4).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                  >
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
