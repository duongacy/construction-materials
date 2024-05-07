import type { LearningFinancePage } from '@/api/types/single/LearningFinancePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningFinancePageQueryFn = () =>
  axiosInstanceGet<LearningFinancePage>('/api/learning-finance-page', { withCredentials: true });
