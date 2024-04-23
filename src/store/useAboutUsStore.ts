import { getQueryFn, type Image, type StrapiFormat } from '@/apis';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

interface AboutUsHeroSectionData extends StrapiFormat {
  title: string;
  description: string;
  backgrounds: Image[];
}

const aboutUsHeroSectionDefaultData: AboutUsHeroSectionData = {
  title: '',
  description: '',
  backgrounds: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsHeroSectionQuery: useQuery({
      queryKey: ['about-us-hero-section'],
      queryFn: () =>
        getQueryFn<AboutUsHeroSectionData>(
          '/api/about-us-hero-section?populate=deep',
          aboutUsHeroSectionDefaultData,
        ),
    }),
  }),
  actions: {},
});
