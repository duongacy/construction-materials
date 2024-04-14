<!-- <template>
  <div :class="cn('shadow-sm', $props.class)">
    <TheContainer class="flex gap-4 py-4 items-center">
      <NavigationMobileMenu class="lg:hidden" />
      <NavigationPCMenu class="hidden lg:flex flex-auto" />
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { cn } from '@/lib/utils';
import NavigationMobileMenu from './NavigationMobileMenu.vue';
import NavigationPCMenu from './NavigationPCMenu.vue';

defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
</script> -->
<template>
  <header class="bg-background">
    <TheContainer class="flex items-center justify-between p-6" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <NavigationMobileMenu1 v-if="!breakPoints" />
      <NavigationPCMenu1 v-else />
    </TheContainer>
  </header>
</template>

<script setup>
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import TheContainer from '../container/TheContainer.vue';
import NavigationMobileMenu1 from './NavigationMobileMenu1.vue';
import NavigationPCMenu1 from './NavigationPCMenu1.vue';

const breakPoints = useBreakpoints();
// watchEffect(()=>{
//   console.log(breakPoint.value);
// })

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

const mobileMenuOpen = ref(false);
</script>
