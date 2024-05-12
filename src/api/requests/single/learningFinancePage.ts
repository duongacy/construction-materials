import type { StrapiAxiosResponse } from '@/api/types/common';
import type { LearningFinancePage } from '@/api/types/single/LearningFinancePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningFinancePageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<LearningFinancePage>>('/api/learning-finance-page', {
    withCredentials: true,
  });
