'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TIMELINE_DATA } from '@/lib/constants';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(lineRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            My Journey
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading">
            Experience & Milestones
          </TextReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-[var(--border)]">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-primary via-accent to-secondary"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <ScrollReveal
                key={item.year}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row md:text-right' : 'md:flex-row-reverse md:text-left'} pl-8 md:pl-0`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 hover-glow transition-all duration-300">
                      <span className="font-number text-sm text-primary font-semibold">{item.year}</span>
                      <h3 className="text-lg font-heading font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-accent font-medium">{item.company}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[var(--bg-card)] border-2 border-primary flex items-center justify-center z-10 -translate-x-[calc(50%-1px)]">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
