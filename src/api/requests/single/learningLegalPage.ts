import type { StrapiAxiosResponse } from '@/api/types/common';
import type { LearningLegalPage } from '@/api/types/single/LearningLegalPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningLegalPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<LearningLegalPage>>('/api/learning-legal-page', {
    withCredentials: true,
  });
