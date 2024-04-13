<template>
  <SectionTemplate title="Libraries/frameworks" class="flex flex-wrap gap-4">
    <a
      v-for="library in libraries"
      :key="library.id + 'library'"
      class="border text-body font-semibold border-neutral-300 hover:opacity-75 text-foreground/80 px-6 py-3"
      :href="library.url"
      target="_blank"
    >
      {{ library.name }}
    </a>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';
const libraries = (store.getters['PROFILE/profile'] as Profile).libraries;
</script>
