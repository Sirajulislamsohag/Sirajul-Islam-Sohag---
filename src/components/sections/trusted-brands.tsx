'use client';

import { GSAPMarquee } from '@/components/animations/marquee';
import { TextReveal } from '@/components/animations/text-reveal';
import { TRUSTED_BRANDS } from '@/lib/constants';

export function TrustedBrands() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <TextReveal as="h2" variant="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text)] mb-4 tracking-tight">
          Trusted by <span className="text-gradient">Industry Leaders</span>
        </TextReveal>
        <TextReveal as="p" variant="fade-up" delay={0.1} className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-normal">
          Delivering exceptional results for ambitious brands worldwide
        </TextReveal>
      </div>

      {/* Single-row seamless infinite ticker */}
      <GSAPMarquee pauseOnHover speed={50} gap={24}>
        {TRUSTED_BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center justify-center px-8 py-4 shrink-0 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group h-24 min-w-[200px]"
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="max-h-full max-w-full object-contain   transition-all duration-300"
            />
          </div>
        ))}
      </GSAPMarquee>
    </section>
  );
}
