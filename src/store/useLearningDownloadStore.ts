import { learningDownloadPageQueryFn } from '@/api/requests/single/learningDownloadPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useLearningDownloadStore = defineStore('learningDownload', {
  state: () => ({
    learningDownloadPageQuery: useQuery({
      queryKey: ['learning-download-page'],
      queryFn: learningDownloadPageQueryFn,
    }),
  }),
  getters: {
    learningDownloadPageData: (state) =>
      computed(() => state.learningDownloadPageQuery.data?.data.data),
  },
  actions: {},
});
