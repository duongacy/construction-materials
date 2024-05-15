<template>
  <!-- <div>
    <BaseInput v-model:value="categoryName"></BaseInput>
    <div class="flex gap-3">
      <RouterLink v-for="blog in blogs" :key="blog.title" :to="'/blogs/' + blog.id">
        <div class="border">
          <img :src="VITE_API_URL + blog.thumb?.url" alt="" />
          <div class="p-3">
            <p class="font-bold">{{ blog.title }}</p>
            <p>{{ blog.description }}</p>
          </div>
          {{ blog.category.name }}
        </div>
      </RouterLink>
    </div>
    <CheckboxGroup v-model:model-value="categoriesValue" :options="checkboxOptions" />
    <BasePagination :value="paginationResponse" @update-pagin="updatePaginationHandler" />
  </div> -->
  <div class="bg-background h-full">
    <TheContainer class="bg-white pt-24 sm:pt-32 h-full flex flex-col gap-8">
      <div class="flex-grow">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="post in blogs"
            :key="post.id"
            class="flex flex-col items-start justify-between rounded-2xl overflow-hidden shadow-md"
          >
            <div class="relative w-full">
              <img
                :src="VITE_API_URL + post.thumb?.url"
                alt=""
                class="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl p-4">
              <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="post.updatedAt" class="text-gray-500">{{ post.updatedAt }}</time>
                <a
                  href="/"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >{{ post.category.name }}</a
                >
              </div>
              <div class="group relative">
                <h3
                  class="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                >
                  <RouterLink v-for="blog in blogs" :key="blog.title" :to="'/blogs/' + blog.id">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </RouterLink>
                </h3>
                <p class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                  {{ post.description }}
                </p>
              </div>
              <div class="relative mt-4 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-100"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="/">
                      <span class="absolute inset-0" />
                      Michael Foster
                    </a>
                  </p>
                  <p class="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="grid gap-3 py-6">
        <div class="flex gap-3">
          <BaseLabel>Category</BaseLabel>
          <CheckboxGroup v-model:model-value="categoriesValue" :options="checkboxOptions" />
        </div>
        <BasePagination :value="paginationResponse" @update-pagin="updatePaginationHandler" />
      </div>
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import { getBlogsQueryFn } from '@/api/requests/collection/blog';
import { getAllCategorysQueryFn } from '@/api/requests/collection/category';
import type { PaginationRequest } from '@/api/types/common';
import { CheckboxGroup, type CheckboxOption } from '@/components/ui/checkbox';
import { BaseLabel } from '@/components/ui/label';
import { BasePagination } from '@/components/ui/pagination';
import { VITE_API_URL } from '@/consts';
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue';

// category
const allCategoryQuery = useQuery({
  queryKey: ['categories'],
  queryFn: getAllCategorysQueryFn,
});
const categoriesValue = ref([]);
const categories = computed(() => allCategoryQuery.data.value?.data.data ?? []);
const checkboxOptions = computed(() => {
  return categories.value?.map((item) => ({
    label: item.name,
    value: item.name,
  })) as CheckboxOption[];
});

// blogs
const paginationRequest = ref<PaginationRequest>({
  page: 1,
  pageSize: 1,
  withCount: true,
});

const blogByCategoryQuery = useQuery({
  queryKey: ['blogs', categoriesValue, paginationRequest],
  queryFn: () => getBlogsQueryFn(categoriesValue.value, paginationRequest.value),
});
const blogs = computed(() => blogByCategoryQuery.data.value?.data.data);
const paginationResponse = computed(() => blogByCategoryQuery.data.value?.data.meta?.pagination);

const updatePaginationHandler = (request: PaginationRequest) => {
  paginationRequest.value = request;
};
</script>
