<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type Component } from 'vue';

defineOptions({ inheritAttrs: false });
defineProps<{
  isError?: boolean;
  error?: string;
  hideError?: boolean;
  startIcon?: Component;
  endIcon?: Component;
  value?: string;
  label?: string;
  class?: string;
}>();

defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = defineModel<string>('value');
</script>

<template>
  <label :class="cn('px-[1px] flex mx-1 flex-col', $props.class)">
    <p
      v-if="!!label"
      :class="cn('text-caption font-medium w-fit', { 'opacity-50': $attrs.disabled })"
    >
      {{ label }}
    </p>
    <div class="relative flex flex-col bg-background">
      <div class="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2">
        <component :is="startIcon" class="size-4 text-muted-foreground" />
      </div>
      <div class="absolute w-4 h-4 right-3 top-1/2 -translate-y-1/2">
        <component :is="endIcon" class="size-4 text-muted-foreground" />
      </div>
      <input
        v-bind="$attrs"
        v-model="modelValue"
        :class="
          cn(
            'flex h-9 my-[1px] border border-input ring-offset-background bg-background disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground',
            {
              'pl-8': !!startIcon,
              'pr-8': !!endIcon,
              'focus:ring-2 focus:ring-destructive/70 focus:ring-offset-2 border-destructive/70':
                !!error,
            },
          )
        "
      />
    </div>
    <p v-if="!!error && !hideError" :class="'text-caption font-medium w-fit text-destructive'">
      {{ error }}
    </p>
  </label>
</template>
