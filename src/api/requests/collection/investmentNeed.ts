import type { InvestmentNeed } from '@/api/types/collection/Investment';
import type { StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllInvestmentNeedsQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<InvestmentNeed[]>>('/api/investment-needs');
