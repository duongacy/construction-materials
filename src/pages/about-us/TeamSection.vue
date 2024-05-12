<template>
  <TheContainer class="mt-32 sm:mt-48">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ teamData?.title }}
      </h2>
      <p class="mt-6 text-lg leading-8 text-foreground/60">
        {{ teamData?.description }}
      </p>
    </div>
    <ul
      role="list"
      class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
    >
      <li v-for="person in members" :key="person.name">
        <img
          class="mx-auto h-24 w-24 rounded-full"
          :src="VITE_API_URL + person.avatar.url"
          alt=""
        />
        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-foreground/90">
          {{ person.name }}
        </h3>
        <p class="text-sm leading-6 text-foreground/60">{{ person.role }}</p>
      </li>
    </ul>
  </TheContainer>
</template>

<script setup lang="ts">
import { VITE_API_URL } from '@/consts';
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useAboutUsStore } from '@/store/useAboutUsStore';
import { computed } from 'vue';

const aboutUsStore = useAboutUsStore();
const teamData = aboutUsStore.teamSectionData;
const members = computed(() => teamData?.value?.members || []);
</script>
