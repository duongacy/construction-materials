<template>
  <SectionTemplate title="Techstack 2024" class="flex flex-wrap gap-4">
    <p
      v-for="tech in techstack"
      :key="tech"
      class="border-[2px] whitespace-nowrap text-heading6 font-bold border-neutral-300 text-foreground/80 px-6 py-4 hover:border-pink-300 hover:text-pink-700"
    >
      {{ tech }}
    </p>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';

const techstack = (store.getters['PROFILE/profile'] as Profile)?.techstack || [];
</script>
