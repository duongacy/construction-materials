import { postMutationFn } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { StrapiResponse } from '@/types/api';
import {
  defaultAuthenLocal,
  type RegisterPayload,
  type SignInPayload,
  type UserAuthen,
} from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAuthenStore = defineStore('authen', {
  state: () => {
    const authenLocal = useLocalStorage<UserAuthen>('authenLocal', defaultAuthenLocal());
    return {
      signInMutation: useMutation<
        StrapiResponse<UserAuthen> | null,
        unknown,
        SignInPayload,
        unknown
      >({
        mutationKey: ['signin'],
        mutationFn: (payload) => postMutationFn('/api/auth/local', payload),
        onSuccess(response) {
          if (response?.data) {
            authenLocal.setData(response.data);
          }
        },
      }),

      registerMutation: useMutation<
        StrapiResponse<UserAuthen> | null,
        unknown,
        RegisterPayload,
        unknown
      >({
        mutationKey: ['register'],
        mutationFn: (payload) => postMutationFn('/api/auth/local/register', payload),
        onSuccess(response) {
          if (response?.data) {
            authenLocal.setData(response.data);
          }
        },
      }),

      authenLocal,
    };
  },
  actions: {
    logout: () => {
      const authenLocal = useLocalStorage<UserAuthen>('authenLocal', defaultAuthenLocal());
      authenLocal.removeData();
    },
  },
});
