import type { ProfileActionContext } from '.';

export const profileActions = {
  async getProfile(context: ProfileActionContext) {
    // fetch(API_HOST + '/api/profile?populate=deep').then(async (rs) => {
    //   const profile: Profile = await rs.json();
    //   const payload: SET_PROFILE_MUTATION_PAYLOAD = { type: 'SET_PROFILE', profile };
    //   context.commit(payload);
    // });
  },
};
