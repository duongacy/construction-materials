<template>
  <div class="bg-background py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
          {{ promotionNeedData?.title }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-foreground/60">
          {{ promotionNeedData?.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in promotionNeeds" :key="feature.title" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-foreground/90">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/60">
                <!-- <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" /> -->
                <img class="h-6 w-6" :src="VITE_API_URL + feature.icon.url" />
              </div>
              {{ feature.title }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground/60">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-primary/60"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VITE_API_URL } from '@/consts';
import { usePromotionNeedStore } from '@/store/usePromotionNeedStore';

const promotionNeed = usePromotionNeedStore();
const promotionNeedData = promotionNeed.promotionNeedPageData;
const promotionNeeds = promotionNeed.allPromotionNeeds;
</script>
