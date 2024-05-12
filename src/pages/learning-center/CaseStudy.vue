<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningCaseStudyData?.title }}</p>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningCaseStudyStore } from '@/store/useLearningCaseStudyStore';

const learningCaseStudy = useLearningCaseStudyStore();
const learningCaseStudyData = learningCaseStudy.learningCaseStudyPageData;
</script>
