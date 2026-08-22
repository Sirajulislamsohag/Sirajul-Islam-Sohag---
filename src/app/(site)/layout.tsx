'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/theme-provider';
import { LenisProvider } from '@/providers/lenis-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ReduxProvider } from '@/store/provider';
import { CalendlyProvider } from '@/providers/calendly-provider';
import { Navbar } from '@/components/layout/navbar';
import { CursorBlob } from '@/components/effects/cursor-blob';
import { NoiseOverlay } from '@/components/effects/noise-overlay';
import { ScrollProgress } from '@/components/effects/scroll-progress';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import '@/lib/gsap-config';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider>
          <CalendlyProvider>
            <LenisProvider>
              <CursorBlob />
              <ScrollProgress />
              <NoiseOverlay />
              <Navbar />
              <main className="relative min-h-screen">
                {children}
              </main>
              <WhatsAppButton />
            </LenisProvider>
          </CalendlyProvider>
        </ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
