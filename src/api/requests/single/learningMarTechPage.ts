import type { LearningMarTechPage } from '@/api/types/single/LearningMarTechPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningMarTechPageQueryFn = () =>
  axiosInstanceGet<LearningMarTechPage>('/api/learning-mar-tech-page');
