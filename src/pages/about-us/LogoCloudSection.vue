<template>
  <div class="relative isolate -z-10 mt-32 sm:mt-48">
    <div
      class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
    >
      <svg class="h-[40rem] w-[80rem] flex-none stroke-neutral-200" aria-hidden="true">
        <defs>
          <pattern
            id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
            width="200"
            height="200"
            x="50%"
            y="50%"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(-100 0)"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="50%" class="overflow-visible fill-foreground/10">
          <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
        />
      </svg>
    </div>
    <TheContainer>
      <h2 class="text-center text-lg font-semibold leading-8 text-foreground/90">
        {{ aboutUsLogoCloudsSectionData?.data?.title }}
      </h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          v-for="(logo, index) in logos"
          :key="logo.id + logo.name"
          :class="
            cn('col-span-2 max-h-12 w-full object-contain lg:col-span-1 ', {
              ' col-span-2  sm:col-start-2': index % 3 === 0,
              ' col-span-2 col-start-2  sm:col-start-auto ': index % 4 === 0,
            })
          "
          :src="VITE_API_URL + logo?.url"
          :alt="logo.alternativeText"
          :width="logo.width"
          :height="logo.height"
        />
      </div>
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';

import { VITE_API_URL } from '@/consts';
import { cn } from '@/lib/utils';
import { axiosInstanceGet } from '@/lib/utils/axios';
import { type Image, type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

interface AboutUsLogoCloudsSectionData extends StrapiFormat {
  title: string;
  description: string;
  logos: Image[];
}

const aboutUsLogoCloudsSectionQuery = useQuery({
  queryKey: ['about-us-logo-clouds-section'],
  queryFn: () =>
    axiosInstanceGet<AboutUsLogoCloudsSectionData>('/api/about-us-logo-clouds-section'),
});

const aboutUsLogoCloudsSectionData = aboutUsLogoCloudsSectionQuery.data;
const logos = computed(() => aboutUsLogoCloudsSectionData.value?.data?.logos);
</script>
