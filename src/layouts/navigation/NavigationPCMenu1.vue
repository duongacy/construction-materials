<template>
  <PopoverGroup class="flex lg:gap-x-12">
    <Popover class="relative">
      <PopoverButton
        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground/90"
      >
        Product
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
              v-for="item in products"
              :key="item.name"
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
                <a :href="item.href" class="block font-semibold text-foreground/90">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
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

    <a href="#" class="text-sm font-semibold leading-6 text-foreground/90">Features</a>
    <a href="#" class="text-sm font-semibold leading-6 text-foreground/90">Marketplace</a>
    <a href="#" class="text-sm font-semibold leading-6 text-foreground/90">Company</a>
  </PopoverGroup>
  <div class="flex lg:flex-1 lg:justify-end">
    <a href="#" class="text-sm font-semibold leading-6 text-foreground/90"
      >Log in <span aria-hidden="true">&rarr;</span></a
    >
  </div>
  <button @click="toggleDarkMode">{{ isDark ? 'Light' : 'Dark' }}</button>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];
const [isDark, toggleDarkMode] = useTheme();
</script>
