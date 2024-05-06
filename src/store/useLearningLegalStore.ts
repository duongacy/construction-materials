import { learningLegalPageQueryFn } from '@/api/requests/single/learningLegalPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useLearningLegalStore = defineStore('learningLegal', {
  state: () => ({
    learningLegalPageQuery: useQuery({
      queryKey: ['learning-legal-page'],
      queryFn: learningLegalPageQueryFn,
    }),
  }),
  getters: {
    learningLegalPageData: (state) => {
      // can filter data here
      return state.learningLegalPageQuery.data?.data;
    },
  },
  actions: {},
});
