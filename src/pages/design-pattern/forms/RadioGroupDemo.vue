<script setup lang="ts">
import { RadioGroup } from '@/components/ui/radio-group';
import type { RadioOption } from '@/components/ui/radio-group/RadioGroup.vue';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { ref } from 'vue';

const options: RadioOption[] = [
  {
    value: 'default',
    label: 'Default',
    disabled: true,
  },
  {
    value: 'comfortable',
    label: 'Comfortable',
  },
  {
    value: 'compact',
    label: 'Compact',
  },
];
const value = ref('compact');
</script>

<template>
  <ExampleSectionTemplate name="Radio Group">
    <div class="flex gap-4">
      <RadioGroup
        v-model:model-value="value"
        default-value="comfortable"
        :options="options"
        label="Select type"
        class="mx-1 flex gap-3 min-w-[350px]"
      >
      </RadioGroup>
      <RadioGroup
        v-model:model-value="value"
        disabled
        default-value="comfortable"
        :options="options"
        label="Disabled"
        class="mx-1 flex gap-3 min-w-[350px]"
      />
    </div>
  </ExampleSectionTemplate>
</template>
