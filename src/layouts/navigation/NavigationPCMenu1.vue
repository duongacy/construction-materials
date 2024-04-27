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
    <Popover>
      <PopoverTrigger>
        <BaseAvatar src="/src/assets/avatar.jpeg" fallback="CN" alt="@radix-vue"></BaseAvatar>
      </PopoverTrigger>
      <PopoverContent class="w-56 mx-4 p-0">
        <div class="bg-muted/30 p-4">
          <div class="grid gap-1 py-3">
            <RouterLink to="/design-pattern/forms">
              <span>Form components</span>
            </RouterLink>
            <RouterLink to="/design-pattern/content">
              <span>Content components</span>
            </RouterLink>
            <RouterLink to="/design-pattern/components">
              <span>Common components</span>
            </RouterLink>
          </div>
          <div class="border-t border-border my-2"></div>
          <RouterLink v-if="!store.isAuthenticated" to="/auth">Login </RouterLink>
          <button v-else @click="store.signOut">Logout</button>
          <div class="border-t border-border my-2"></div>
          <div class="flex gap-2 flex-wrap items-end">
            <button
              class="bg-accent/80 text-accent-foreground/60 hover:bg-accent hover:text-accent-foreground rounded-md p-2"
              @click="toggleDarkMode"
            >
              <SunMoonIcon v-if="isDark" />
              <MoonIcon v-else />
            </button>
            <button
              v-for="color in listColor"
              :key="color"
              :class="
                cn(' px-2 h-10', {
                  'bg-foreground/20': color === scheme,
                })
              "
              @click="setScheme(color)"
            >
              {{ color }}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import SCHEMES from '@/constants/schemes';
import { aboutRoute, investmentRoutes, learningRoutes, promotionRoutes } from '@/router';

import { BaseAvatar } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { useAuthenStore } from '@/store/useAuthenStore';
import { MoonIcon, SunMoonIcon } from 'lucide-vue-next';
import PCMenuDropdown from './PCMenuDropdown.vue';
const store = useAuthenStore();
const { scheme, setScheme, isDark, toggleDarkMode } = useTheme();
const listColor = Object.keys(SCHEMES) as (keyof typeof SCHEMES)[];
</script>
