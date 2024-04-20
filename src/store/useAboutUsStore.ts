import { aboutUsHeroSectionQueryFn } from '@/apis/aboutUs';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsHeroSectionQuery: useQuery({
      queryKey: ['about-us-hero-section'],
      queryFn: aboutUsHeroSectionQueryFn,
    }),
  }),
  actions: {},
});
