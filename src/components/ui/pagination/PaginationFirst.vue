<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronsLeft } from 'lucide-vue-next';
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<PaginationFirstProps & { class?: string }>(), {
  asChild: true,
  class: '',
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <BaseButton :class="cn('h-10 w-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronsLeft class="h-4 w-4" />
      </slot>
    </BaseButton>
  </PaginationFirst>
</template>
