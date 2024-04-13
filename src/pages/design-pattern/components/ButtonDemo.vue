<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';

const variants = ['primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
const buttonSizes = ['icon', 'sm', 'md', 'lg'] as const;
</script>

<template>
  <ExampleSectionTemplate name="Button">
    <div class="grid gap-4 overflow-x-auto">
      <div v-for="size in buttonSizes" :key="'button' + (size || '_')" class="flex items-end gap-4">
        <div class="w-14">{{ size }}</div>
        <div class="grid gap-4">
          <div class="flex gap-4">
            <BaseButton
              v-for="variant in variants"
              :key="'button' + (variant || '_')"
              :title="'size: ' + size + ', variant: ' + variant"
              :variant="variant"
              :size="size"
              >{{ size === 'icon' ? variant?.substring(0, 3) : variant }}
            </BaseButton>
          </div>
          <div class="flex gap-4">
            <BaseButton
              v-for="variant in variants"
              :key="'_button' + (variant || '_')"
              :variant="variant"
              :size="size"
              disabled
              >{{ size === 'icon' ? variant?.substring(0, 3) : variant }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </ExampleSectionTemplate>
</template>
