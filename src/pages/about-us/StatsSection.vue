<template>
  <TheContainer class="mt-32 sm:mt-40">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ statsData?.title }}
      </h2>
      <p class="mt-6 text-base leading-7 text-foreground/60">
        {{ statsData?.description }}
      </p>
    </div>
    <div
      class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
    >
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-neutral-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-neutral-900">
          {{ stats?.[0]?.value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-neutral-900">
            {{ stats?.[0]?.title }}
          </p>
          <p class="mt-2 text-base leading-7 text-neutral-600">
            {{ stats?.[0]?.description }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-neutral-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-white">
          {{ stats?.[1]?.value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-white">
            {{ stats?.[1]?.title }}
          </p>
          <p class="mt-2 text-base leading-7 text-neutral-400">
            {{ stats?.[1]?.description }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary/60 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
      >
        <p class="flex-none text-3xl font-bold tracking-tight text-primary-foreground">
          {{ stats?.[2]?.value }}
        </p>
        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p class="text-lg font-semibold tracking-tight text-primary-foreground">
            {{ stats?.[2]?.title }}
          </p>
          <p class="mt-2 text-base leading-7 text-primary-foreground/80">
            {{ stats?.[2]?.description }}
          </p>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useAboutUsStore } from '@/store/useAboutUsStore';
import { computed } from 'vue';

const aboutUsStore = useAboutUsStore();
const statsData = aboutUsStore.statsSectionData;
const stats = computed(() => statsData?.value?.stats || []);
</script>
