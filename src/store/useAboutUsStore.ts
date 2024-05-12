import { aboutUsPageQueryFn } from '@/api/requests/single/aboutUsPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsPageQuery: useQuery({
      queryKey: ['about-us-page'],
      queryFn: aboutUsPageQueryFn,
    }),
  }),
  getters: {
    // can filter data here

    heroSectionData: (state) => computed(() => state.aboutUsPageQuery.data?.data.data.heroSection),

    blogsSectionData: (state) =>
      computed(() => state.aboutUsPageQuery.data?.data.data.blogsSection),

    imageSectionData: (state) =>
      computed(() => state.aboutUsPageQuery.data?.data.data.imageSection),

    logosCloudSectionData: (state) =>
      computed(() => state.aboutUsPageQuery.data?.data.data.logosCloudSection),

    statsSectionData: (state) =>
      computed(() => state.aboutUsPageQuery.data?.data.data.statsSection),

    teamSectionData: (state) => computed(() => state.aboutUsPageQuery.data?.data.data.teamSection),

    valuesSectionData: (state) =>
      computed(() => state.aboutUsPageQuery.data?.data.data.valuesSection),
  },
  actions: {},
});
