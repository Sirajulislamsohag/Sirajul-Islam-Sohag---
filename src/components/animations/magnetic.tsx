'use client';

import { useRef, useCallback, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/** Element gently follows the cursor (desktop hover only). Plain CSS transforms, no animation library. */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    el.style.transform = 'translate3d(0, 0, 0)';
  }, []);

  return (
    <div ref={ref} className={cn('inline-block', className)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
