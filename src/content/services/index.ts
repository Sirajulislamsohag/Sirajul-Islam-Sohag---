import type { ServicePage } from '../types';
import { googleAdsManagement } from './google-ads-management';
import { googleAdsAudit } from './google-ads-audit';
import { googleSearchAds } from './google-search-ads';
import { performanceMaxManagement } from './performance-max-management';
import { googleShoppingManagement } from './google-shopping-management';
import { conversionTracking } from './google-ads-conversion-tracking';
import { googleTagManager } from './google-tag-manager';
import { ga4Consultant } from './ga4-consultant';
import { lookerStudioDashboard } from './looker-studio-dashboard';

/** Order here controls the order on the /services hub. */
export const SERVICE_PAGES: ServicePage[] = [
  googleAdsManagement,
  googleAdsAudit,
  googleSearchAds,
  performanceMaxManagement,
  googleShoppingManagement,
  conversionTracking,
  googleTagManager,
  ga4Consultant,
  lookerStudioDashboard,
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function serviceHref(slug: string): string {
  return `/services/${slug}`;
}
