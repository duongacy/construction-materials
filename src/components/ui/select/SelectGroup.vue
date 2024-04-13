<script setup lang="ts">
import { cn } from '@/lib/utils';
import { SelectGroup, type SelectGroupProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps<SelectGroupProps & { class?: string }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <SelectGroup :class="cn('w-full p-1', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
