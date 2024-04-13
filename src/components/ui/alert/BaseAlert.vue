<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Component } from 'vue';

const props = withDefaults(
  defineProps<{
    class?: string;
    variant?: 'default' | 'destructive';
    icon?: Component;
    title?: string;
  }>(),
  { class: '', variant: 'default', title: '', icon: undefined },
);
</script>

<template>
  <div
    :class="
      cn(
        'relative flex gap-2 border p-4',
        {
          'bg-background/20 text-foreground/80': variant === 'default',
          'border-destructive/50 text-destructive dark:border-destructive':
            variant === 'destructive',
        },
        props.class,
      )
    "
    role="alert"
  >
    <div v-if="!!icon" class="grid h-6 w-6 shrink-0 place-content-center text-inherit">
      <component :is="icon" :class="cn('h-4 w-4 text-inherit')" />
    </div>
    <div class="grid gap-2">
      <h5 v-if="!!title" class="text-heading6 font-semibold leading-none tracking-tight">
        {{ title }}
      </h5>
      <div class="text-caption">
        <slot />
      </div>
    </div>
  </div>
</template>
