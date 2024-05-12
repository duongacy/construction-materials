<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningLegalData?.title }}</p>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningLegalStore } from '@/store/useLearningLegalStore';
const learningLegal = useLearningLegalStore();
const learningLegalData = learningLegal.learningLegalPageData;
</script>
