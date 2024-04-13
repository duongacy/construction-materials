<template>
  <SectionTemplate title="Community" class="mt-4 flex flex-col gap-4">
    <div
      v-for="activity in communities"
      :key="activity.id"
      class="text-heading6 p-6 bg-neutral-100"
    >
      <p class="text-foreground/80 font-semibold">
        {{ activity.name }}
      </p>
      <p class="mt-1 font-thin text-foreground/60">{{ activity.description }}</p>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';

const communities = (store.getters['PROFILE/profile'] as Profile).communities;
</script>
