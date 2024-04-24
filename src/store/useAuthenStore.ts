import { postMutationFn } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  defaultAuthenLocal,
  type AuthenLocal,
  type AuthenResponse,
  type RegisterPayload,
  type SignInPayload,
} from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAuthenStore = defineStore('authen', {
  state: () => {
    const authenLocal = useLocalStorage<AuthenLocal>('authenLocal', defaultAuthenLocal());
    return {
      signInMutation: useMutation<AuthenResponse | null, unknown, SignInPayload, unknown>({
        mutationKey: ['signin'],
        mutationFn: (payload) => postMutationFn('/api/auth/local', payload),
        onSuccess(response) {
          if (response?.data) {
            authenLocal.setData(response?.data);
          }
        },
      }),

      registerMutation: useMutation<AuthenResponse | null, unknown, RegisterPayload, unknown>({
        mutationKey: ['register'],
        mutationFn: (payload) => postMutationFn('/api/auth/local/register', payload),
        onSuccess(response) {
          if (response?.data) {
            authenLocal.setData(response?.data);
          }
        },
      }),

      authenLocal,
    };
  },
  actions: {
    logout: () => {
      const authenLocal = useLocalStorage<AuthenLocal>('authenLocal', defaultAuthenLocal());
      authenLocal.removeData();
    },
  },
});
