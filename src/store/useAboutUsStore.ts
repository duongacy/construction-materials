import { axiosInstanceGet } from '@/lib/utils/axios';
import { type Image, type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

interface AboutUsHeroSectionData extends StrapiFormat {
  title: string;
  description: string;
  backgrounds: Image[];
}

type HeroSection = {};
type BlogsSection = {};
type ImageSection = {};
type LogosCloudSection = {};
type StatsCloudSection = {};
type TeamCloudSection = {};
type ValuesCloudSection = {};

type AboutUsPage = {
  heroSection: HeroSection;
  blogsSection: BlogsSection;
  imageSection: ImageSection;
  logosCloudSection: LogosCloudSection;
  statsCloudSection: StatsCloudSection;
  teamCloudSection: TeamCloudSection;
  valuesCloudSection: ValuesCloudSection;
} & StrapiFormat;

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsHeroSectionQuery: useQuery({
      queryKey: ['about-us-hero-section'],
      queryFn: () => axiosInstanceGet<AboutUsPage>('/api/about-us-page'),
    }),
  }),
  actions: {},
});
