import { learningMarTechPageQueryFn } from '@/api/requests/single/learningMarTechPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useLearningMarTechStore = defineStore('learningMarTech', {
  state: () => ({
    learningMarTechPageQuery: useQuery({
      queryKey: ['learning-mar-tech-page'],
      queryFn: learningMarTechPageQueryFn,
    }),
  }),
  getters: {
    learningMarTechPageData: (state) =>
      computed(() => state.learningMarTechPageQuery.data?.data.data),
  },
  actions: {},
});
