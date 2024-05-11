<template>
  <div class="flex gap-3">
    <RouterLink v-for="blog in blogs" :key="blog.title" :to="'/blogs/' + blog.id">
      <div class="border">
        <img :src="VITE_API_URL + blog.thumb.url" alt="" />
        <div class="p-3">
          <p class="font-bold">{{ blog.title }}</p>
          <p>{{ blog.description }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { VITE_API_URL } from '@/consts';
import { useBlogStore } from '@/store/useBlogStore';
import { computed } from 'vue';

const learningFinance = useBlogStore();

const blogs = computed(() => learningFinance.blogs || []);
</script>

<style scoped></style>
