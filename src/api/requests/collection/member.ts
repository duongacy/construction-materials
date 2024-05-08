import type { Member } from '@/api/types/collection/Member';
import { axiosInstanceGet } from '@/lib/utils/axios';

export const getAllMembersQueryFn = () => axiosInstanceGet<Member[]>('/api/members');
