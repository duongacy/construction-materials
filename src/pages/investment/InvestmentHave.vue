<template>
  <div class="bg-background">
    <div aria-hidden="true" class="relative">
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
        alt=""
        class="h-96 w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-background" />
    </div>

    <TheContainer class="relative -mt-12 pb-16 sm:pb-24">
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
          {{ investmentHaveData?.title }}
        </h2>
        <p class="mt-4 text-foreground/50">
          {{ investmentHaveData?.description }}
        </p>
      </div>

      <dl
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="investment in investmentHaves"
          :key="investment.title"
          class="border-t border-border pt-4"
        >
          <dt class="font-medium text-foreground/90">{{ investment.title }}</dt>
          <dd class="mt-2 text-sm text-foreground/50">{{ investment.description }}</dd>
        </div>
      </dl>
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useInvestmentHaveStore } from '@/store/useInvestmentHaveStore';

const investmentHave = useInvestmentHaveStore();
const investmentHaveData = investmentHave.investmentHavePageData;

const investmentHaves = investmentHave.allInvestmentHaves;
</script>
