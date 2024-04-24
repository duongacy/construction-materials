<script setup lang="ts">
import { MainLayout } from '@/layouts';
import TheFooter from '@/layouts/TheFooter.vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TheNavigation from './layouts/navigation/TheNavigation.vue';

const route = useRoute();

const isAuthenTemplate = computed(() => route.name === 'auth');
</script>
<template>
  <router-view v-if="isAuthenTemplate"></router-view>
  <MainLayout v-else>
    <template #header>
      <TheNavigation></TheNavigation>
    </template>
    <template #content>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </template>
    <template #footer>
      <TheFooter></TheFooter>
    </template>
  </MainLayout>
  <VueQueryDevtools></VueQueryDevtools>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
