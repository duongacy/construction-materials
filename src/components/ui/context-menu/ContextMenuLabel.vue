<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps<ContextMenuLabelProps & { class?: string; inset?: boolean }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn('px-2 py-1.5 text-caption font-semibold text-foreground', inset && 'pl-8', props.class)
    "
  >
    <slot />
  </ContextMenuLabel>
</template>
