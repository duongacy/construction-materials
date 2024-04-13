<script setup lang="ts">
import { cn } from '@/lib/utils';
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps<AlertDialogDescriptionProps & { class?: string }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <AlertDialogDescription
    v-bind="delegatedProps"
    :class="cn('text-caption text-muted-foreground', props.class)"
  >
    <slot />
  </AlertDialogDescription>
</template>
