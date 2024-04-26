<template>
  <TheContainer class="mt-32 sm:mt-40">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ aboutUsValuesSectionData?.data?.title }}
      </h2>
      <p class="mt-6 text-lg leading-8 text-foreground/60">
        {{ aboutUsValuesSectionData?.data?.description }}
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div v-for="value in values" :key="value.title">
        <dt class="font-semibold text-foreground/90">{{ value.title }}</dt>
        <dd class="mt-1 text-foreground/60">{{ value.description }}</dd>
      </div>
    </dl>
  </TheContainer>
</template>

<script setup lang="ts">
import { getQueryFn } from '@/apis';
import TheContainer from '@/layouts/container/TheContainer.vue';
import type { StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

interface Value {
  title: string;
  description: string;
}

interface AboutUsValuesSectionData extends StrapiFormat {
  title: string;
  description: string;
  values: Value[];
}

const aboutUsValuesSectionQuery = useQuery({
  queryKey: ['about-us-values-section'],
  queryFn: () => getQueryFn<AboutUsValuesSectionData>('/api/about-us-values-section'),
});

const aboutUsValuesSectionData = aboutUsValuesSectionQuery.data;
const values = computed(() => aboutUsValuesSectionData.value?.data?.values);
</script>
