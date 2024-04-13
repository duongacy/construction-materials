import { API_HOST } from '@/consts';
import type { ProfileActionContext } from '.';
import { type SET_PROFILE_MUTATION_PAYLOAD } from './mutations';
import type { Profile } from './types';

export const profileActions = {
  async getProfile(context: ProfileActionContext) {
    fetch(API_HOST + '/api/profile?populate=deep').then(async (rs) => {
      const profile: Profile = await rs.json();
      const payload: SET_PROFILE_MUTATION_PAYLOAD = { type: 'SET_PROFILE', profile };
      context.commit(payload);
    });
  },
};
