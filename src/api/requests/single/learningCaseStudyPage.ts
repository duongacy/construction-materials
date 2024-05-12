import type { StrapiAxiosResponse } from '@/api/types/common';
import type { LearningCaseStudyPage } from '@/api/types/single/LearningCaseStudyPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningCaseStudyPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<LearningCaseStudyPage>>('/api/learning-case-study-page', {
    withCredentials: true,
  });
