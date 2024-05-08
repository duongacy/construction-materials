import type { PromotionHave } from '@/api/types/collection/Promotion';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllPromotionHavesQueryFn = () =>
  axiosInstanceGet<PromotionHave[]>('/api/promotion-haves');
