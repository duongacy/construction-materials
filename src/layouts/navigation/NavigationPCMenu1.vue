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
        <div class="grid gap-2 bg-muted/30 p-2">
          <div class="grid gap-1 py-3">
            <RouterLink
              v-if="!store.isAuthenticated"
              to="/design-pattern/forms"
              class="flex gap-2 [&.router-link-active]:underline [&.router-link-active]:text-foreground/80 px-3 text-base font-semibold leading-7 text-foreground/60 hover:text-foreground/80 items-center"
            >
              <span>Form components</span>
            </RouterLink>
            <RouterLink
              v-if="!store.isAuthenticated"
              to="/design-pattern/content"
              class="flex gap-2 [&.router-link-active]:underline [&.router-link-active]:text-foreground/80 px-3 text-base font-semibold leading-7 text-foreground/60 hover:text-foreground/80 items-center"
            >
              <span>Content components</span>
            </RouterLink>
            <RouterLink
              to="/design-pattern/components"
              class="flex gap-2 [&.router-link-active]:underline [&.router-link-active]:text-foreground/80 px-3 text-base font-semibold leading-7 text-foreground/60 hover:text-foreground/80 items-center"
            >
              <span>Common components</span>
            </RouterLink>
          </div>

          <div class="border-t border-border my-2"></div>
          <RouterLink
            v-if="!store.isAuthenticated"
            to="/auth"
            class="flex gap-2 [&.router-link-active]:bg-muted/80 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/60 hover:text-foreground/80 items-center hover:bg-muted/60"
          >
            <LogIn />
            <span>Login</span>
          </RouterLink>
          <button
            v-else
            class="flex gap-2 [&.router-link-active]:bg-muted/80 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/60 hover:text-foreground/80 items-center hover:bg-muted/60"
            @click="store.signOut"
          >
            <LogOutIcon />
            <span> Logout </span>
          </button>
          <div class="border-t border-border my-2"></div>
          <div class="flex gap-4 items-center justify-end">
            <button
              class="bg-accent/80 text-accent-foreground/60 hover:bg-accent hover:text-accent-foreground rounded-md p-2"
              @click="toggleDarkMode"
            >
              <SunMoonIcon v-if="isDark" />
              <MoonIcon v-else />
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
import { aboutRoute, investmentRoutes, learningRoutes, promotionRoutes } from '@/router';

import { BaseAvatar } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToggle } from '@/hooks/useToggle';
import { useAuthenStore } from '@/store/useAuthenStore';
import { LogIn, LogOutIcon, MoonIcon, SunMoonIcon } from 'lucide-vue-next';
import PCMenuDropdown from './PCMenuDropdown.vue';
const [isDark, toggleDarkMode] = useTheme();
const [open, toggleOpen] = useToggle(false);
const store = useAuthenStore();
</script>
