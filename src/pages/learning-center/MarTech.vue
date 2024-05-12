<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningMarTechData?.title }}</p>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningMarTechStore } from '@/store/useLearningMarTechStore';
const learningMarTech = useLearningMarTechStore();
const learningMarTechData = learningMarTech.learningMarTechPageData;
</script>
