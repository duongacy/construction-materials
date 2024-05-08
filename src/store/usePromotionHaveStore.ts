import { getAllPromotionHavesQueryFn } from '@/api/requests/collection/promotionHave';
import { promotionHavePageQueryFn } from '@/api/requests/single/promotionHavePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const usePromotionHaveStore = defineStore('promotionHave', {
  state: () => ({
    promotionHavePageQuery: useQuery({
      queryKey: ['promotion-have-page'],
      queryFn: promotionHavePageQueryFn,
    }),
    allPromotionHavesQuery: useQuery({
      queryKey: ['promotion-haves'],
      queryFn: getAllPromotionHavesQueryFn,
    }),
  }),
  getters: {
    promotionHavePageData: (state) => {
      // can filter data here
      return state.promotionHavePageQuery.data?.data;
    },
    allPromotionHaves: (state) => {
      // can filter data here
      return state.allPromotionHavesQuery.data?.data;
    },
  },
  actions: {},
});
