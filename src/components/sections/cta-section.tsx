'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { useCalendly } from '@/providers/calendly-provider';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className = '' }: CTASectionProps) {
  const { openCalendly } = useCalendly();
  const whatsappUrl = SOCIAL_LINKS.whatsapp || 'https://wa.me/8801793859694';

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      {/* Dynamic Background Mesh & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/20 via-accent/15 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-[var(--border)] bg-gradient-to-b from-[var(--bg-card)]/95 via-[var(--bg-card)]/80 to-[var(--bg-card)]/95 backdrop-blur-2xl shadow-2xl overflow-hidden text-center group">
            {/* Top Glowing Ambient Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Decorative Corner Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />

            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/30 text-primary mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scale Your Revenue</span>
            </div>

            {/* H2 Heading */}
            <TextReveal
              as="h2"
              variant="char-reveal"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text)] tracking-tight mb-5 max-w-3xl mx-auto leading-tight"
            >
              Ready to Scale Your <span className="text-gradient">Google Ads?</span>
            </TextReveal>

            {/* Subheading */}
            <TextReveal
              as="p"
              variant="fade-up"
              delay={0.2}
              className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            >
              Let's talk about what's actually possible for your business.
            </TextReveal>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group/wa cursor-pointer border border-[#25D366]/40"
              >
                <svg className="w-5 h-5 fill-current shrink-0 group-hover/wa:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.05 2c-5.83 0-10.575 4.743-10.577 10.578 0 1.865.487 3.684 1.412 5.289l-1.5 5.476 5.604-1.469a10.518 10.518 0 005.059 1.296h.004c5.829 0 10.574-4.743 10.577-10.578A10.505 10.505 0 0019.53 4.53 10.505 10.505 0 0012.05 2zm-5.421 15.424l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.028 6.974 2.888a9.806 9.806 0 012.878 6.979c0 5.446-4.432 9.876-9.876 9.876-1.99 0-3.95-.5-5.689-1.448zm10.843-2.042c-.248.694-1.435 1.328-2.006 1.413-.512.076-1.16.108-1.872-.118-.431-.137-.985-.32-1.694-.626-2.981-1.287-4.927-4.289-5.076-4.487-.148-.198-1.213-1.611-1.213-3.074 0-1.463.768-2.182 1.04-2.479.272-.298.594-.372.792-.372l.57.01c.182.009.427-.069.669.51.247.595.841 2.058.916 2.207.075.149.124.322.025.52-.099.199-.149.323-.298.497-.149.173-.312.387-.446.52-.134.133-.289.284-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.326 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.298.149.496.223.57.347.075.124.075.719-.173 1.414z" />
                </svg>
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5 transition-transform" />
              </a>

              {/* Calendly Consultation Button */}
              <button
                type="button"
                onClick={() => openCalendly()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-heading font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group/cal cursor-pointer border border-primary/40"
              >
                <Calendar className="w-5 h-5 shrink-0 group-hover/cal:scale-110 transition-transform" />
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover/cal:translate-x-0.5 group-hover/cal:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-[var(--border)]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free Account Audit Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Custom Revenue Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No Sales Pressure or Lock-in</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
