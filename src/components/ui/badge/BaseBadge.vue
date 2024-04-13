<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Size, Variant } from '@/types/ui';

defineOptions({ inheritAttrs: false });
const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    class?: string;
  }>(),
  {
    variant: 'primary',
    size: 'sm',
    class: '',
  },
);
</script>

<template>
  <div
    :class="[
      // workaround when twMerge conflict text-size with text-color
      cn({
        'text-[14px]': size === 'sm',
        'text-[16px]': size === 'md',
        'text-[18px]': size === 'lg',
      }),
      cn(
        'inline-flex items-center border font-semibold transition-colors whitespace-nowrap',
        {
          'px-3 py-1 ': size === 'sm',
          'px-4 py-2 ': size === 'md',
          'px-6 py-3 ': size === 'lg',
        },
        {
          'border-transparent bg-primary text-primary-foreground': variant === 'primary',
          'border-transparent bg-secondary text-secondary-foreground': variant === 'secondary',
          'border-transparent bg-destructive text-destructive-foreground':
            variant === 'destructive',
          'text-foreground': variant === 'outline',
        },
        props.class,
      ),
    ]"
  >
    <slot />
  </div>
</template>
