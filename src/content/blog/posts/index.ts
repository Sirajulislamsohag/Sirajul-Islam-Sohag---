import type { StaticBlogPost } from '../types';
import whatDoesAGoogleAdsSpecialistDo from './what-does-a-google-ads-specialist-do';
// Each new post: create ./<slug>.ts exporting a StaticBlogPost as default, then add it below.

export const POSTS: StaticBlogPost[] = [
  whatDoesAGoogleAdsSpecialistDo,
];
