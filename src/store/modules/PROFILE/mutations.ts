import { type ProfileState } from '.';
import type { Profile } from './types';

export type SET_PROFILE_MUTATION_PAYLOAD = { type: 'SET_PROFILE'; profile: Profile };
export const profileMutations = {
  SET_PROFILE(state: ProfileState, payload: SET_PROFILE_MUTATION_PAYLOAD) {
    state.profile = payload.profile;
  },
};
