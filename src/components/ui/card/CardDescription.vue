<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <p :class="['text-caption', cn('text-muted-foreground font-light leading-5', props.class)]">
    <slot />
  </p>
</template>
