import { defineStore } from 'pinia';

type PromotionNeedStore = {};

export const usePromotionNeedStore = defineStore('promotionNeed', {
  state: () => {
    return {
      promotionNeedStore: null as PromotionNeedStore | null,
    };
  },
  actions: {
    async fetchData() {
      const originData = await fetch('http://localhost:1337/api/promotion-need');
      const jsonData = (await originData.json()) as PromotionNeedStore;
      this.promotionNeedStore = jsonData;
    },
  },
});
