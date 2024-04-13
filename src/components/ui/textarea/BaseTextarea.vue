<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAttrs } from 'vue';

const attrs = useAttrs();
defineProps<{
  isError?: boolean;
}>();

const emits = defineEmits<{
  'update:value': [value: string];
}>();

const onChange = (e: Event) => {
  const { value } = e.target as HTMLTextAreaElement;
  emits('update:value', value);
};
</script>

<template>
  <textarea
    v-bind="attrs"
    :class="
      cn(
        'BaseTextarea',
        'flex min-h-20 w-full  border border-input bg-background px-3 py-2 text-caption ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        { 'border-destructive focus-visible:ring-destructive': isError },
        attrs.class as string,
      )
    "
    @input="onChange"
  />
</template>
