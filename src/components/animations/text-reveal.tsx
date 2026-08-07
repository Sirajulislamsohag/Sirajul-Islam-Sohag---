'use client';

import { useRef, ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'slide-in' | 'blur-in' | 'char-reveal';
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  once?: boolean;
}

export function TextReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  as: Tag = 'div',
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = containerRef.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let split: SplitType | null = null;

    const hasNestedElements = element.children.length > 0;

    if (variant === 'char-reveal' && !hasNestedElements) {
      try {
        split = new SplitType(element as HTMLElement, { types: 'chars,words' });
        if (split.chars && split.chars.length > 0) {
          gsap.fromTo(
            split.chars,
            { y: '80%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.7,
              stagger: 0.02,
              ease: 'power4.out',
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 92%',
                once,
              },
            }
          );
        }
      } catch (e) {
        console.warn('SplitType error:', e);
      }
    } else {
      const animations: Record<string, gsap.TweenVars> = {
        'fade-up': { y: 30, opacity: 0 },
        'slide-in': { x: -40, opacity: 0 },
        'blur-in': { opacity: 0, filter: 'blur(8px)' },
      };

      gsap.fromTo(
        element,
        animations[variant] || { y: 30, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 92%',
            once,
          },
        }
      );
    }

    // Safety fallback: Refresh ScrollTrigger so characters never stay hidden on reload
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (split && split.chars) {
        gsap.to(split.chars, { opacity: 1, y: '0%', duration: 0.3 });
      } else if (element) {
        gsap.to(element, { opacity: 1, y: 0, x: 0, filter: 'blur(0px)', duration: 0.3 });
      }
    }, 1200);

    return () => {
      clearTimeout(timer);
      if (split) split.revert();
    };
  }, { scope: containerRef });

  return (
    <Tag ref={containerRef as any} className={cn('will-change-transform', className)}>
      {children}
    </Tag>
  );
}
