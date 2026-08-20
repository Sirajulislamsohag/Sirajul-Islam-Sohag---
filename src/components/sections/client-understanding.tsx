'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  { text: 'Starting a Business?', subtitle: 'Every great journey begins with a single step.' },
  { text: 'Sales Going Down?', subtitle: 'Declining revenue is a sign you need a new strategy.' },
  { text: "Don't Worry.", subtitle: 'The right marketing approach can turn everything around.' },
  { text: 'Sirajul Can Help.', subtitle: 'Data-driven strategies that deliver measurable results.' },
  { text: "Let's Scale Your Business.", subtitle: 'Book a free consultation and start growing today.' },
];

export function ClientUnderstanding() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const stages = containerRef.current.querySelectorAll('.stage');

    // Pin the section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${STAGES.length * 100}%`,
      pin: true,
      pinSpacing: true,
    });

    // Animate each stage
    stages.forEach((stage, index) => {
      if (index === 0) {
        // First stage is visible by default
        gsap.set(stage, { opacity: 1, y: 0 });
      } else {
        gsap.set(stage, { opacity: 0, y: 50 });
      }

      if (index > 0) {
        gsap.to(stage, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${(index / STAGES.length) * 100}% top`,
            end: `${((index + 0.5) / STAGES.length) * 100}% top`,
            scrub: 1,
          },
        });
      }

      if (index < STAGES.length - 1) {
        gsap.to(stage, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${((index + 0.7) / STAGES.length) * 100}% top`,
            end: `${((index + 1) / STAGES.length) * 100}% top`,
            scrub: 1,
          },
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 text-center px-6 w-full h-full flex items-center justify-center">
        {STAGES.map((stage, index) => (
          <div
            key={index}
            className="stage absolute inset-0 flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white mb-4">
              {stage.text}
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-xl">
              {stage.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
