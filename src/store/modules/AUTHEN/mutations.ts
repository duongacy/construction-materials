import type { TAuthState } from './types';

export const authMutations = {
  setUser(state: TAuthState, action: { payload: { token: string; userId: string } }) {
    state.token = action.payload.token;
    state.userId = action.payload.userId;
  },
};
