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
import TheContainer from '../container/TheContainer.vue';
import NavigationMobileMenu1 from './NavigationMobileMenu1.vue';
import NavigationPCMenu1 from './NavigationPCMenu1.vue';

const breakPoints = useBreakpoints();
</script>
