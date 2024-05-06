import type { LearningCaseStudyPage } from '@/api/types/single/LearningCaseStudyPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningCaseStudyPageQueryFn = () =>
  axiosInstanceGet<LearningCaseStudyPage>('/api/learning-case-study-page');
