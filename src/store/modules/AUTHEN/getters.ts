import type { TAuthState } from './types';

export const authGetters = {
  userId: (state: TAuthState) => state.userId,
  token: (state: TAuthState) => state.token,
  isAuthenticated: (state: TAuthState) => !!state.token,
};
