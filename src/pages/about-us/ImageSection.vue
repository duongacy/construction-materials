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

import { aboutUsImageSectionQueryFn } from '@/apis/aboutUs';
import { VITE_API_URL } from '@/consts';
import { useQuery } from '@tanstack/vue-query';

const aboutUsImageSectionQuery = useQuery({
  queryKey: ['about-us-image-section'],
  queryFn: aboutUsImageSectionQueryFn,
});

const aboutUsImageSectionData = aboutUsImageSectionQuery.data;
</script>
