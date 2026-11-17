import type { StaticBlogPost } from '../types';
import whatDoesAGoogleAdsSpecialistDo from './what-does-a-google-ads-specialist-do';
import googleAdsConsultantVsAgency from './google-ads-consultant-vs-agency';
import googlePpcCampaignsAdScheduling from './google-ppc-campaigns-ad-scheduling';
import howGooglePpcCampaignsWork from './how-google-ppc-campaigns-work';
import googleLeadGenerationForContractors from './google-lead-generation-for-contractors';
import googleAdsManagerAccountAccessOwnership from './google-ads-manager-account-access-ownership';
import whatDoesAGoogleAdsManagerDo from './what-does-a-google-ads-manager-do';
// Each new post: create ./<slug>.ts exporting a StaticBlogPost as default, then add it below.

export const POSTS: StaticBlogPost[] = [
  whatDoesAGoogleAdsSpecialistDo,
  googleAdsConsultantVsAgency,
  googlePpcCampaignsAdScheduling,
  howGooglePpcCampaignsWork,
  googleLeadGenerationForContractors,
  googleAdsManagerAccountAccessOwnership,
  whatDoesAGoogleAdsManagerDo,
];
