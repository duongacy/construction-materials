import type { PaginationRequest } from '@/api/types/common';
export { PaginationList, PaginationListItem } from 'radix-vue';
export { default as BasePagination } from './BasePagination.vue';
export { default as PaginationEllipsis } from './PaginationEllipsis.vue';
export { default as PaginationFirst } from './PaginationFirst.vue';
export { default as PaginationLast } from './PaginationLast.vue';
export { default as PaginationNext } from './PaginationNext.vue';
export { default as PaginationPrev } from './PaginationPrev.vue';

export const PAGINATION_REQUEST_DEFAULT: PaginationRequest = {
  page: 1,
  pageSize: '1',
  withCount: true,
};
