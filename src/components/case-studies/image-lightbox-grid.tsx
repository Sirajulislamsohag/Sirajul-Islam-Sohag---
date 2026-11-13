'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  title?: string;
}

/**
 * Grid of images (screenshots or result thumbnails). Clicking one opens it
 * full size with its caption; arrow keys and Escape work.
 */
export function ImageLightboxGrid({
  images,
  columns = 2,
  aspect,
}: {
  images: LightboxImage[];
  columns?: 2 | 3;
  /** Force a crop ratio for thumbnails; screenshots keep their natural ratio. */
  aspect?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const grid = columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';
  const current = open === null ? null : images[open];

  return (
    <>
      <div className={`grid grid-cols-1 ${grid} gap-6`}>
        {images.map((img, i) => (
          <figure key={img.src} className="flex flex-col">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-white shadow-sm hover:border-primary/60 hover:shadow-lg transition-all cursor-zoom-in"
              aria-label={`Enlarge: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes={columns === 3 ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' : '(max-width: 768px) 100vw, 50vw'}
                className={`w-full ${aspect ? `${aspect} object-cover` : 'h-auto'}`}
              />
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-semibold text-white opacity-90 group-hover:opacity-100">
                <ZoomIn className="w-3.5 h-3.5" /> Enlarge
              </span>
            </button>
            {(img.title || img.caption) && (
              <figcaption className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {img.title && <span className="block font-heading font-semibold text-[var(--text)]">{img.title}</span>}
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 md:left-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 md:right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
          <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-[80vh] w-auto rounded-xl bg-white object-contain"
            />
            {(current.title || current.caption) && (
              <figcaption className="mt-3 text-center text-sm text-white/85">
                {current.title && <span className="font-semibold">{current.title}. </span>}
                {current.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
