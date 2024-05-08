import type { InvestmentNeed } from '@/api/types/collection/Investment';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllInvestmentNeedsQueryFn = () =>
  axiosInstanceGet<InvestmentNeed[]>('/api/investment-needs');
