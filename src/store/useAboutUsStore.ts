import { axiosInstanceGet } from '@/lib/utils/axios';
import { type Image, type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

interface AboutUsHeroSectionData extends StrapiFormat {
  title: string;
  description: string;
  backgrounds: Image[];
}

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsHeroSectionQuery: useQuery({
      queryKey: ['about-us-hero-section'],
      queryFn: () => axiosInstanceGet<AboutUsHeroSectionData>('/api/about-us-hero-section'),
    }),
  }),
  actions: {},
});
