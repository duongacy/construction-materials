import { getAllInvestmentNeedsQueryFn } from '@/api/requests/collection/investmentNeed';
import { investmentNeedPageQueryFn } from '@/api/requests/single/investmentNeedPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

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
    investmentNeedPageData: (state) =>
      computed(() => state.investmentNeedPageQuery.data?.data.data),
    allInvestmentNeeds: (state) =>
      computed(() => state.allInvestmentNeedsQuery.data?.data.data || []),
  },
  actions: {},
});
