<template>
  <TheContainer class="mt-32 sm:mt-40">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ valuesData?.title }}
      </h2>
      <p class="mt-6 text-lg leading-8 text-foreground/60">
        {{ valuesData?.description }}
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div v-for="value in values" :key="value.title">
        <dt class="font-semibold text-foreground/90">{{ value.title }}</dt>
        <dd class="mt-1 text-foreground/60">{{ value.description }}</dd>
      </div>
    </dl>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useAboutUsStore } from '@/store/useAboutUsStore';
import { computed } from 'vue';

const aboutUsStore = useAboutUsStore();
const valuesData = aboutUsStore.valuesSectionData;
const values = computed(() => valuesData?.value?.values || []);
</script>
