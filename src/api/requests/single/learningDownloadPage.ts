import type { LearningDownloadPage } from '@/api/types/single/LearningDownloadPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const learningDownloadPageQueryFn = () =>
  axiosInstanceGet<LearningDownloadPage>('/api/learning-download-page');
