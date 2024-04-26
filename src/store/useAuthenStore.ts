import { postMutationFn } from '@/apis';
import { useToast } from '@/components/ui/toast';
import { useLocalStorageMOD } from '@/hooks/useLocalStorageMOD';
import { getRoute } from '@/router';
import type { StrapiResponse } from '@/types/api';
import {
  defaultAuthenLocal,
  type RegisterPayload,
  type SignInPayload,
  type UserAuthen,
} from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export const useAuthenStore = defineStore('authen', {
  state: () => {
    const authenLocal = useLocalStorageMOD('authenLocal', defaultAuthenLocal());
    const route = useRoute();
    const router = useRouter();
    const { toast } = useToast();
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

            toast({
              title: 'Success',
              description: 'Login success',
              duration: 2000,
            });

            const timeoutId = setTimeout(() => {
              router.replace(route.redirectedFrom || getRoute('home').path);
              clearTimeout(timeoutId);
            }, 2000);
          } else if (response?.error) {
            toast({
              title: 'Error',
              description: response.error?.message || 'Something went wrong!',
              variant: 'destructive',
              duration: 5000,
            });
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

            toast({
              title: 'Success',
              description: 'Register success',
              duration: 2000,
            });

            const timeoutId = setTimeout(() => {
              router.replace(route.redirectedFrom || getRoute('home').path);
              clearTimeout(timeoutId);
            }, 2000);
          } else if (response?.error) {
            toast({
              title: 'Error',
              description: response.error?.message || 'Something went wrong!',
              variant: 'destructive',
              duration: 5000,
            });
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
