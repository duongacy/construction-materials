import { type StrapiAxiosResponse } from '@/api/types/common';
import type { AboutUsPage } from '@/api/types/single/AboutUsPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const aboutUsPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<AboutUsPage>>('/api/about-us-page');
