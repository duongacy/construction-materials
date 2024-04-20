import { defineStore } from 'pinia';

type InvestmentHaveStore = {};

export const useInvestmentHaveStore = defineStore('investmentHave', {
  state: () => {
    return {
      investmentHaveStore: null as InvestmentHaveStore | null,
    };
  },
  actions: {
    async fetchData() {
      const originData = await fetch('http://127.0.0.1:1337/api/investment-have');
      const jsonData = (await originData.json()) as InvestmentHaveStore;
      this.investmentHaveStore = jsonData;
    },
  },
});
