import type { ActionContext } from 'vuex';
import { profileActions } from './actions';
import { profileGetters } from './getters';
import { profileMutations } from './mutations';
import type { Profile } from './types';

export type ProfileState = {
  profile?: Profile;
};
export type ProfileActionContext = ActionContext<ProfileState, any>;

export const PROFILE = {
  namespaced: true,
  state: () => {
    return {} as ProfileState;
  },
  getters: profileGetters,
  actions: profileActions,
  mutations: profileMutations,
};
