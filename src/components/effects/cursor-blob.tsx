'use client';

import { useEffect, useRef, useState } from 'react';

/** Custom cursor (desktop with a mouse only). Lightweight requestAnimationFrame easing. */
export function CursorBlob() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (min-width: 769px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mx = -100, my = -100, dx = -100, dy = -100, ox = -100, oy = -100, raf = 0;
    const loop = () => {
      dx += (mx - dx) * 0.5; dy += (my - dy) * 0.5;
      ox += (mx - ox) * 0.18; oy += (my - oy) * 0.18;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      outline.style.transform = `translate3d(${ox}px, ${oy}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(mx - ox) + Math.abs(my - oy) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(loop); };

    const interactive = 'a, button, [role="button"], input, textarea, select';
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(interactive);
      dot.classList.toggle('cursor-dot--active', !!hit);
      outline.classList.toggle('cursor-outline--active', !!hit);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ left: 0, top: 0 }} />
      <div ref={outlineRef} className="cursor-outline" style={{ left: 0, top: 0 }} />
    </>
  );
}
