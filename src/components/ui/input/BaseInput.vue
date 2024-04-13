<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Size } from '@/types/ui';
import { useAttrs, type Component } from 'vue';

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
defineProps<{
  size?: Size;
  isError?: boolean;
  startIcon?: Component;
  endIcon?: Component;
  value?: string;
}>();

defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = defineModel<string>('value');
</script>

<template>
  <div
    :class="
      cn(
        'relative flex h-10 overflow-hidden  border border-input text-caption ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
        {
          'border-destructive text-destructive focus-within:ring-destructive':
            isError && !attrs.disabled,
        },
        attrs.class as string,
      )
    "
  >
    <div v-if="startIcon" class="absolute inset-y-0 start-0 grid place-content-center px-2">
      <component :is="startIcon" class="size-4 text-muted-foreground" />
    </div>
    <div v-if="endIcon" class="absolute inset-y-0 end-0 grid place-content-center px-2">
      <component :is="endIcon" class="size-4 text-muted-foreground" />
    </div>
    <input
      v-bind="attrs"
      v-model="modelValue"
      :class="
        cn('BaseInput', 'h-full w-full bg-white px-3 py-2 focus:outline-none', {
          'pl-9': startIcon,
          'pr-9': endIcon,
        })
      "
    />
  </div>
</template>
