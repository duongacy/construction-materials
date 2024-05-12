import type { PromotionNeed } from '@/api/types/collection/Promotion';
import type { StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllPromotionNeedsQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<PromotionNeed[]>>('/api/promotion-needs');
