<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningFinanceData?.title }}</p>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningFinanceStore } from '@/store/useLearningFinanceStore';
import { computed } from 'vue';

const learningFinance = useLearningFinanceStore();
const learningFinanceData = computed(() => learningFinance.learningFinancePageData);
</script>
