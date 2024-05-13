import type { Category } from '@/api/types/collection/Category';
import { type StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllCategorysQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<Category[]>>('/api/categories');
