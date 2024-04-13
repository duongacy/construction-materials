<template>
  <div class="flex w-fit flex-col gap-4">
    <div class="flex flex-col sm:flex-row gap-4">
      <BaseAvatar
        size="lg"
        shape="square"
        class="sm:self-end"
        :src="avatarUrl"
        fallback="avatar"
        alt="cn"
      />
      <div class="min-w-96 w-fit self-end">
        <p class="text-foreground/80 text-heading5 font-bold">{{ profile.name }}</p>
        <p class="mt-1 text-pink-700 text-body font-semibold">{{ profile.role }}</p>
        <p class="mt-2 leading-5 text-foreground/60 font-light text-caption">
          {{ profile.description }}
        </p>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap gap-4 bg-neutral-100 p-4 text-neutral-500">
      <a class="flex items-center font-light text-body gap-x-2" :href="'mailto:' + profile.mail">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <Mail class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.mail }}</span>
      </a>
      <a class="flex items-center font-light text-body gap-x-2" :href="'tel:' + profile.phone">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <Phone class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.phone }}</span>
      </a>
      <a class="flex items-center font-light text-body gap-x-2" :href="profile.github">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <GithubLogoIcon class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.github }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseAvatar } from '@/components/ui/avatar';
import { API_HOST } from '@/consts';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import { GithubLogoIcon } from '@radix-icons/vue';
import { Mail, Phone } from 'lucide-vue-next';
import { computed } from 'vue';
const profile = store.getters['PROFILE/profile'] as Profile;
const avatarUrl = computed(() => {
  return API_HOST + profile.avatar.url;
});
</script>
