<template>
  <SectionTemplate title="Projects" class="flex flex-col gap-4">
    <div
      v-for="{ name, from, description, responsibilities, to, libraries, company } in projects"
      :key="name + from + to"
      class="bg-neutral-100 p-6"
    >
      <p class="font-semibold text-heading5 text-foreground/80">
        {{ name }}
      </p>
      <div class="font-thin text-body mt-1 leading-5 text-foreground/60 flex gap-2">
        <span>{{ profileDate(from) }} - {{ profileDate(to) }}</span>
        <BaseSeparator orientation="vertical" class="h-4" />
        <span>
          {{ company.name }}
        </span>
      </div>
      <div class="mt-3 text-heading6">
        <p class="text-foreground/80 font-bold">Description:</p>
        <p class="text-foreground/60 font-light leading-7 mt-1">{{ description }}</p>
      </div>

      <p class="mt-3 font-bold text-heading6 text-foreground/80">Responsibilities:</p>
      <ul
        class="mt-2 font-extralight text-heading6 flex flex-col gap-1 leading-7 text-foreground/60"
      >
        <li
          v-for="item in responsibilities"
          :key="item"
          :class="cn({ 'list-inside list-disc': responsibilities.length > 1 })"
        >
          {{ item }}
        </li>
      </ul>
      <div class="mt-4 flex gap-2 flex-wrap">
        <BaseBadge v-for="tech in libraries" :key="tech.id" variant="destructive">{{
          tech.name
        }}</BaseBadge>
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import { BaseSeparator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';
import { profileDate } from './profileDate';
const projects = (store.getters['PROFILE/profile'] as Profile).projects;
</script>
