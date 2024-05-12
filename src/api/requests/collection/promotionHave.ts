import type { PromotionHave } from '@/api/types/collection/Promotion';
import type { StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllPromotionHavesQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<PromotionHave[]>>('/api/promotion-haves');
