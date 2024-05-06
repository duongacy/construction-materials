import type { PromotionHavePage } from '@/api/types/single/PromotionHavePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const promotionHavePageQueryFn = () =>
  axiosInstanceGet<PromotionHavePage>('/api/promotion-have-page');
