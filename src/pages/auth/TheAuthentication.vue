<template>
  <div>
    <TheSignin />
    <TheRegister />
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultAuthenResponse, type AuthenResponse } from '@/types/api/user';
import TheRegister from './TheRegister.vue';
import TheSignin from './TheSignin.vue';

const authenLocal = useLocalStorage<AuthenResponse>('authenLocal', defaultAuthenResponse());

const logout = () => {
  authenLocal.removeData();
};
</script>
