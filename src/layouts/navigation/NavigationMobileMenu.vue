<template>
  <div :class="cn('', $props.class)">
    <BaseDialog>
      <DialogTrigger as-child>
        <button
          class="w-10 h-10 grid place-content-center bg-neutral-100 ml-auto text-neutral-500 hover:bg-neutral-50 active:bg-neutral-200"
        >
          <HamburgerMenuIcon />
        </button>
      </DialogTrigger>
      <Transition name="overlay">
        <DialogOverlay class="fixed inset-0 z-50 bg-black/70" />
      </Transition>
      <Transition name="fade">
        <DialogContent
          aria-describedby="_"
          class="fixed left-0 top-0 bottom-0 z-50 max-w-[350px] w-full border bg-white rounded-tr-md overflow-hidden"
        >
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <TheContainer class="flex items-center gap-4 border-b py-4">
            <DialogTrigger as-child>
              <button
                type="button"
                class="w-10 h-10 grid place-content-center bg-neutral-100 ml-auto text-neutral-500 hover:bg-neutral-50 active:bg-neutral-200"
              >
                <X class="w-4 h-4" />
              </button>
            </DialogTrigger>
          </TheContainer>
          <div class="mt-6 flow-root">
            <!-- Add menu here -->
          </div>
        </DialogContent>
      </Transition>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import { BaseDialog } from '@/components/ui/dialog';
import TheContainer from '@/layouts/container/TheContainer.vue';
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-icons/vue';
import { X } from 'lucide-vue-next';
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';
import { Transition } from 'vue';

defineProps<{
  class?: string;
}>();
</script>

<style scoped>
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-active,
.fade-leave-active {
  left: 0;
}

.fade-enter-from,
.fade-leave-to {
  left: -100%;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 1;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
