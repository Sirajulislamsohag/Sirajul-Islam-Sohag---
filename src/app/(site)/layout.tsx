'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/theme-provider';
import { CalendlyProvider } from '@/providers/calendly-provider';
import { Navbar } from '@/components/layout/navbar';
import { CursorBlob } from '@/components/effects/cursor-blob';
import { ScrollProgress } from '@/components/effects/scroll-progress';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
        <ThemeProvider>
          <CalendlyProvider>
              <CursorBlob />
              <ScrollProgress />
              <Navbar />
              <main className="relative min-h-screen">
                {children}
              </main>
              <WhatsAppButton />
          </CalendlyProvider>
        </ThemeProvider>
  );
}
