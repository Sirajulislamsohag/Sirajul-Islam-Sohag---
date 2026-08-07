'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999]">
      <div
        ref={progressRef}
        className="h-full origin-left scale-x-0"
        style={{
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))',
        }}
      />
    </div>
  );
}
