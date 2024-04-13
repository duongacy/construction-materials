<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  RadioGroupRoot,
  useForwardPropsEmits,
  type RadioGroupRootEmits,
  type RadioGroupRootProps,
} from 'radix-vue';
import { computed } from 'vue';
import { RadioGroupItem } from '.';
import { BaseLabel } from '../label';

export type RadioOption = { value: string; label: string; disabled?: boolean };
const props = defineProps<
  RadioGroupRootProps & {
    class?: string;
    options: RadioOption[];
    disabled?: boolean;
  }
>();
const emits = defineEmits<RadioGroupRootEmits>();

const delegateProps = computed(() => {
  const { options, ...delegate } = props;
  return delegate;
});
const forwarded = useForwardPropsEmits(delegateProps, emits);
</script>

<template>
  <RadioGroupRoot :class="cn('grid gap-2', props.class)" v-bind="forwarded">
    <BaseLabel
      v-for="option in options"
      :key="option.value"
      :class="
        cn('flex items-center gap-1', {
          'cursor-not-allowed opacity-60': option.disabled || disabled,
        })
      "
    >
      <RadioGroupItem :value="option.value" :disabled="option.disabled || disabled" />
      <span>{{ option.label }}</span>
    </BaseLabel>
  </RadioGroupRoot>
</template>
