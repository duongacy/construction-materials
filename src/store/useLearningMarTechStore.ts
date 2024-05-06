import { learningMarTechPageQueryFn } from '@/api/requests/single/learningMarTechPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useLearningMarTechStore = defineStore('learningMarTech', {
  state: () => ({
    learningMarTechPageQuery: useQuery({
      queryKey: ['learning-mar-tech-page'],
      queryFn: learningMarTechPageQueryFn,
    }),
  }),
  getters: {
    learningMarTechPageData: (state) => {
      // can filter data here
      return state.learningMarTechPageQuery.data?.data;
    },
  },
  actions: {},
});
