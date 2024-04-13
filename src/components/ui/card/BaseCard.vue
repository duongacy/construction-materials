<script setup lang="ts">
import { cn } from '@/lib/utils';
import CardDescription from './CardDescription.vue';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';

const props = defineProps<{
  class?: string;
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'grid gap-6 overflow-hidden border bg-card p-6 text-card-foreground shadow-sm',
        props.class,
      )
    "
  >
    <slot name="image" />
    <CardHeader>
      <CardTitle v-if="!!title">{{ title }}</CardTitle>
      <CardDescription v-if="!!description">{{ description }}</CardDescription>
    </CardHeader>
    <slot />
  </div>
</template>
