<template>
  <div class="gap-2 flex">
    <div class="flex items-start">
      <PaginationFirst v-if="props.value.page !== 1" @click="changePageHandler(0)" />
      <PaginationPrev
        v-if="(props.value.page || 0) > 2"
        @click="changePageHandler((props.value.page || 0) - 1)"
      />
      <PageItem
        v-for="page in listPage"
        :key="page"
        :class="cn('border px-2 py-1', { 'text-red-600': page === props.value?.page })"
        @click="changePageHandler(page)"
        >{{ page }}</PageItem
      >
      <PaginationNext
        v-if="(props.value.page || 0) < (props.value.pageCount || 0) - 1"
        @click="changePageHandler((props.value.page || 1) + 1)"
      ></PaginationNext>

      <PaginationLast
        v-if="props.value.page !== props.value.pageCount"
        @click="changePageHandler(props.value?.pageCount || 1)"
      ></PaginationLast>
    </div>

    <BaseSelect
      v-model:model-value="value2"
      :options="options"
      placeholder="Select items per page"
    />
  </div>
</template>

<script setup lang="ts">
import type { PaginationRequest, PaginationResponse } from '@/api/types/common';
import { cn } from '@/lib/utils';
import { computed, ref, watch } from 'vue';
import BaseSelect, { type SelectOption } from '../select/BaseSelect.vue';
import PageItem from './PageItem.vue';
import PaginationFirst from './PaginationFirst.vue';
import PaginationLast from './PaginationLast.vue';
import PaginationNext from './PaginationNext.vue';
import PaginationPrev from './PaginationPrev.vue';

const value2 = ref('1');
const options: SelectOption[] = [
  {
    value: '1',
    label: '1 items/ page',
  },
  {
    value: '2',
    label: '2 items/ page',
  },
  {
    value: '3',
    label: '3 items/ page',
  },
];

const props = withDefaults(
  defineProps<{
    value?: PaginationResponse;
  }>(),
  {
    value: () => ({ page: 0, pageCount: 0, pageSize: 0, total: 0 }),
  },
);

const emits = defineEmits<{
  updatePagin: [value: PaginationRequest];
}>();

const paginationRequest = computed<PaginationRequest>(() => ({
  page: props.value?.page,
  pageSize: props.value?.pageSize,
}));

watch(value2, (newValue) => {
  emits('updatePagin', { ...paginationRequest.value, pageSize: Number(newValue), page: 0 });
});

const changePageHandler = (page: number) => {
  emits('updatePagin', { ...paginationRequest.value, page });
};

const listPage = computed(() =>
  Array.from({ length: props?.value?.pageCount || 0 }, (_, key) => key + 1),
);
</script>
