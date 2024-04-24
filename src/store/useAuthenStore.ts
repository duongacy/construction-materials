import { postMutationFn } from '@/apis';
import { getRoute } from '@/router';
import type { StrapiResponse } from '@/types/api';
import {
  defaultAuthenLocal,
  type RegisterPayload,
  type SignInPayload,
  type UserAuthen,
} from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export const useAuthenStore = defineStore('authen', {
  state: () => {
    const authenLocal = useLocalStorage('authenLocal', defaultAuthenLocal());
    const route = useRoute();
    const router = useRouter();
    return {
      authenLocal,
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
            authenLocal.value = response.data;
            router.replace(route.redirectedFrom || getRoute('home').path);
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
            authenLocal.value = response.data;
          }
        },
      }),

      signOut: () => {
        authenLocal.value = defaultAuthenLocal();
        if (route.meta?.requireAuth) {
          router.push(getRoute('auth').path);
        }
      },
    };
  },
  actions: {},
  getters: {
    isAuthenticated(state) {
      return !!state.authenLocal.jwt;
    },
  },
});
