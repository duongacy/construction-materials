<template>
  <TheContainer class="mt-32 sm:mt-40">
    <img
      :src="VITE_API_URL + aboutUsImageSectionData?.data?.image.url"
      alt=""
      class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
    />
  </TheContainer>
</template>
<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';

import { VITE_API_URL } from '@/consts';
import { axiosInstanceGet } from '@/lib/utils/axios';
import { type Image, type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';

interface AboutUsImageSectionData extends StrapiFormat {
  title: string;
  description: string;
  image: Image;
}

const aboutUsImageSectionQuery = useQuery({
  queryKey: ['about-us-image-section'],
  queryFn: () => axiosInstanceGet<AboutUsImageSectionData>('/api/about-us-image-section'),
});

const aboutUsImageSectionData = aboutUsImageSectionQuery.data;
</script>
