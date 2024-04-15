<template>
  <PopoverGroup class="flex gap-6 lg:gap-12 whitespace-nowrap">
    <router-link :to="aboutRoute.path" class="text-sm font-semibold leading-6 text-foreground/90">
      {{ aboutRoute.title }}
    </router-link>
    <Popover class="relative">
      <PopoverButton
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90"
      >
        S-Investment
        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border/50"
        >
          <div class="p-4">
            <div
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
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-border bg-muted/40">
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground/90 hover:bg-muted/60"
            >
              <component
                :is="item.icon"
                class="h-5 w-5 flex-none text-foreground/40"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
    <Popover class="relative">
      <PopoverButton
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90"
      >
        S-Trade promotion
        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border/50"
        >
          <div class="p-4">
            <div
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
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-border bg-muted/40">
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground/90 hover:bg-muted/60"
            >
              <component
                :is="item.icon"
                class="h-5 w-5 flex-none text-foreground/40"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
    <Popover class="relative">
      <PopoverButton
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90"
      >
        Learning Center
        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border/50"
        >
          <div class="p-4">
            <div
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
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-border bg-muted/40">
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground/90 hover:bg-muted/60"
            >
              <component
                :is="item.icon"
                class="h-5 w-5 flex-none text-foreground/40"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </PopoverGroup>
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
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];
const [isDark, toggleDarkMode] = useTheme();
</script>
