import type { StrapiAxiosResponse } from '@/api/types/common';
import type { PromotionNeedPage } from '@/api/types/single/PromotionNeedPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const promotionNeedPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<PromotionNeedPage>>('/api/promotion-need-page');
