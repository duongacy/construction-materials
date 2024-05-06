import { learningDownloadPageQueryFn } from '@/api/requests/single/learningDownloadPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useLearningDownloadStore = defineStore('learningDownload', {
  state: () => ({
    learningDownloadPageQuery: useQuery({
      queryKey: ['learning-download-page'],
      queryFn: learningDownloadPageQueryFn,
    }),
  }),
  getters: {
    learningDownloadPageData: (state) => {
      // can filter data here
      return state.learningDownloadPageQuery.data?.data;
    },
  },
  actions: {},
});
