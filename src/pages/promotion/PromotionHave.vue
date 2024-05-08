<template>
  <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
    <section aria-labelledby="details-heading">
      <div class="flex flex-col items-center text-center">
        <h2
          id="details-heading"
          class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl"
        >
          {{ promotionHaveData?.title }}
        </h2>
        <p class="mt-3 max-w-3xl text-lg text-foreground/60">
          {{ promotionHaveData?.description }}
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        <div>
          <div class="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
              alt="Drawstring top with elastic loop closure and textured interior padding."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <p class="mt-8 text-base text-foreground/50">
            The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1,220 standard
            gumballs, or any combination of on-the-go treats that your heart desires. Yes, we did
            the math.
          </p>
        </div>
        <div>
          <div class="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
              alt="Front zipper pouch with included key ring."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <p class="mt-8 text-base text-foreground/50">
            Up your snack organization game with multiple compartment options. The quick-access
            stash pouch is ready for even the most unexpected snack attacks and sharing needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Policies section -->
    <section aria-labelledby="policy-heading" class="mt-16 lg:mt-24">
      <h2 id="policy-heading" class="sr-only">Our policies</h2>
      <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="policy in promotionHaves" :key="policy.title">
          <img :src="VITE_API_URL + policy.icon.url" alt="" class="h-24 w-auto" />
          <h3 class="mt-6 text-base font-medium text-foreground/90">{{ policy.title }}</h3>
          <p class="mt-3 text-base text-foreground/50">{{ policy.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { VITE_API_URL } from '@/consts';
import { usePromotionHaveStore } from '@/store/usePromotionHaveStore';
import { computed } from 'vue';

const promotionHave = usePromotionHaveStore();
const promotionHaveData = computed(() => promotionHave.promotionHavePageData);

const promotionHaves = computed(() => promotionHave.allPromotionHaves || []);
</script>
@/store/usePromotionHaveStore
