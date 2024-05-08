import { getAllInvestmentHavesQueryFn } from '@/api/requests/collection/investmentHave';
import { investmentHavePageQueryFn } from '@/api/requests/single/investmentHavePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useInvestmentHaveStore = defineStore('investmentHave', {
  state: () => ({
    investmentHavePageQuery: useQuery({
      queryKey: ['investment-have-page'],
      queryFn: investmentHavePageQueryFn,
    }),
    allInvestmentHavesQuery: useQuery({
      queryKey: ['investment-haves'],
      queryFn: getAllInvestmentHavesQueryFn,
    }),
  }),
  getters: {
    investmentHavePageData: (state) => {
      // can filter data here
      return state.investmentHavePageQuery.data?.data;
    },
    allInvestmentHaves: (state) => {
      // can filter data here
      return state.allInvestmentHavesQuery.data?.data;
    },
  },
  actions: {},
});
