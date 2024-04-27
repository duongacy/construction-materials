<script setup lang="ts">
import { BaseSelect } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select/BaseSelect.vue';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { ref } from 'vue';

const options: SelectOption[] = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'grapes',
    label: 'Grapes',
    disabled: true,
  },
];
const value = ref();
</script>

<template>
  <ExampleSectionTemplate name="Select">
    <div class="flex gap-4">
      <BaseSelect
        v-model:model-value="value"
        :options="options"
        default-value="banana"
        placeholder="Select fruits"
        class="w-[350px]"
        label="Fruits"
      >
      </BaseSelect>
      <BaseSelect
        v-model:model-value="value"
        :options="options"
        placeholder="Select fruits"
        class="w-[350px]"
        label="Fruits"
        disabled
      >
      </BaseSelect>
    </div>
  </ExampleSectionTemplate>
</template>
