<template>
  <TheContainer class="mt-32 sm:mt-40">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ aboutUsStatsSectionData?.data?.title }}
      </h2>
      <p class="mt-6 text-base leading-7 text-foreground/60">
        {{ aboutUsStatsSectionData?.data?.description }}
      </p>
    </div>
    <div
      class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
    >
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-neutral-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-neutral-900">
          {{ aboutUsStatsSectionData?.data?.stats?.[0].value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-neutral-900">
            {{ aboutUsStatsSectionData?.data?.stats?.[0].title }}
          </p>
          <p class="mt-2 text-base leading-7 text-neutral-600">
            {{ aboutUsStatsSectionData?.data?.stats?.[0].description }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-neutral-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-white">
          {{ aboutUsStatsSectionData?.data?.stats?.[1].value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-white">
            {{ aboutUsStatsSectionData?.data?.stats?.[1].title }}
          </p>
          <p class="mt-2 text-base leading-7 text-neutral-400">
            {{ aboutUsStatsSectionData?.data?.stats?.[1].description }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary/60 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-primary-foreground">
          {{ aboutUsStatsSectionData?.data?.stats?.[2].value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-primary-foreground">
            {{ aboutUsStatsSectionData?.data?.stats?.[2].title }}
          </p>
          <p class="mt-2 text-base leading-7 text-primary-foreground/80">
            {{ aboutUsStatsSectionData?.data?.stats?.[2].description }}
          </p>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { axiosInstanceGet } from '@/lib/utils/axios';
import { type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';

interface Stat {
  value: string;
  title: string;
  description: string;
}
interface AboutUsStatsSectionData extends StrapiFormat {
  title: string;
  description: string;
  stats: Stat[];
}

const aboutUsStatsSectionQuery = useQuery({
  queryKey: ['about-us-stats-section'],
  queryFn: () => axiosInstanceGet<AboutUsStatsSectionData>('/api/about-us-stats-section'),
});

const aboutUsStatsSectionData = aboutUsStatsSectionQuery.data;
</script>
