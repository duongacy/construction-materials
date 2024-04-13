<template>
  <SectionTemplate title="Work Experience" class="flex flex-col gap-4">
    <div
      v-for="{ company, role, from, to, id } in workExperiences"
      :key="'workExperiences' + id"
      class="l-50 p-6 bg-neutral-100"
    >
      <div class="flex gap-4 text-foreground/80 font-semibold text-heading6">
        <span>
          {{ role }}
        </span>
        <div class="h-6 w-[1px] bg-neutral-400"></div>
        <span class="font-light">
          {{ company.name }}
        </span>
      </div>
      <p class="mt-1 font-thin text-body text-foreground/60">
        {{ profileDate(from) + ' - ' + profileDate(to) }}
      </p>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';
import { profileDate } from './profileDate';
const workExperiences = (store.getters['PROFILE/profile'] as Profile).experiences;
</script>
