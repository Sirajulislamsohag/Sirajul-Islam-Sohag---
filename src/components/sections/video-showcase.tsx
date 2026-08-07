'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';

gsap.registerPlugin(ScrollTrigger);

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!videoRef.current || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(
      videoRef.current,
      { width: '40%', borderRadius: '24px' },
      {
        width: '100%',
        borderRadius: '0px',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      }
    );

    gsap.to(textRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Text Overlay */}
      <div ref={textRef} className="absolute z-10 text-center px-6">
        <TextReveal as="h2" variant="char-reveal" className="section-heading text-white mb-4">
          See the Results
        </TextReveal>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Watch how data-driven marketing transforms businesses
        </p>
      </div>

      {/* Video Container */}
      <div
        ref={videoRef}
        className="relative aspect-video overflow-hidden mx-auto cursor-pointer group"
        style={{ width: '40%' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/30 via-dark to-accent/30 flex items-center justify-center">
          {/* Play Button */}
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </section>
  );
}
