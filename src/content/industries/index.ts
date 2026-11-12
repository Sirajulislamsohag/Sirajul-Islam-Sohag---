import type { IndustryPage } from '../types';
import { localBusinesses } from './local-businesses';
import { homeServices } from './home-services';
import { ecommerce } from './ecommerce';
import { roofing } from './roofing';
import { hvac } from './hvac';
import { plumbers } from './plumbers';
import { autoServices } from './auto-services';
import { cleaning } from './cleaning';
import { lawFirms } from './law-firms';
import { dentists } from './dentists';
import { contractors } from './contractors';
import { electricians } from './electricians';

/** Order here controls the order on the /industries hub. */
export const INDUSTRY_PAGES: IndustryPage[] = [
  homeServices,
  localBusinesses,
  roofing,
  hvac,
  plumbers,
  electricians,
  contractors,
  cleaning,
  autoServices,
  dentists,
  lawFirms,
  ecommerce,
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return INDUSTRY_PAGES.find((page) => page.slug === slug);
}

export function industryHref(slug: string): string {
  return `/${slug}`;
}

export function industryHrefForSection(sectionId: string): string | undefined {
  const page = INDUSTRY_PAGES.find((p) => p.sectionId === sectionId);
  return page ? industryHref(page.slug) : undefined;
}
