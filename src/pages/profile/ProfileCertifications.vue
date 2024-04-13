<template>
  <SectionTemplate title="Certifications" class="flex flex-col gap-4">
    <div
      v-for="{ organization, field, date } in certifications"
      :key="field + organization + date"
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
        <img src="/src/assets/certificate.svg" class="h-14 object-cover" />
        <div>
          <p class="flex gap-4 font-semibold text-heading6 text-foreground/80">
            {{ field }}
          </p>
          <p class="mt-1 font-light text-body text-foreground/60">{{ date }}</p>
        </div>
      </div>
      <span class="font-normal text-heading5 text-foreground/60">{{ organization }}</span>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';

const certifications = (store.getters['PROFILE/profile'] as Profile).certifications;
</script>
