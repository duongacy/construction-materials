<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
const variants = ['primary', 'destructive', 'outline', 'secondary'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
</script>

<template>
  <ExampleSectionTemplate name="Badge">
    <div class="grid gap-4">
      <div v-for="size in sizes" :key="'badge' + size" class="flex gap-4">
        <BaseBadge
          v-for="variant in variants"
          :key="'BaseBadge' + variant"
          class="w-fit"
          :variant="variant"
          :size="size"
          >{{ variant }}</BaseBadge
        >
      </div>
    </div>
  </ExampleSectionTemplate>
</template>
