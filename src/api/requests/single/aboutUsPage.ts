import type { AboutUsPage } from '@/api/types/single/AboutUsPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const aboutUsPageQueryFn = () => axiosInstanceGet<AboutUsPage>('/api/about-us-page');
