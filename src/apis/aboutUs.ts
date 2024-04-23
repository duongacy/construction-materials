import { defaultImage, getQueryFn, type Image, type StrapiFormat } from '.';

/* aboutUsStatsSectionQueryFn */
interface Stat {
  value: string;
  title: string;
  description: string;
}
interface AboutUsStatsSectionData extends StrapiFormat {
  title: string;
  description: string;
  stats: Stat[];
}

const aboutUsStatsSectionDefaultData: AboutUsStatsSectionData = {
  title: '',
  description: '',
  stats: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsStatsSectionQueryFn = () =>
  getQueryFn<AboutUsStatsSectionData>(
    '/api/about-us-stats-section?populate=deep',
    aboutUsStatsSectionDefaultData,
  );

/* aboutUsImageSectionQueryFn */
interface AboutUsImageSectionData extends StrapiFormat {
  title: string;
  description: string;
  image: Image;
}

const aboutUsImageSectionDefaultData: AboutUsImageSectionData = {
  title: '',
  description: '',
  image: defaultImage,
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsImageSectionQueryFn = () =>
  getQueryFn<AboutUsImageSectionData>(
    '/api/about-us-image-section?populate=deep',
    aboutUsImageSectionDefaultData,
  );

/* aboutUsLogoCloudsSectionQueryFn */
interface AboutUsLogoCloudsSectionData extends StrapiFormat {
  title: string;
  description: string;
  logos: Image[];
}

const aboutUsLogoCloudsSectionDefaultData: AboutUsLogoCloudsSectionData = {
  title: '',
  description: '',
  logos: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsLogoCloudsSectionQueryFn = () =>
  getQueryFn<AboutUsLogoCloudsSectionData>(
    '/api/about-us-logo-clouds-section?populate=deep',
    aboutUsLogoCloudsSectionDefaultData,
  );

/* aboutUsBlogsSectionQueryFn */
interface Blog {
  title: string;
  description: string;
  content: string;
}

interface AboutUsBlogsSectionData extends StrapiFormat {
  title: string;
  description: string;
  blogs: Blog[];
}

const aboutUsBlogsSectionDefaultData: AboutUsBlogsSectionData = {
  title: '',
  description: '',
  blogs: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsBlogsSectionQueryFn = () =>
  getQueryFn<AboutUsBlogsSectionData>(
    '/api/about-us-blogs-section?populate=deep',
    aboutUsBlogsSectionDefaultData,
  );

/* aboutUsTeamSectionQueryFn */
interface Member {
  name: string;
  role: string;
  avatar: Image;
}

interface AboutUsTeamSectionData extends StrapiFormat {
  title: string;
  description: string;
  members: Member[];
}

const aboutUsTeamSectionDefaultData: AboutUsTeamSectionData = {
  title: '',
  description: '',
  members: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsTeamSectionQueryFn = () =>
  getQueryFn<AboutUsTeamSectionData>(
    '/api/about-us-team-section?populate=deep',
    aboutUsTeamSectionDefaultData,
  );

/* aboutUsValuesSectionQueryFn */
interface Value {
  title: string;
  description: string;
}

interface AboutUsValuesSectionData extends StrapiFormat {
  title: string;
  description: string;
  values: Value[];
}

const aboutUsValuesSectionDefaultData: AboutUsValuesSectionData = {
  title: '',
  description: '',
  values: [],
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export const aboutUsValuesSectionQueryFn = () =>
  getQueryFn<AboutUsValuesSectionData>(
    '/api/about-us-values-section?populate=deep',
    aboutUsValuesSectionDefaultData,
  );
