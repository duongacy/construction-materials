import type { authMutations } from './mutations';
import type { TAuthActionContext, TAuthResponse } from './types';

const removeAuthenStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expireTime');
};
const addAuthenStorage = (token: string, userId: string, expireTime: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('expireTime', expireTime);
};
const getAuthenStorage = () => {
  const token = localStorage.getItem('token') || '';
  const userId = localStorage.getItem('userId') || '';
  const expireTime = localStorage.getItem('expireTime') || '';
  return {
    token,
    userId,
    expireTime,
  };
};

let timer: any = 1;
export const authActions = {
  async auth(
    context: TAuthActionContext,
    action: { type: 'signin' | 'signup'; payload: { email: string; password: string } },
  ) {
    const urls: Record<typeof action.type, string> = {
      signin:
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s',
      signup:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s',
    };

    const response = await fetch(urls[action.type], {
      method: 'POST',
      body: JSON.stringify({ ...action.payload, returnSecureToken: true }),
    });
    const jsonResponse = (await response.json()) as TAuthResponse;

    if (!response.ok) {
      const error = new Error('Authen failed!');
      throw error;
    }

    const expireTime = +jsonResponse.expiresIn * 1000 + new Date().getTime();
    addAuthenStorage(jsonResponse.idToken, jsonResponse.localId, expireTime.toString());

    timer = setTimeout(() => {
      context.dispatch('signout');
    }, +jsonResponse.expiresIn * 1000);

    const setUserAction: Parameters<typeof authMutations.setUser>[1] = {
      payload: {
        token: jsonResponse.idToken,
        userId: jsonResponse.localId,
      },
    };

    context.commit('setUser', setUserAction);
    const event = new Event('authenSuccess');
    window.dispatchEvent(event);
  },
  signout(context: TAuthActionContext) {
    const setUserAction: Parameters<typeof authMutations.setUser>[1] = {
      payload: {
        token: '',
        userId: '',
      },
    };
    removeAuthenStorage();
    clearTimeout(timer);
    context.commit('setUser', setUserAction);
    const event = new Event('removeAuthenSuccess');
    window.dispatchEvent(event);
  },
  autoSignin(context: TAuthActionContext) {
    const { token, userId, expireTime } = getAuthenStorage();
    if (!token || !userId || !expireTime) return;
    const remainTime = +expireTime - new Date().getTime();
    if (remainTime < 0) return;
    timer = setTimeout(() => {
      context.dispatch('signout');
    }, remainTime);
    const setUserAction: Parameters<typeof authMutations.setUser>[1] = {
      payload: {
        token,
        userId,
      },
    };
    context.commit('setUser', setUserAction);
    const event = new Event('authenSuccess');
    window.dispatchEvent(event);
  },
};
