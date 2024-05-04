import type { AboutUsPage } from '@/api/types/single/AboutUsPage';
import { axiosInstanceGet } from '@/lib/utils/axios';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsHeroSectionQuery: useQuery({
      queryKey: ['about-us-page'],
      queryFn: () => axiosInstanceGet<AboutUsPage>('/api/about-us-page'),
    }),
  }),
  actions: {},
});
