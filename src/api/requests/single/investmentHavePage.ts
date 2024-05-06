import type { InvestmentHavePage } from '@/api/types/single/InvestmentHavePage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const investmentHavePageQueryFn = () =>
  axiosInstanceGet<InvestmentHavePage>('/api/investment-have-page');
