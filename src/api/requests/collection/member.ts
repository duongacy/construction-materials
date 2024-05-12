import type { Member } from '@/api/types/collection/Member';
import type { StrapiAxiosResponse } from '@/api/types/common';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllMembersQueryFn = () =>
  axiosInstanceGet<StrapiAxiosResponse<Member[]>>('/api/members');
