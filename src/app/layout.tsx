import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Space_Grotesk, Inter, Sora } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { GTM_ID } from '@/lib/gtm';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-number',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sirajul | Premium Digital Marketing Consultant',
    template: '%s | Sirajul Marketing',
  },
  description: 'Expert Google Ads, Facebook Ads, SEO & Analytics specialist helping businesses scale through data-driven digital marketing strategies.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sirajmarketing.com'),
  keywords: ['digital marketing', 'google ads specialist', 'facebook ads expert', 'seo optimization', 'ppc management', 'marketing consultant', 'performance marketing'],
  authors: [{ name: 'Sirajul Islam Sohag' }],
  creator: 'Sirajul Islam Sohag',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sirajul Marketing',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sirajmarketing',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' }, { media: '(prefers-color-scheme: dark)', color: '#050816' }],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Head Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Sirajul Islam Sohag - Digital Marketing Consultant',
              image: 'https://sirajmarketing.com/siraj-portrait.jpg',
              description: 'Enterprise Google Ads, Meta Ads, SEO & Analytics Growth Consultancy.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              priceRange: '$$$$',
              url: 'https://sirajmarketing.com',
              sameAs: [
                'https://linkedin.com/in/sirajul-islam-sohag-04996428a/',
                'https://facebook.com/sirajul.islam.sohag',
              ],
              knowsAbout: [
                'Google Ads',
                'Meta Ads',
                'Search Engine Optimization',
                'Conversion Rate Optimization',
                'Performance Analytics',
              ],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${sora.variable} font-body antialiased bg-[var(--bg)] text-[var(--text)]`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--bg-card)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
