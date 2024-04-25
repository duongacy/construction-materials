<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAttrs, type Component } from 'vue';

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
defineProps<{
  // size?: Size;
  isError?: boolean;
  error?: string;
  hideError?: boolean;
  startIcon?: Component;
  endIcon?: Component;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
}>();

defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = defineModel<string>('value');
</script>

<template>
  <!-- <div
    :class="
      cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
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
  </div> -->
  <label :class="cn('px-[1px] flex flex-col', $props.class)">
    <p v-if="!!label" :class="cn('text-caption font-medium w-fit', { 'opacity-50': disabled })">
      {{ label }}
    </p>
    <div class="relative w-full">
      <div class="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2">
        <component :is="startIcon" class="size-4 text-muted-foreground" />
      </div>
      <div class="absolute w-4 h-4 right-3 top-1/2 -translate-y-1/2">
        <component :is="endIcon" class="size-4 text-muted-foreground" />
      </div>
      <input
        v-model="modelValue"
        type="text"
        :disabled="disabled"
        :class="
          cn(
            'flex h-9 my-[1px] w-full rounded-md border border-input disabled:cursor-not-allowed disabled:opacity-50 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring',
            {
              'pl-8': !!startIcon,
              'pr-8': !!endIcon,
              'border-destructive/70 focus-visible:border-destructive': !!error,
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
