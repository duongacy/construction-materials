<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'block cursor-pointer select-none bg-neutral-200 px-6 py-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-300',
        props.class,
      )
    "
  >
    <span class="font-mono text-heading5 font-black">
      <slot></slot>
    </span>
  </div>
</template>
