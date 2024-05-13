<script setup lang="ts">
import { BaseButton, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const props = defineProps<ButtonProps>();
</script>

<template>
  <BaseButton v-bind="props" :class="cn('h-10 w-10 p-0', props.class)" variant="outline">
    <slot> </slot>
  </BaseButton>
</template>
