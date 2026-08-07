'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip);
  
  // Set global defaults
  gsap.defaults({
    ease: 'power4.out',
    duration: 1,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    gsap.globalTimeline.timeScale(20); // Speed up all animations to effectively skip them
    ScrollTrigger.config({ limitCallbacks: true });
  }
}

export { gsap, ScrollTrigger, Flip };
