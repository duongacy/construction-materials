<template>
  <TheContainer class="mt-32 sm:mt-40">
    <img
      :src="VITE_API_URL + aboutUsImageSectionData?.image.url"
      alt=""
      class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
    />
  </TheContainer>
</template>
<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';

import { getQueryFn } from '@/apis';
import { VITE_API_URL } from '@/consts';
import { defaultImage, type Image, type StrapiFormat } from '@/types/api/common';
import { useQuery } from '@tanstack/vue-query';

interface AboutUsImageSectionData extends StrapiFormat {
  title: string;
  description: string;
  image: Image;
}

const aboutUsImageSectionDefaultData: AboutUsImageSectionData = {
  title: '',
  description: '',
  image: defaultImage(),
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

const aboutUsImageSectionQuery = useQuery({
  queryKey: ['about-us-image-section'],
  queryFn: () =>
    getQueryFn<AboutUsImageSectionData>(
      '/api/about-us-image-section?populate=deep',
      aboutUsImageSectionDefaultData,
    ),
});

const aboutUsImageSectionData = aboutUsImageSectionQuery.data;
</script>
