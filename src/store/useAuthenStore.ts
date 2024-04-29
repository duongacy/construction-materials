import { useToast } from '@/components/ui/toast';
import { useLocalStorageMOD } from '@/hooks/useLocalStorageMOD';
import { axiosInstancePost } from '@/lib/utils/axios';
import { getRoute } from '@/router';
import {
  defaultAuthenLocal,
  type RegisterPayload,
  type SignInPayload,
  type UserAuthen,
} from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';
import type { AxiosError, AxiosResponse } from 'axios';
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
      signInMutation: useMutation<AxiosResponse<UserAuthen>, AxiosError, SignInPayload, unknown>({
        mutationKey: ['signin'],
        mutationFn: (payload) => axiosInstancePost('/api/auth/local', payload),
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
          }
        },
        onError(error) {
          toast({
            title: 'Error',
            description: error.message || 'Something went wrong!',
            variant: 'destructive',
            duration: 5000,
          });
        },
      }),

      registerMutation: useMutation<
        AxiosResponse<UserAuthen> | null,
        AxiosError,
        RegisterPayload,
        unknown
      >({
        mutationKey: ['register'],
        mutationFn: (payload) => axiosInstancePost('/api/auth/local/register', payload),
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
          }
        },
        onError(error) {
          toast({
            title: 'Error',
            description: error.message || 'Something went wrong!',
            variant: 'destructive',
            duration: 5000,
          });
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
