<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningDownloadData?.title }}</p>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningDownloadStore } from '@/store/useLearningDownloadStore';
import { computed } from 'vue';

const learningDownload = useLearningDownloadStore();
const learningDownloadData = computed(() => learningDownload.learningDownloadPageData);
</script>
