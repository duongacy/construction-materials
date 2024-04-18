import { defineStore } from 'pinia';

type InvestmentNeedStore = {};

export const useInvestmentNeedStore = defineStore('investmentNeed', {
  state: () => {
    return {
      investmentNeedStore: null as InvestmentNeedStore | null,
    };
  },
  actions: {
    async fetchData() {
      const originData = await fetch('http://localhost:1337/api/investment-need');
      const jsonData = (await originData.json()) as InvestmentNeedStore;
      this.investmentNeedStore = jsonData;
    },
  },
});
