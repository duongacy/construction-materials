import type { InvestmentNeedPage } from '@/api/types/single/InvestmentNeedPage';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const investmentNeedPageQueryFn = () =>
  axiosInstanceGet<InvestmentNeedPage>('/api/investment-need-page');
