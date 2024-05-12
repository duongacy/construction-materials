<template>
  <div class="gap-1 flex justify-between">
    <div>
      <button v-if="props.value.page !== 1" @click="changePageHandler(0)">Start</button>
      <button
        v-if="(props.value.page || 0) > 2"
        @click="changePageHandler((props.value.page || 0) - 1)"
      >
        Prev
      </button>

      <button
        v-for="page in listPage"
        :key="page"
        :class="cn('border px-2 py-1', { 'text-red-600': page === props.value?.page })"
        @click="changePageHandler(page)"
      >
        {{ page }}
      </button>
      <button
        v-if="(props.value.page || 0) < (props.value.pageCount || 0) - 1"
        @click="changePageHandler((props.value.page || 1) + 1)"
      >
        Next
      </button>
      <button
        v-if="props.value.page !== props.value.pageCount"
        @click="changePageHandler(props.value?.pageCount || 1)"
      >
        End
      </button>
    </div>

    <BaseSelect
      v-model:model-value="value2"
      :options="options"
      placeholder="Select items per page"
      class="w-[350px]"
      label="Items per page"
      @change="
        (e: any) => {
          console.log(e);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import type { PaginationRequest, PaginationResponse } from '@/api/types/common';
import { cn } from '@/lib/utils';
import { computed, ref, watch } from 'vue';
import BaseSelect, { type SelectOption } from '../select/BaseSelect.vue';

const value2 = ref('1');
const options: SelectOption[] = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
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
