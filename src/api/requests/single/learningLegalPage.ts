import type { LearningLegalPage } from '@/api/types/single/LearningLegalPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningLegalPageQueryFn = () =>
  axiosInstanceGet<LearningLegalPage>('/api/learning-legal-page');
