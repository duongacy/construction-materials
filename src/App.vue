<script setup lang="ts">
import { MainLayout } from '@/layouts';
import TheFooter from '@/layouts/TheFooter.vue';
import { store } from '@/store';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TheNavigation from './layouts/navigation/TheNavigation.vue';
const router = useRouter();
const route = useRoute();

const isAuthenTemplate = computed(() => route.name === 'authen');
const isProfileTemplate = computed(() => route.name === 'profile');

const authenSuccessEventHandler = () => {
  if (route.redirectedFrom) {
    router.replace(route.redirectedFrom);
  } else {
    router.replace('/coaches');
  }
};

const removeAuthenSuccessEventHandler = () => {
  if (route.meta.requireAuth) {
    router.replace('/coaches');
  }
};

onMounted(() => {
  store.dispatch('PROFILE/getProfile');
  store.dispatch('AUTHEN/autoSignin');
  window.addEventListener('authenSuccess', authenSuccessEventHandler);
  window.addEventListener('removeAuthenSuccess', removeAuthenSuccessEventHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('authenSuccess', authenSuccessEventHandler);
  window.removeEventListener('removeAuthenSuccess', removeAuthenSuccessEventHandler);
});
</script>
<template>
  <MainLayout v-if="!isAuthenTemplate">
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
    <template v-if="!isProfileTemplate" #footer>
      <TheFooter></TheFooter>
    </template>
  </MainLayout>
</template>
<style>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
