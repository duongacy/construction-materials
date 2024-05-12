import { getAllPromotionHavesQueryFn } from '@/api/requests/collection/promotionHave';
import { promotionHavePageQueryFn } from '@/api/requests/single/promotionHavePage';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

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
    promotionHavePageData: (state) => computed(() => state.promotionHavePageQuery.data?.data.data),
    allPromotionHaves: (state) =>
      computed(() => state.allPromotionHavesQuery.data?.data.data || []),
  },
  actions: {},
});
