'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/animations/counter';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { STATS } from '@/lib/constants';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function AboutWithImage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about-image" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Siraj.jpeg"
                alt="Sirajul Islam Sohag - Digital Marketer About"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl">
              <p className="font-number text-3xl font-bold text-gradient">5+</p>
              <p className="text-xs text-[var(--text-muted)]">Years of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <TextReveal variant="fade-up" as="p" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
                About Me
              </TextReveal>
              <TextReveal variant="fade-up" as="h2" className="section-heading">
                Scaling Businesses with Data-Driven Google Ads 
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
                  <Button variant="glass" icon={<Download className="w-4 h-4" />}>
                    Download Resume
                  </Button>
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
      </div>
    </section>
  );
}
