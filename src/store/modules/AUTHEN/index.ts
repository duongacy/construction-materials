import { authActions } from './actions';
import { authGetters } from './getters';
import { authMutations } from './mutations';

export const AUTHEN = {
  namespaced: true,
  state() {
    return {
      userId: '',
      token: '',
    };
  },
  getters: authGetters,
  actions: authActions,
  mutations: authMutations,
};
