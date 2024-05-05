<template>
  <TheContainer class="mt-32 sm:mt-40">
    <img
      :src="VITE_API_URL + imageData?.image.url"
      alt=""
      class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
    />
  </TheContainer>
</template>
<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';

import { VITE_API_URL } from '@/consts';
import { useAboutUsStore } from '@/store/useAboutUsStore';
import { computed } from 'vue';
const aboutUsStore = useAboutUsStore();
const imageData = computed(() => aboutUsStore.aboutUsPageData?.imageSection);
</script>
