<template>
  <div class="flex gap-6 lg:gap-12 whitespace-nowrap">
    <RouterLink
      :to="aboutRoute.path"
      class="[&.router-link-active]:bg-muted/80 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
    >
      {{ aboutRoute.title }}
    </RouterLink>
    <PCMenuDropdown title="Promotion" :items="promotionRoutes" />
    <PCMenuDropdown title="Investment" :items="investmentRoutes" />
    <PCMenuDropdown title="Learning" :items="learningRoutes" />
  </div>
  <div class="flex lg:flex-1 lg:justify-end gap-2">
    <button class="text-sm font-semibold leading-6 text-foreground/90" @click="toggleDarkMode">
      {{ isDark ? 'Light' : 'Dark' }}
    </button>
    <RouterLink v-if="!store.isAuthenticated" to="/auth">Sign In</RouterLink>
    <button
      v-else
      class="text-sm font-semibold leading-6 text-foreground/90"
      @click="store.signOut"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
import { aboutRoute, investmentRoutes, learningRoutes, promotionRoutes } from '@/router';

import { useAuthenStore } from '@/store/useAuthenStore';
import PCMenuDropdown from './PCMenuDropdown.vue';
const [isDark, toggleDarkMode] = useTheme();
const store = useAuthenStore();
</script>
