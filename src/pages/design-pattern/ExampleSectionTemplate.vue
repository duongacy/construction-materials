<template>
  <div :id="id" class="grid gap-4 border p-4">
    <p class="text-heading5 font-bold">{{ name }}</p>
    <BaseSeparator />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import BaseSeparator from '@/components/ui/separator/BaseSeparator.vue';

defineProps<{ name: string; id?: string }>();
</script>
