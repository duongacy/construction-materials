<template>
  <div>
    <p v-if="!!title" class="uppercase text-pink-700 text-heading5 font-bold">{{ title }}</p>
    <div :class="cn('mt-4', $props.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({ inheritAttrs: false });
defineProps<{
  title?: string;
  class?: string;
}>();
</script>
