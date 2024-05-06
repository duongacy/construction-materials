import { investmentNeedPageQueryFn } from '@/api/requests/single/investmentNeedPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useInvestmentNeedStore = defineStore('investmentNeed', {
  state: () => ({
    investmentNeedPageQuery: useQuery({
      queryKey: ['investment-need-page'],
      queryFn: investmentNeedPageQueryFn,
    }),
  }),
  getters: {
    investmentNeedPageData: (state) => {
      // can filter data here
      return state.investmentNeedPageQuery.data?.data;
    },
  },
  actions: {},
});
