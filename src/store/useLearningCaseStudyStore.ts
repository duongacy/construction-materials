import { learningCaseStudyPageQueryFn } from '@/api/requests/single/learningCaseStudyPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useLearningCaseStudyStore = defineStore('learningCaseStudy', {
  state: () => ({
    learningCaseStudyPageQuery: useQuery({
      queryKey: ['learning-case-study-page'],
      queryFn: learningCaseStudyPageQueryFn,
    }),
  }),
  getters: {
    learningCaseStudyPageData: (state) => {
      // can filter data here
      return state.learningCaseStudyPageQuery.data?.data;
    },
  },
  actions: {},
});
