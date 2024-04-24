<template>
  <div>
    <TheSignin />
    <TheRegister />
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthenStore } from '@/store/useAuthenStore';
import TheRegister from './TheRegister.vue';
import TheSignin from './TheSignIn.vue';
const { logout } = useAuthenStore();
// const authenLocal = useLocalStorage<AuthenLocal>('authenLocal', defaultAuthenLocal());
</script>
