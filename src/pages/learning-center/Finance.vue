<!-- eslint-disable vue/no-v-html -->
<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">{{ learningFinanceData?.title }}</p>
    <div class="flex gap-3">
      <div v-for="blog in blogs" :key="blog.title" class="border">
        <img :src="VITE_API_URL + blog.thumb.url" alt="" />
        <div class="p-3">
          <p class="font-bold">{{ blog.title }}</p>
          <p>{{ blog.description }}</p>
        </div>
      </div>
    </div>
    <!-- <MarkDown :content="blogs?.[0]"></MarkDown> -->
  </TheContainer>
</template>

<script setup lang="ts">
import { VITE_API_URL } from '@/consts';
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useLearningFinanceStore } from '@/store/useLearningFinanceStore';
import { computed } from 'vue';

const learningFinance = useLearningFinanceStore();
const learningFinanceData = computed(() => learningFinance.learningFinancePageData);

const blogs = computed(() => learningFinance.blogs || []);
</script>
