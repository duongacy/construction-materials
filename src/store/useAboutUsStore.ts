import { aboutUsPageQueryFn } from '@/api/requests/single/aboutUsPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => ({
    aboutUsPageQuery: useQuery({
      queryKey: ['about-us-page'],
      queryFn: aboutUsPageQueryFn,
    }),
  }),
  getters: {
    aboutUsPageData: (state) => {
      // can filter data here
      return state.aboutUsPageQuery.data?.data;
    },
  },
  actions: {},
});
