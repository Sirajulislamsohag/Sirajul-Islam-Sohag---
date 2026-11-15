'use client';

import { useEffect, useRef } from 'react';

/** Thin reading-progress bar at the top. One passive scroll listener, updated once per frame. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999]">
      <div
        ref={ref}
        className="h-full origin-left scale-x-0"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))' }}
      />
    </div>
  );
}
