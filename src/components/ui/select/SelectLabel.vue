<script setup lang="ts">
import { cn } from '@/lib/utils';
import { SelectLabel, type SelectLabelProps } from 'radix-vue';

const props = defineProps<SelectLabelProps & { class?: string }>();
</script>

<template>
  <SelectLabel :class="cn('py-1.5 pl-8 pr-2 text-caption font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
