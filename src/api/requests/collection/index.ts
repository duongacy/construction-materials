import type { PaginationRequest } from '@/api/types/common';

export const paginationToSearchParams = (paginationRequest: PaginationRequest) => {
  const urlSearchParams = new URLSearchParams('');
  if (paginationRequest.page !== undefined) {
    urlSearchParams.append('pagination[page]', paginationRequest.page.toString());
  }
  if (paginationRequest.pageSize !== undefined) {
    urlSearchParams.append('pagination[pageSize]', paginationRequest.pageSize.toString());
  }
  if (paginationRequest.withCount === true) {
    urlSearchParams.append('pagination[withCount]', 'true');
  }
  return urlSearchParams.toString();
};
