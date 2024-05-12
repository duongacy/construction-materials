import { getAllPromotionNeedsQueryFn } from '@/api/requests/collection/promotionNeed';
import { promotionNeedPageQueryFn } from '@/api/requests/single/promotionNeedPage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

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
    promotionNeedPageData: (state) => computed(() => state.promotionNeedPageQuery.data?.data.data),
    allPromotionNeeds: (state) => computed(() => state.allPromotionNeedsQuery.data?.data.data),
  },
  actions: {},
});
