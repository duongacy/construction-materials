<script setup lang="ts">
import { CheckboxGroup } from '@/components/ui/checkbox';
import type { CheckboxOption } from '@/components/ui/checkbox/CheckboxGroup.vue';
import { BaseLabel } from '@/components/ui/label';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { computed, ref } from 'vue';

const options: CheckboxOption[] = [
  {
    label: 'Recents',
    value: 'recents',
  },
  {
    label: 'Home',
    value: 'home',
    disabled: true,
  },
  {
    label: 'Restaurant',
    value: 'restaurant',
  },
];
const values = ref(['home']);

const options2: CheckboxOption[] = [
  {
    label: 'Use different settings for my mobile devices',
    description: 'You can manage your mobile notifications in the mobile settings page.',
    value: '',
  },
];
const values2 = ref([]);

const value2Computed = computed(() => {
  return values2.value.length === 1;
});
</script>

<template>
  <ExampleSectionTemplate name="Checkbox group">
    <div class="flex gap-4">
      <div class="grid w-[350px] gap-2">
        <BaseLabel>Select type</BaseLabel>
        <CheckboxGroup v-model:model-value="values" :options="options" class="mx-1"></CheckboxGroup>
        Selected: {{ values }}
      </div>
      <div class="grid gap-2">
        <BaseLabel>Select type(With description)</BaseLabel>
        <CheckboxGroup
          v-model:model-value="values2"
          :options="options2"
          class="mx-1"
        ></CheckboxGroup>
        Selected: {{ value2Computed }}
      </div>
    </div>
  </ExampleSectionTemplate>
</template>
