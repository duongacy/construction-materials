<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard } from '@/components/ui/card';
import { useToggle } from '@vueuse/core';
import { computed } from 'vue';
import TheRegister from './TheRegister.vue';
import TheSignIn from './TheSignIn.vue';

const [isLogin, toggle] = useToggle(true);

const authenTitle = computed(() =>
  isLogin.value ? 'Login with your account' : 'Create an account',
);

const authenDescription = computed(() =>
  isLogin.value
    ? 'Enter your username and password to login'
    : 'Enter your email below to create your account',
);

const separateText = computed(() =>
  isLogin.value ? `if you don't have an account` : 'if you have an account',
);

const switchButtonText = computed(() => (isLogin.value ? 'Register' : 'Login'));
</script>
<template>
  <div class="h-screen bg-black flex justify-end">
    <div
      class="h-full w-full lg:max-w-[600px] bg-white min-w-[400px] flex-[0_0_auto] flex items-center"
    >
      <BaseCard :title="authenTitle" class="flex-grow m-8" :description="authenDescription">
        <TheSignIn v-if="isLogin" />
        <TheRegister v-else />
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">{{ separateText }} </span>
          </div>
        </div>
        <BaseButton class="w-full" variant="outline" @click="toggle(!isLogin)">{{
          switchButtonText
        }}</BaseButton>
      </BaseCard>
    </div>
  </div>
</template>
