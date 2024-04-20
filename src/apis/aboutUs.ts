import { VITE_API_URL } from '@/consts';

type Image = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
};
const defaultImage: Image = {
  id: 0,
  name: '',
  formats: undefined,
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  provider: '',
  provider_metadata: undefined,
  createdAt: '',
  updatedAt: '',
};

/* aboutUsHeroSectionQueryFn */
type AboutUsHeroSectionData = {
  title: string;
  description: string;
  backgrounds: Image[];
};

const aboutUsHeroSectionDefaultData: AboutUsHeroSectionData = {
  title: '',
  description: '',
  backgrounds: [],
};

export const aboutUsHeroSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-hero-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsHeroSectionData;
    }
  } catch (error) {
    console.error(error);
  }

  return aboutUsHeroSectionDefaultData;
};

/* aboutUsStatsSectionQueryFn */
type Stat = {
  value: string;
  title: string;
  description: string;
};
type AboutUsStatsSectionData = {
  title: string;
  description: string;
  stats: Stat[];
};

const aboutUsStatsSectionDefaultData: AboutUsStatsSectionData = {
  title: '',
  description: '',
  stats: [],
};

export const aboutUsStatsSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-stats-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsStatsSectionData;
    }
  } catch (error) {
    console.error(error);
  }

  return aboutUsStatsSectionDefaultData;
};

/* aboutUsImageSectionQueryFn */
type AboutUsImageSectionData = {
  title: string;
  description: string;
  image: Image;
};

const aboutUsImageSectionDefaultData: AboutUsImageSectionData = {
  title: '',
  description: '',
  image: defaultImage,
};

export const aboutUsImageSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-image-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsImageSectionData;
    }
  } catch (error) {
    console.error(error);
  }
  return aboutUsImageSectionDefaultData;
};

/* aboutUsLogoCloudsSectionQueryFn */
type AboutUsLogoCloudsSectionData = {
  title: string;
  description: string;
  logos: Image[];
};

const aboutUsLogoCloudsSectionDefaultData: AboutUsLogoCloudsSectionData = {
  title: '',
  description: '',
  logos: [],
};

export const aboutUsLogoCloudsSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-logo-clouds-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsLogoCloudsSectionData;
    }
  } catch (error) {
    console.error(error);
  }
  return aboutUsLogoCloudsSectionDefaultData;
};

/* aboutUsBlogsSectionQueryFn */
type Blog = {
  title: string;
  description: string;
  content: string;
};

type AboutUsBlogsSectionData = {
  title: string;
  description: string;
  blogs: Blog[];
};

const aboutUsBlogsSectionDefaultData: AboutUsBlogsSectionData = {
  title: '',
  description: '',
  blogs: [],
};

export const aboutUsBlogsSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-blogs-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsBlogsSectionData;
    }
  } catch (error) {
    console.error(error);
  }
  return aboutUsBlogsSectionDefaultData;
};

/* aboutUsTeamSectionQueryFn */
type Member = {
  name: string;
  role: string;
  avatar: Image;
};

type AboutUsTeamSectionData = {
  title: string;
  description: string;
  members: Member[];
};

const aboutUsTeamSectionDefaultData: AboutUsTeamSectionData = {
  title: '',
  description: '',
  members: [],
};

export const aboutUsTeamSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-team-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsTeamSectionData;
    }
  } catch (error) {
    console.error(error);
  }
  return aboutUsTeamSectionDefaultData;
};

/* aboutUsValuesSectionQueryFn */
type Value = {
  title: string;
  description: string;
};

type AboutUsValuesSectionData = {
  title: string;
  description: string;
  values: Value[];
};

const aboutUsValuesSectionDefaultData: AboutUsValuesSectionData = {
  title: '',
  description: '',
  values: [],
};

export const aboutUsValuesSectionQueryFn = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/api/about-us-values-section?populate=deep`);
    if (response.ok) {
      return (await response.json()) as AboutUsValuesSectionData;
    }
  } catch (error) {
    console.error(error);
  }
  return aboutUsValuesSectionDefaultData;
};
