'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useMediaQuery } from '@/hooks/use-media-query';

export function CursorBlob() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' });
    const xOutline = gsap.quickTo(outline, 'x', { duration: 0.5, ease: 'power3.out' });
    const yOutline = gsap.quickTo(outline, 'y', { duration: 0.5, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xOutline(e.clientX);
      yOutline(e.clientY);
    };

    const handleMouseEnterInteractive = () => {
      gsap.to(dot, { width: 60, height: 60, background: 'rgba(79, 70, 229, 0.2)', duration: 0.3 });
      gsap.to(outline, { width: 80, height: 80, borderColor: 'var(--color-accent)', opacity: 0.3, duration: 0.3 });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to(dot, { width: 8, height: 8, background: 'var(--color-primary)', duration: 0.3 });
      gsap.to(outline, { width: 40, height: 40, borderColor: 'var(--color-primary)', opacity: 0.5, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" style={{ left: 0, top: 0 }} />
      <div ref={outlineRef} className="cursor-outline hidden md:block" style={{ left: 0, top: 0 }} />
    </>
  );
}
