'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

/**
 * Shows the real number in the HTML (good for SEO and first paint). Counters that start
 * below the fold count up from 0 when they scroll into view.
 */
export function Counter({ value, suffix = '', prefix = '', duration = 2, className, decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (v: number) => `${prefix}${decimals > 0 ? v.toFixed(decimals) : Math.round(v)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen: keep final value
    el.textContent = fmt(0);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const ms = duration * 1000;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        const eased = 1 - Math.pow(1 - t, 2);
        el.textContent = fmt(value * eased);
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={cn('font-number tabular-nums', className)}>
      {fmt(value)}
    </span>
  );
}
