import type { InvestmentHave } from '@/api/types/collection/Investment';
import type { StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllInvestmentHavesQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<InvestmentHave[]>>('/api/investment-haves');
