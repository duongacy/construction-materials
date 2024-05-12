import type { Blog } from '@/api/types/collection/Blog';
import type { PaginationRequest, StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';
import type { AxiosResponse } from 'axios';
import { paginationToSearchParams } from '.';

export const getAllBlogsQueryFn = () => axiosInstanceGet<AxiosResponse<Blog[]>>(`/api/blogs`);

export const getBlogsQueryFn = (categoryName: string, pagination: PaginationRequest) => {
  const urlSearchParams = new URLSearchParams(paginationToSearchParams(pagination));

  if (categoryName !== '') {
    urlSearchParams.append('filters[category][name][$eq]', categoryName);
  }
  return axiosInstanceGet<StrapiAxiosResponse<Blog[]>>(`/api/blogs?${urlSearchParams.toString()}`);
};

export const getBlogByIdQueryFn = (id: string) => axiosInstanceGet<Blog>(`/api/blogs/${id}`);
