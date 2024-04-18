import { defineStore } from 'pinia';

/* Hero Section */
type HeroSection = {
  title: string;
  description: string;
};

/* Stats Section */
type Stat = {
  title: string;
  description: string;
  value: number;
  unit: string;
};
type StatsSection = {
  title: string;
  description: string;
  stats: Stat[];
};

/* ImageSection */
/* ValuesSection  */
/* LogoCloudSection  */
/* TeamSection  */
/* BlogSection  */

type AboutUsData = {
  heroSection: HeroSection;
  statsSection: StatsSection;
};

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => {
    return {
      aboutUsData: null as AboutUsData | null,
    };
  },
  actions: {
    async fetchData() {
      const originData = await fetch('http://localhost:1337/api/about-us');
      const jsonData = (await originData.json()) as AboutUsData;
      this.aboutUsData = jsonData;
    },
  },
});
