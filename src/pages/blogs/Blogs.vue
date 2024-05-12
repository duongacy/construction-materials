<template>
  <div>
    <BaseInput v-model:value="categoryName"></BaseInput>
    <div class="flex gap-3">
      <RouterLink v-for="blog in blogs" :key="blog.title" :to="'/blogs/' + blog.id">
        <div class="border">
          <img :src="VITE_API_URL + blog.thumb?.url" alt="" />
          <div class="p-3">
            <p class="font-bold">{{ blog.title }}</p>
            <p>{{ blog.description }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
    <BasePagination2 :value="paginationResponse" @update-pagin="updatePaginationHandler" />
  </div>
</template>

<script setup lang="ts">
import { getBlogsQueryFn } from '@/api/requests/collection/blog';
import type { PaginationRequest } from '@/api/types/common';
import { BaseInput } from '@/components/ui/input';
import { BasePagination2 } from '@/components/ui/pagination';
import { VITE_API_URL } from '@/consts';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue';

const categoryName = ref('');

const paginationRequest = ref<PaginationRequest>({
  page: 1,
  pageSize: 1,
  withCount: true,
});

const blogByCategoryQuery = useQuery({
  queryKey: ['blogs', categoryName, paginationRequest],
  queryFn: () => getBlogsQueryFn(categoryName.value, paginationRequest.value),
});
const blogs = computed(() => blogByCategoryQuery.data.value?.data.data);
const paginationResponse = computed(() => blogByCategoryQuery.data.value?.data.meta?.pagination);

const updatePaginationHandler = (request: PaginationRequest) => {
  paginationRequest.value = request;
};
</script>
