<template>
  <div
    :class="cn('px-4 w-full sm:px-6 lg:px-8', { 'mx-auto max-w-7xl': !props.fluid }, props.class)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{ class?: string; fluid?: boolean }>();
</script>
