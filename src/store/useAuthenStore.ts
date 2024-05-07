import {
  defaultAuthenLocal,
  type RegisterPayload,
  type SignInPayload,
  type User,
  type UserAuthen,
} from '@/api/types/collection/User';
import type { StrapiFormat } from '@/api/types/common';
import { useToast } from '@/components/ui/toast';
import { VITE_TOKEN_TIMEOUT } from '@/consts';
import { useLocalStorageMOD } from '@/hooks/useLocalStorageMOD';
import { axiosInstanceGet, axiosInstancePost } from '@/lib/utils/axios';
import { getRoute } from '@/router';
import { useMutation } from '@tanstack/vue-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export const useAuthenStore = defineStore('authen', {
  state: () => {
    const authenLocal = useLocalStorageMOD('userAuthen', defaultAuthenLocal());
    const route = useRoute();
    const router = useRouter();
    const { toast } = useToast();
    return {
      authenLocal,
      signInMutation: useMutation<AxiosResponse<UserAuthen>, Error, SignInPayload>({
        mutationKey: ['signin'],
        mutationFn: (payload) =>
          axiosInstancePost('/api/auth/local', payload, { preventPopulateDeep: true }),
        async onSuccess(response) {
          if (response?.data) {
            const now = new Date();
            response.data.expiresIn = now.getTime() + VITE_TOKEN_TIMEOUT;
            authenLocal.value = response.data;
            //Workaround to get user role
            axiosInstanceGet<unknown, AxiosResponse<User & StrapiFormat>>(
              '/api/users/me?populate=*',
              { withCredentials: true, preventPopulateDeep: true },
            ).then((rs) => {
              authenLocal.value.user = rs.data;
            });

            toast({
              title: 'Success',
              description: 'Login success',
              duration: 2000,
            });

            router.replace(route.redirectedFrom || getRoute('home').path);
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
        mutationFn: (payload) =>
          axiosInstancePost('/api/auth/local/register', payload, { preventPopulateDeep: true }),
        onSuccess(response) {
          if (response?.data) {
            authenLocal.value = response.data;

            toast({
              title: 'Success',
              description: 'Register success',
              duration: 2000,
            });

            router.replace(route.redirectedFrom || getRoute('home').path);
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
