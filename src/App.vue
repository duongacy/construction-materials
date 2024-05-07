<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';
import { MainLayout } from '@/layouts';
import TheFooter from '@/layouts/TheFooter.vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { LOGOUT_EVENT_NAME } from './consts';
import { useTheme } from './hooks/useTheme';
import TheNavigation from './layouts/navigation/TheNavigation.vue';
import { getRoute } from './router';
import { useAuthenStore } from './store/useAuthenStore';

const route = useRoute();
useTheme();
const isAuthenTemplate = computed(() => route.name === getRoute('auth').name);
const authenStore = useAuthenStore();

onMounted(() => {
  window.addEventListener(LOGOUT_EVENT_NAME, authenStore.signOut);
});

onUnmounted(() => {
  window.removeEventListener(LOGOUT_EVENT_NAME, authenStore.signOut);
});
</script>
<template>
  <router-view v-if="isAuthenTemplate"></router-view>
  <MainLayout v-else>
    <template #header>
      <TheNavigation></TheNavigation>
    </template>
    <template #content>
      <router-view> </router-view>
    </template>
    <template #footer>
      <TheFooter></TheFooter>
    </template>
  </MainLayout>
  <Toaster />
  <VueQueryDevtools></VueQueryDevtools>
</template>
