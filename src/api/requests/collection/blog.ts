import type { Blog } from '@/api/types/collection/Blog';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllBlogsQueryFn = () => axiosInstanceGet<Blog[]>('/api/blogs');
