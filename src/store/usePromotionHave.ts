import { defineStore } from 'pinia';

type PromotionHaveStore = {};

export const usePromotionHaveStore = defineStore('promotionHave', {
  state: () => {
    return {
      promotionHaveStore: null as PromotionHaveStore | null,
    };
  },
  actions: {
    async fetchData() {
      const originData = await fetch('http://localhost:1337/api/promotion-have');
      const jsonData = (await originData.json()) as PromotionHaveStore;
      this.promotionHaveStore = jsonData;
    },
  },
});
