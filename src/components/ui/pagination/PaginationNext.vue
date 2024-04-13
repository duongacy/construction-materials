<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-vue-next';
import { PaginationNext, type PaginationNextProps } from 'radix-vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<PaginationNextProps & { class?: string }>(), {
  asChild: true,
  class: '',
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <BaseButton :class="cn('h-10 w-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronRight class="h-4 w-4" />
      </slot>
    </BaseButton>
  </PaginationNext>
</template>
