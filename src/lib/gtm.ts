import { SITE_CONFIG } from './constants';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || SITE_CONFIG.gtmId || 'GTM-NJDTVNS8';

type WindowWithDataLayer = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

declare const window: WindowWithDataLayer;

/**
 * Pushes custom event payload to Google Tag Manager dataLayer
 */
export function sendGTMEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    timestamp: new Date().toISOString(),
    ...parameters,
  });
}

/**
 * High-value conversion event helpers
 */
export const analyticsEvents = {
  leadFormSubmitted: (details?: { service?: string; budget?: string }) => {
    sendGTMEvent('generate_lead', {
      event_category: 'Conversion',
      event_label: 'Contact Form Submission',
      service_type: details?.service,
      budget_range: details?.budget,
    });
  },

  calendlyBookingClicked: (location = 'hero_or_modal') => {
    sendGTMEvent('schedule_meeting_click', {
      event_category: 'Engagement',
      event_label: 'Calendly Modal Open',
      click_location: location,
    });
  },

  whatsappChatClicked: () => {
    sendGTMEvent('whatsapp_chat_click', {
      event_category: 'Contact',
      event_label: 'Floating WhatsApp Button',
    });
  },

  ctaClicked: (buttonName: string, location: string) => {
    sendGTMEvent('cta_click', {
      event_category: 'CTA Interaction',
      button_name: buttonName,
      cta_location: location,
    });
  },

  portfolioItemViewed: (title: string, category: string) => {
    sendGTMEvent('view_portfolio_item', {
      event_category: 'Portfolio',
      item_title: title,
      item_category: category,
    });
  },
};
