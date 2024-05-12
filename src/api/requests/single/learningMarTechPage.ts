import type { StrapiAxiosResponse } from '@/api/types/common';
import type { LearningMarTechPage } from '@/api/types/single/LearningMarTechPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningMarTechPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<LearningMarTechPage>>('/api/learning-mar-tech-page', {
    withCredentials: true,
  });
