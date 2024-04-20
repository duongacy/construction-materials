/* Hero Section */
export type HeroSection = {
  title: string;
  description: string;
};

/* Stats Section */
export type Stat = {
  title: string;
  description: string;
  value: number;
  unit: string;
};
export type StatsSection = {
  title: string;
  description: string;
  stats: Stat[];
};

/* ImageSection */
/* ValuesSection  */
/* LogoCloudSection  */
/* TeamSection  */
/* BlogSection  */

export type AboutUsData = {
  heroSection: HeroSection;
  statsSection: StatsSection;
};

const defaultData: AboutUsData = {
  heroSection: {
    title: '',
    description: '',
  },
  statsSection: {
    title: '',
    description: '',
    stats: [],
  },
};

export const aboutUsQueryFn = async () => {
  const originData = await fetch('http://localhost:1337/api/about-us?populate=deep');
  let data: AboutUsData | undefined = undefined;
  if (originData.ok) {
    data = (await originData.json()) as AboutUsData;
  }

  return data || defaultData;
};
