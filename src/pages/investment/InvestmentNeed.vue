<template>
  <div class="bg-background">
    <TheContainer aria-labelledby="features-heading" class="py-32">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div class="max-w-3xl">
          <h2
            id="features-heading"
            class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl"
          >
            {{ investmentNeedData?.title }}
          </h2>
          <p class="mt-4 text-foreground/50">
            {{ investmentNeedData?.description }}
          </p>
        </div>

        <TabGroup as="div" class="mt-4">
          <div class="-mx-4 flex overflow-x-auto sm:mx-0">
            <div class="flex-auto border-b border-border px-4 sm:px-0">
              <TabList class="-mb-px flex space-x-10">
                <Tab v-for="tab in tabs" :key="tab.name" v-slot="{ selected }" as="template">
                  <button
                    :class="[
                      selected
                        ? 'border-primary/50 text-primary/60'
                        : 'border-transparent text-foreground/50 hover:border-border hover:text-foreground/70',
                      'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                    ]"
                  >
                    {{ tab.name }}
                  </button>
                </Tab>
              </TabList>
            </div>
          </div>

          <TabPanels as="template">
            <TabPanel v-for="tab in tabs" :key="tab.name" class="space-y-16 pt-10 lg:pt-16">
              <div
                v-for="feature in tab.features"
                :key="feature.name"
                class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div class="mt-6 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-foreground/90">{{ feature.name }}</h3>
                  <p class="mt-2 text-sm text-foreground/50">{{ feature.description }}</p>
                </div>
                <div class="lg:col-span-7">
                  <div
                    class="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-neutral-100 sm:aspect-h-2 sm:aspect-w-5"
                  >
                    <img
                      :src="feature.imageSrc"
                      :alt="feature.imageAlt"
                      class="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useInvestmentNeedStore } from '@/store/useInvestmentNeedStore';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { computed } from 'vue';

const tabs = [
  {
    name: 'Design',
    features: [
      {
        name: 'Adaptive and modular',
        description:
          'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt:
          'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Material',
    features: [
      {
        name: 'Natural wood options',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Considerations',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt:
          'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
  {
    name: 'Included',
    features: [
      {
        name: "Everything you'll need",
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
];

const investmentNeed = useInvestmentNeedStore();
const investmentNeedData = computed(() => investmentNeed.investmentNeedPageData);
</script>
