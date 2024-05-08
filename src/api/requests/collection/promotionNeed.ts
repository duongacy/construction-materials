import type { PromotionNeed } from '@/api/types/collection/Promotion';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllPromotionNeedsQueryFn = () =>
  axiosInstanceGet<PromotionNeed[]>('/api/promotion-needs');
