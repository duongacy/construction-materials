<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="gap-2 flex">
    <div class="flex items-start">
      <PaginationFirst v-if="props.paginationResponse.page !== 1" @click="goFirst" />
      <PaginationPrev v-if="(props.paginationResponse.page || 0) > 2" @click="goPrevious" />
      <PageItem
        v-for="page in listPage"
        :key="page"
        :class="cn('border px-2 py-1', { 'text-red-600': page === props.paginationResponse?.page })"
        @click="goTo(page)"
        >{{ page }}</PageItem
      >
      <PaginationNext
        v-if="(props.paginationResponse.page || 0) < (props.paginationResponse.pageCount || 0) - 1"
        @click="goNext"
      ></PaginationNext>

      <PaginationLast
        v-if="props.paginationResponse.page !== props.paginationResponse.pageCount"
        @click="goLast"
      ></PaginationLast>
    </div>

    <BaseSelect
      v-model:model-value="paginationRequest.pageSize"
      :options="options"
      placeholder="Select items per page"
    />
  </div>
</template>

<script setup lang="ts">
import type { PaginationRequest, PaginationResponse } from '@/api/types/common';
import { cn } from '@/lib/utils';
import { computed, reactive, watch, watchEffect } from 'vue';
import { PAGINATION_REQUEST_DEFAULT } from '.';
import BaseSelect, { type SelectOption } from '../select/BaseSelect.vue';
import PageItem from './PageItem.vue';
import PaginationFirst from './PaginationFirst.vue';
import PaginationLast from './PaginationLast.vue';
import PaginationNext from './PaginationNext.vue';
import PaginationPrev from './PaginationPrev.vue';

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
    paginationResponse?: PaginationResponse;
  }>(),
  {
    paginationResponse: () => ({ page: 0, pageCount: 0, pageSize: 0, total: 0 }),
  },
);

const emits = defineEmits<{
  request: [value: PaginationRequest];
}>();

const listPage = computed(() =>
  Array.from({ length: props?.paginationResponse?.pageCount || 0 }, (_, key) => key + 1),
);

//paginationRequest
const paginationRequest = reactive<PaginationRequest>(PAGINATION_REQUEST_DEFAULT);

watchEffect(() => {
  emits('request', paginationRequest);
});

const pageSize = computed(() => paginationRequest.pageSize);

const goFirst = () => {
  paginationRequest.page = 1;
};

const goPrevious = () => {
  paginationRequest.page! -= 1;
};

const goNext = () => {
  paginationRequest.page! += 1;
};

const goLast = () => {
  paginationRequest.page! += 1;
};

const goTo = (page: number) => {
  paginationRequest.page = page;
};

watch(pageSize, () => {
  goFirst();
});

defineExpose({ paginationRequest });
</script>
