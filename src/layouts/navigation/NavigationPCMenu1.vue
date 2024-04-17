<template>
  <div class="flex gap-6 lg:gap-12 whitespace-nowrap">
    <router-link :to="aboutRoute.path" class="text-sm font-semibold leading-6 text-foreground/90">
      {{ aboutRoute.title }}
    </router-link>
    <DropdownMenu>
      <DropdownMenuTrigger
        as-child
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90 whitespace-nowrap"
      >
        <button>
          Promotion
          <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="absolute -translate-x-1/2 p-4 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border"
      >
        <DropdownMenuItem
          v-for="item in stradePromotionRoutes"
          :key="item.path"
          class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-muted/80"
        >
          <div
            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background/5 group-hover:bg-background"
          >
            <component
              :is="item.icon"
              class="h-6 w-6 text-foreground/60 group-hover:text-primary-600"
              aria-hidden="true"
            />
          </div>
          <div class="flex-auto">
            <router-link :to="item.path" class="block font-semibold text-foreground/90">
              {{ item.title }}
              <span class="absolute inset-0" />
            </router-link>
            <p class="mt-1 text-foreground/60">{{ item.description }}</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger
        as-child
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90 whitespace-nowrap"
      >
        <button>
          Investment
          <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="absolute -translate-x-1/2 p-4 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border"
      >
        <DropdownMenuItem
          v-for="item in sInvestmentRoutes"
          :key="item.path"
          class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-muted/80"
        >
          <div
            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background/5 group-hover:bg-background"
          >
            <component
              :is="item.icon"
              class="h-6 w-6 text-foreground/60 group-hover:text-primary-600"
              aria-hidden="true"
            />
          </div>
          <div class="flex-auto">
            <router-link :to="item.path" class="block font-semibold text-foreground/90">
              {{ item.title }}
              <span class="absolute inset-0" />
            </router-link>
            <p class="mt-1 text-foreground/60">{{ item.description }}</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger
        as-child
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90 whitespace-nowrap"
      >
        <button>
          Learning
          <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="absolute -translate-x-1/2 p-4 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border"
      >
        <DropdownMenuItem
          v-for="item in learningCenterRoutes"
          :key="item.path"
          class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-muted/80"
        >
          <div
            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background/5 group-hover:bg-background"
          >
            <component
              :is="item.icon"
              class="h-6 w-6 text-foreground/60 group-hover:text-primary-600"
              aria-hidden="true"
            />
          </div>
          <div class="flex-auto">
            <router-link :to="item.path" class="block font-semibold text-foreground/90">
              {{ item.title }}
              <span class="absolute inset-0" />
            </router-link>
            <p class="mt-1 text-foreground/60">{{ item.description }}</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <div class="flex lg:flex-1 lg:justify-end">
    <button class="text-sm font-semibold leading-6 text-foreground/90" @click="toggleDarkMode">
      {{ isDark ? 'Light' : 'Dark' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
import {
  aboutRoute,
  learningCenterRoutes,
  sInvestmentRoutes,
  stradePromotionRoutes,
} from '@/router';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ];
const [isDark, toggleDarkMode] = useTheme();
</script>
