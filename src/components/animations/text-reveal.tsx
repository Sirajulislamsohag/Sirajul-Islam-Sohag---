'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'slide-in' | 'blur-in' | 'char-reveal';
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  once?: boolean;
}

/*
 * Lightweight scroll reveal (CSS transition + one shared IntersectionObserver).
 * Text is server-rendered visible; only elements that start BELOW the fold are hidden
 * on mount and revealed as they scroll in, so nothing above the fold waits for JavaScript.
 */
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add('reveal-in');
        observer?.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  return observer;
}

export function TextReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  as: Tag = 'div',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el || !io) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible: leave as is
    el.style.transitionDelay = `${delay}s`;
    el.style.transitionDuration = `${Math.min(duration, 0.8)}s`;
    el.classList.add('reveal', `reveal-${variant}`);
    io.observe(el);
    return () => io.unobserve(el);
  }, [delay, duration, variant]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}
