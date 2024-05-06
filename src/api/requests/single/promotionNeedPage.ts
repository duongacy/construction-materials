import type { PromotionNeedPage } from '@/api/types/single/PromotionNeedPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const promotionNeedPageQueryFn = () =>
  axiosInstanceGet<PromotionNeedPage>('/api/promotion-need-page');
