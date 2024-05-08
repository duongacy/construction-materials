import type { Category } from '@/api/types/collection/Category';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllCategorysQueryFn = () => axiosInstanceGet<Category[]>('/api/categories');
