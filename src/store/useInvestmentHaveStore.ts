import { investmentHavePageQueryFn } from '@/api/requests/single/investmentHavePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useInvestmentHaveStore = defineStore('investmentHave', {
  state: () => ({
    investmentHavePageQuery: useQuery({
      queryKey: ['investment-have-page'],
      queryFn: investmentHavePageQueryFn,
    }),
  }),
  getters: {
    investmentHavePageData: (state) => {
      // can filter data here
      return state.investmentHavePageQuery.data?.data;
    },
  },
  actions: {},
});
