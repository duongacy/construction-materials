import type { StrapiAxiosResponse } from '@/api/types/common';
import type { InvestmentNeedPage } from '@/api/types/single/InvestmentNeedPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const investmentNeedPageQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<InvestmentNeedPage>>('/api/investment-need-page');
