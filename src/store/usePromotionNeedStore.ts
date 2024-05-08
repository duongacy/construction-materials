import { getAllPromotionNeedsQueryFn } from '@/api/requests/collection/promotionNeed';
import { promotionNeedPageQueryFn } from '@/api/requests/single/promotionNeedPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const usePromotionNeedStore = defineStore('promotionNeed', {
  state: () => ({
    promotionNeedPageQuery: useQuery({
      queryKey: ['promotion-need-page'],
      queryFn: promotionNeedPageQueryFn,
    }),
    allPromotionNeedsQuery: useQuery({
      queryKey: ['promotion-needs'],
      queryFn: getAllPromotionNeedsQueryFn,
    }),
  }),
  getters: {
    promotionNeedPageData: (state) => {
      // can filter data here
      return state.promotionNeedPageQuery.data?.data;
    },
    allPromotionNeeds: (state) => {
      // can filter data here
      return state.allPromotionNeedsQuery.data?.data;
    },
  },
  actions: {},
});
