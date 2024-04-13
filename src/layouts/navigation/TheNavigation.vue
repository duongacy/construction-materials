<template>
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
</script>
