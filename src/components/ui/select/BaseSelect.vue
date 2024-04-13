<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { SelectRootEmits, SelectRootProps } from 'radix-vue';
import { SelectRoot, useForwardPropsEmits } from 'radix-vue';
import { computed } from 'vue';
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '.';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const props = defineProps<
  SelectRootProps & {
    options: SelectOption[];
    placeholder?: string;
    class?: string;
    id?: string;
    label?: string;
  }
>();
const emits = defineEmits<SelectRootEmits>();

const delegateProps = computed(() => {
  const { options, placeholder, class: _, ...delegate } = props;
  return delegate;
});
const forwarded = useForwardPropsEmits(delegateProps, emits);
</script>

<template>
  <div :class="cn('', props.class)">
    <SelectRoot v-bind="forwarded">
      <SelectTrigger :id="id">
        <SelectValue :placeholder="placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel v-if="!!label">{{ label }}</SelectLabel>
          <SelectItem
            v-for="option in options"
            :key="'select-option' + option.value"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  </div>
</template>
