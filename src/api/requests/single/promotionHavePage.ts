import type { StrapiAxiosResponse } from '@/api/types/common';
import type { PromotionHavePage } from '@/api/types/single/PromotionHavePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const promotionHavePageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<PromotionHavePage>>('/api/promotion-have-page');
