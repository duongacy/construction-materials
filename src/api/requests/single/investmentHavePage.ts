import { type StrapiAxiosResponse } from '@/api/types/common';
import type { InvestmentHavePage } from '@/api/types/single/InvestmentHavePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const investmentHavePageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<InvestmentHavePage>>('/api/investment-have-page');
