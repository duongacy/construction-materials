import { getAllInvestmentHavesQueryFn } from '@/api/requests/collection/investmentHave';
import { investmentHavePageQueryFn } from '@/api/requests/single/investmentHavePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

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
    investmentHavePageData: (state) =>
      computed(() => state.investmentHavePageQuery.data?.data.data),
    allInvestmentHaves: (state) => computed(() => state.allInvestmentHavesQuery.data?.data.data),
  },
  actions: {},
});
