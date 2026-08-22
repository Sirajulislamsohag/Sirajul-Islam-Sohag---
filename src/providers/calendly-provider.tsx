'use client';

import React, { createContext, useContext, useState } from 'react';
import { CalendlyModal } from '@/components/ui/calendly-modal';
import { analyticsEvents } from '@/lib/gtm';

interface CalendlyModalOptions {
  title?: string;
  subtitle?: string;
  url?: string;
}

interface CalendlyContextType {
  openCalendly: (options?: CalendlyModalOptions) => void;
  closeCalendly: () => void;
  isOpen: boolean;
}

const CalendlyContext = createContext<CalendlyContextType>({
  openCalendly: () => {},
  closeCalendly: () => {},
  isOpen: false,
});

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<CalendlyModalOptions | undefined>(undefined);

  const openCalendly = (modalOptions?: CalendlyModalOptions) => {
    setOptions(modalOptions);
    setIsOpen(true);
    analyticsEvents.calendlyBookingClicked(modalOptions?.title || 'general_modal');
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly, isOpen }}>
      {children}
      <CalendlyModal
        isOpen={isOpen}
        onClose={closeCalendly}
        title={options?.title}
        subtitle={options?.subtitle}
        url={options?.url}
      />
    </CalendlyContext.Provider>
  );
}

export const useCalendly = () => useContext(CalendlyContext);
