<template>
  <div class="flex">
    <button
      type="button"
      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/70"
      @click="mobileMenuOpen = true"
    >
      <span class="sr-only">Open main menu</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <Dialog as="div" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/50"
      >
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-foreground/70">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="py-6">
            <router-link
              :to="aboutRoute.path"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
              >{{ aboutRoute.title }}
            </router-link>
          </div>
          <div class="-my-6 divide-y divide-border/50">
            <div class="space-y-2 py-6">
              <Disclosure v-slot="{ open }" as="div" class="-mx-3">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                >
                  Promotion
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    as="router-link"
                    v-for="item in [...stradePromotionRoutes]"
                    :key="item.name"
                    :to="item.path"
                    class="block cursor-pointer rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                  >
                    {{ item.title }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure v-slot="{ open }" as="div" class="-mx-3">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                >
                  Investment
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...sInvestmentRoutes]"
                    :key="item.name"
                    as="router-link"
                    :to="item.path"
                    class="block cursor-pointer rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                  >
                    {{ item.title }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure v-slot="{ open }" as="div" class="-mx-3">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                >
                  Learning
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...learningCenterRoutes]"
                    :key="item.name"
                    as="router-link"
                    :to="item.path"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
                  >
                    {{ item.title }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <div class="py-6">
                <button
                  class="text-base font-semibold inline-block leading-6 text-foreground/90"
                  @click="toggleDarkMode"
                >
                  {{ isDark ? 'Light' : 'Dark' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup>
import { useTheme } from '@/hooks/useTheme';
import {
  aboutRoute,
  learningCenterRoutes,
  sInvestmentRoutes,
  stradePromotionRoutes,
} from '@/router';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ref, watch } from 'vue';

const mobileMenuOpen = ref(false);
const [isDark, toggleDarkMode] = useTheme();
watch(isDark, () => {
  mobileMenuOpen.value = false;
});
</script>
