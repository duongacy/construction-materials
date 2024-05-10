import { getAllBlogsQueryFn } from '@/api/requests/collection/blog';
import { learningFinancePageQueryFn } from '@/api/requests/single/learningFinancePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

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
    learningFinancePageData: (state) => {
      // can filter data here
      return state.learningFinancePageQuery.data?.data;
    },
    blogs: (state) => {
      return state.allBlogsPageQuery.data?.data;
    },
  },
  actions: {},
});
