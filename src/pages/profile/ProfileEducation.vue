<template>
  <div>
    <p class="uppercase text-heading5 font-bold text-pink-700">Educations</p>
    <div class="mt-4 flex flex-col gap-3">
      <div
        v-for="{ organization, from, major, to, id } in educations"
        :key="'Educations' + id"
        class="relative p-6 flex flex-col gap-4"
      >
        <div
          class="absolute inset-0 z-[-1] bg-neutral-300"
          style="
            clip-path: polygon(
              30px 0,
              100% 0,
              100% calc(100% - 30px),
              calc(100% - 30px) calc(100% - 5px),
              0 100%,
              0 20px
            );
          "
        >
          <div class="absolute inset-[1px] bg-white" style="clip-path: inherit"></div>
        </div>
        <div class="flex items-center gap-4">
          <img src="/src/assets/education.svg" class="h-14 object-cover" />
          <div class="text-heading6 text-foreground/80">
            <p class="flex gap-4 font-semibold">
              {{ major }}
            </p>
            <p class="font-light text-foreground/60">
              {{ profileDate(from) }} - {{ profileDate(to) }}
            </p>
          </div>
        </div>
        <span class="font-light text-heading5 text-foreground/60">{{ organization }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import { profileDate } from './profileDate';

const educations = (store.getters['PROFILE/profile'] as Profile).educations;
</script>
