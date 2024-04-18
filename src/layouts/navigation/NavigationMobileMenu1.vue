<template>
  <div class="flex">
    <button
      type="button"
      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/70"
      @click="toggleMobileMenuOpen"
    >
      <span class="sr-only">Open main menu</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <Dialog as="div" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/50"
      >
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-foreground/70"
            @click="toggleMobileMenuOpen"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="py-6">
            <RouterLink
              :to="aboutRoute.path"
              class="-mx-3 block [&.router-link-active]:bg-muted/80 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
              @click="toggleMobileMenuOpen"
              >{{ aboutRoute.title }}
            </RouterLink>
          </div>
          <div class="-my-6 divide-y divide-border/50">
            <div class="space-y-2 py-6">
              <MobileMenuDropdown
                :items="promotionRoutes"
                title="Promotion"
                @change-link="toggleMobileMenuOpen"
              />
              <MobileMenuDropdown
                :items="investmentRoutes"
                title="Investment"
                @change-link="toggleMobileMenuOpen"
              />
              <MobileMenuDropdown
                :items="learningRoutes"
                title="Learning"
                @change-link="toggleMobileMenuOpen"
              />
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
import { useToggle } from '@/hooks/useToggle';
import { aboutRoute, investmentRoutes, learningRoutes, promotionRoutes } from '@/router';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import MobileMenuDropdown from './MobileMenuDropdown.vue';

const [mobileMenuOpen, toggleMobileMenuOpen] = useToggle(false);

const [isDark, toggleDarkMode] = useTheme();
// watch(isDark, () => {
//   mobileMenuOpen.value = false;
// });
</script>
