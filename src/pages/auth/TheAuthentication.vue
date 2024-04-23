<template>
  <div>
    <TheSignin />
    <TheRegister />
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import type { StrapiFormat } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { watchEffect } from 'vue';
import TheRegister from './TheRegister.vue';
import TheSignin from './TheSignin.vue';

interface User extends StrapiFormat {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}
type AuthenInfo = {
  jwt: string;
  user: User;
};

const defaultAuthenInfo: AuthenInfo = {
  jwt: '',
  user: {
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    id: 0,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
};
const authenLocal = useLocalStorage<AuthenInfo>('authenLocal', defaultAuthenInfo);
watchEffect(() => {
  console.log(authenLocal.data.value);
});
const logout = () => {
  authenLocal.removeData();
};
</script>
