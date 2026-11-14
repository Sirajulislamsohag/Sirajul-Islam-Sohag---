import type { StaticBlogPost } from '../types';
import whatDoesAGoogleAdsSpecialistDo from './what-does-a-google-ads-specialist-do';
import googleAdsConsultantVsAgency from './google-ads-consultant-vs-agency';
import googlePpcCampaignsAdScheduling from './google-ppc-campaigns-ad-scheduling';
// Each new post: create ./<slug>.ts exporting a StaticBlogPost as default, then add it below.

export const POSTS: StaticBlogPost[] = [
  whatDoesAGoogleAdsSpecialistDo,
  googleAdsConsultantVsAgency,
  googlePpcCampaignsAdScheduling,
];
