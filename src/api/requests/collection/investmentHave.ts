import type { InvestmentHave } from '@/api/types/collection/Investment';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllInvestmentHavesQueryFn = () =>
  axiosInstanceGet<InvestmentHave[]>('/api/investment-haves');
