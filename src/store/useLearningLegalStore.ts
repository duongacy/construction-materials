import { learningLegalPageQueryFn } from '@/api/requests/single/learningLegalPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useLearningLegalStore = defineStore('learningLegal', {
  state: () => ({
    learningLegalPageQuery: useQuery({
      queryKey: ['learning-legal-page'],
      queryFn: learningLegalPageQueryFn,
    }),
  }),
  getters: {
    learningLegalPageData: (state) => computed(() => state.learningLegalPageQuery.data?.data.data),
  },
  actions: {},
});
