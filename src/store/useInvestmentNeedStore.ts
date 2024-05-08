import { getAllInvestmentNeedsQueryFn } from '@/api/requests/collection/investmentNeed';
import { investmentNeedPageQueryFn } from '@/api/requests/single/investmentNeedPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useInvestmentNeedStore = defineStore('investmentNeed', {
  state: () => ({
    investmentNeedPageQuery: useQuery({
      queryKey: ['investment-need-page'],
      queryFn: investmentNeedPageQueryFn,
    }),
    allInvestmentNeedsQuery: useQuery({
      queryKey: ['investment-needs'],
      queryFn: getAllInvestmentNeedsQueryFn,
    }),
  }),
  getters: {
    investmentNeedPageData: (state) => {
      // can filter data here
      return state.investmentNeedPageQuery.data?.data;
    },
    allInvestmentNeeds: (state) => {
      // can filter data here
      return state.allInvestmentNeedsQuery.data?.data;
    },
  },
  actions: {},
});
