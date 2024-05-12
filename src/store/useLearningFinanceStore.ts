import { getAllBlogsQueryFn } from '@/api/requests/collection/blog';
import { learningFinancePageQueryFn } from '@/api/requests/single/learningFinancePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useLearningFinanceStore = defineStore('learningFinance', {
  state: () => ({
    learningFinancePageQuery: useQuery({
      queryKey: ['learning-finance-page'],
      queryFn: learningFinancePageQueryFn,
    }),
    allBlogsPageQuery: useQuery({
      queryKey: ['all-blogs'],
      queryFn: getAllBlogsQueryFn,
    }),
  }),
  getters: {
    learningFinancePageData: (state) =>
      computed(() => state.learningFinancePageQuery.data?.data.data),
    blogs: (state) => computed(() => state.allBlogsPageQuery.data?.data),
  },
  actions: {},
});
