'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function Counter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
  decimals = 0,
}: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (!counterRef.current || hasAnimated.current) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration,
      ease: 'power2.out',
      snap: decimals === 0 ? { val: 1 } : undefined,
      scrollTrigger: {
        trigger: counterRef.current,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${prefix}${decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val)}${suffix}`;
        }
      },
      onComplete: () => {
        hasAnimated.current = true;
      },
    });
  }, { scope: counterRef });

  return (
    <span ref={counterRef} className={cn('font-number tabular-nums', className)}>
      {prefix}0{suffix}
    </span>
  );
}
