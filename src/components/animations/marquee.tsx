'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useRef, useEffect, useState, useCallback } from 'react';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  speed?: number;
  gap?: number;
  style?: React.CSSProperties;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  repeat = 4,
  speed = 40,
  gap = 20,
  style,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden marquee-fade',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={{ '--duration': `${speed}s`, '--gap': `${gap}px`, ...style } as React.CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0',
            vertical
              ? 'animate-marquee-vertical flex-col min-h-full'
              : 'animate-marquee flex-row min-w-full',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]'
          )}
          style={{ gap: `${gap}px` }}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

/* ─── GSAP-powered seamless infinite marquee ─── */

interface GSAPMarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number; // pixels per second
  gap?: number;
}

export function GSAPMarquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 60,
  gap = 16,
}: GSAPMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const contentWidthRef = useRef(0);
  const initializedRef = useRef(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    // The first child group is the "original" content
    const firstGroup = track.children[0] as HTMLElement;
    if (!firstGroup) return 0;
    const w = firstGroup.offsetWidth + gap;
    contentWidthRef.current = w;
    return w;
  }, [gap]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Initial measurement
    const w = measure();

    // For reverse: start at -contentWidth so content fills from left
    // For forward: start at 0
    if (!initializedRef.current && w > 0) {
      offsetRef.current = reverse ? -w : 0;
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      initializedRef.current = true;
    }

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused && contentWidthRef.current > 0 && offsetRef.current !== null) {
        const dir = reverse ? 1 : -1;
        offsetRef.current += dir * speed * delta;

        // Wrap the offset seamlessly
        const cw = contentWidthRef.current;
        if (reverse) {
          // Moving right: when offset reaches 0, snap back to -cw
          if (offsetRef.current >= 0) offsetRef.current -= cw;
        } else {
          // Moving left: when offset reaches -cw, snap back to 0
          if (offsetRef.current <= -cw) offsetRef.current += cw;
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // Re-measure on resize
    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [isPaused, reverse, speed, measure]);

  return (
    <div
      className={cn('overflow-hidden marquee-fade', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        {/* Render 4 copies for seamless wrapping on all screen sizes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex shrink-0"
            style={{ gap: `${gap}px` }}
            aria-hidden={i > 0}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
