'use client';

import { useRef, useCallback, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

/** 3D tilt on hover (desktop). Plain CSS transforms, no animation library. */
export function TiltCard({ children, className, maxTilt = 10, perspective = 1000, glare = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const card = cardRef.current;
      if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      card.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      card.style.transform = `perspective(${perspective}px) rotateX(${(y - 0.5) * -maxTilt}deg) rotateY(${(x - 0.5) * maxTilt}deg)`;
      if (glare && glareRef.current) {
        glareRef.current.style.opacity = '0.15';
        glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.3), transparent 60%)`;
      }
    },
    [maxTilt, perspective, glare],
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
    if (glareRef.current) glareRef.current.style.opacity = '0';
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      className={cn('relative transform-gpu', className)}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-inherit pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 60%)', transform: 'translateZ(1px)' }}
        />
      )}
    </div>
  );
}
