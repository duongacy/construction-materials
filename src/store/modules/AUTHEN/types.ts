import type { ActionContext } from 'vuex';

export type TAuthRequest = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

export type TAuthResponse = {
  idToken: string;
  localId: string;
  expiresIn: string;
};

export type TAuthState = {
  userId: string;
  token: string;
  autoSignout: boolean;
};

export type TAuthActionContext = ActionContext<TAuthState, any>;
