import Image from 'next/image';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { LucideIcon } from 'lucide-react';
import type { PageImage as PageImageData } from '@/content/types';

interface PageImageProps {
  image: PageImageData;
  /** Shown when the image file has not been added to /public yet. */
  fallbackIcon: LucideIcon;
  fallbackLabel: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

function isRemote(src: string): boolean {
  return src.startsWith('https://images.unsplash.com/');
}

/** Unsplash serves a sized, cropped source; next/image then converts it to WebP/AVIF. */
function remoteSrc(src: string): string {
  return `${src}?auto=format&fit=crop&w=1600&q=80`;
}

function publicFileExists(src: string): boolean {
  try {
    return existsSync(join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

/**
 * Server component. Renders the real industry/service image when the file exists
 * in /public, otherwise a branded placeholder so the layout never breaks.
 * Drop a WebP at the path in the content file and the image appears on the next build.
 */
export function PageImageBlock({
  image,
  fallbackIcon: Icon,
  fallbackLabel,
  priority,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: PageImageProps) {
  if (isRemote(image.src) || publicFileExists(image.src)) {
    return (
      <figure className={`relative overflow-hidden rounded-3xl border border-[var(--border)] ${className}`}>
        <Image
          src={isRemote(image.src) ? remoteSrc(image.src) : image.src}
          alt={image.alt}
          width={1600}
          height={1067}
          priority={priority}
          sizes={sizes}
          className="w-full h-full object-cover"
        />
        {image.credit && (
          <figcaption className="absolute bottom-2 right-3 text-[10px] text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
            <a href={image.credit} target="_blank" rel="noopener noreferrer nofollow">
              Photo: Unsplash
            </a>
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-primary/15 via-[var(--bg-card)] to-[var(--bg-card)] flex flex-col items-center justify-center text-center p-10 ${className}`}
    >
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative w-20 h-20 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <p className="relative font-heading font-semibold text-lg">{fallbackLabel}</p>
      <p className="relative text-sm text-[var(--text-muted)] mt-2 max-w-xs">Search, tracking and optimization built for this industry</p>
    </div>
  );
}
