<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <h5 :class="['text-heading6', cn('font-semibold text-neutral-800 tracking-tight', props.class)]">
    <slot />
  </h5>
</template>
