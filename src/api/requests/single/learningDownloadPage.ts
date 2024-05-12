import type { StrapiAxiosResponse } from '@/api/types/common';
import type { LearningDownloadPage } from '@/api/types/single/LearningDownloadPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningDownloadPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<LearningDownloadPage>>('/api/learning-download-page', {
    withCredentials: true,
  });
