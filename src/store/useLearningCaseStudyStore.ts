import { learningCaseStudyPageQueryFn } from '@/api/requests/single/learningCaseStudyPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useLearningCaseStudyStore = defineStore('learningCaseStudy', {
  state: () => ({
    learningCaseStudyPageQuery: useQuery({
      queryKey: ['learning-case-study-page'],
      queryFn: learningCaseStudyPageQueryFn,
    }),
  }),
  getters: {
    learningCaseStudyPageData: (state) =>
      computed(() => state.learningCaseStudyPageQuery.data?.data.data),
  },
  actions: {},
});
