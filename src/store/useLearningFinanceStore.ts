import { learningFinancePageQueryFn } from '@/api/requests/single/learningFinancePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useLearningFinanceStore = defineStore('learningFinance', {
  state: () => ({
    learningFinancePageQuery: useQuery({
      queryKey: ['learning-finance-page'],
      queryFn: learningFinancePageQueryFn,
    }),
  }),
  getters: {
    learningFinancePageData: (state) => {
      // can filter data here
      return state.learningFinancePageQuery.data?.data;
    },
  },
  actions: {},
});
