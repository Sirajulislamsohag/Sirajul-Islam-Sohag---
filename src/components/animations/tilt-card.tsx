'use client';

import { useRef, useCallback, ReactNode } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  perspective = 1000,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -maxTilt;
      const rotateY = (x - 0.5) * maxTilt;

      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        transformPerspective: perspective,
        duration: 0.4,
        ease: 'power2.out',
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0.15,
          x: `${x * 100}%`,
          y: `${y * 100}%`,
          duration: 0.4,
        });
      }
    },
    [maxTilt, perspective, glare]
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    });
    if (glare && glareRef.current) {
      gsap.to(glareRef.current, { opacity: 0, duration: 0.4 });
    }
  }, [glare]);

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
          className="absolute inset-0 rounded-inherit pointer-events-none opacity-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 60%)',
            transform: 'translateZ(1px)',
          }}
        />
      )}
    </div>
  );
}
