<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { BaseSwitch } from '@/components/ui/switch';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
</script>

<template>
  <ExampleSectionTemplate name="Switch">
    <div class="flex items-center gap-4">
      <BaseLabel class="flex items-center gap-2">
        <BaseSwitch />
        <span> Airplane Mode </span>
      </BaseLabel>
      <BaseLabel class="flex items-center gap-2">
        <BaseSwitch disabled />
        <span> Airplane Mode </span>
      </BaseLabel>
    </div>
  </ExampleSectionTemplate>
</template>
