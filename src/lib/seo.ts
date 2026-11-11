import type { Metadata } from 'next';

/** Canonical site origin, without a trailing slash. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sirajulislamsohag.com').replace(/\/+$/, '');

export const PERSON_NAME = 'Sirajul Islam Sohag';
export const BRAND_NAME = 'Sirajul Islam Sohag - Google Ads Consultant';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/sirajul-islam-sohag-04996428a/';
export const WHATSAPP_URL = 'https://wa.me/8801793859694';

export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

interface PageSeoInput {
  /** Page title without the site suffix (the root layout template adds it). */
  title: string;
  description: string;
  path: string;
  /** Use when the title should not receive the site suffix. */
  absoluteTitle?: boolean;
}

const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Sirajul Islam Sohag - Certified Google Ads Consultant',
};

/**
 * Builds consistent page metadata: title, description, canonical URL,
 * Open Graph and Twitter tags. The shared OG image comes from app/opengraph-image.tsx.
 */
export function pageMetadata({ title, description, path, absoluteTitle }: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: BRAND_NAME,
      locale: 'en_US',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Renders a JSON-LD script tag. Server-safe. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}
