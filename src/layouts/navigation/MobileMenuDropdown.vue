<template>
  <Disclosure v-slot="{ open }" as="div" class="-mx-3 group">
    <DisclosureButton
      class="flex w-full items-center justify-between group-has-[.router-link-active]:bg-muted/80 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
    >
      {{ title }}
      <ChevronDownIcon
        :class="cn('h-5 w-5 flex-none duration-200', { 'rotate-180': open })"
        aria-hidden="true"
      />
    </DisclosureButton>
    <div v-show="open" class="mt-2 space-y-2 pl-6">
      <RouterLink
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        class="block cursor-pointer py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground/80 hover:text-foreground/60 [&.router-link-active]:underline"
        @click="handleChangeLink"
      >
        {{ item.title }}
      </RouterLink>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type RouterLinkItem } from '@/router';
import { Disclosure, DisclosureButton } from '@headlessui/vue';
import { ChevronDownIcon } from 'lucide-vue-next';

defineOptions({ inheritAttrs: false });

defineProps<{
  title?: string;
  items: RouterLinkItem[];
}>();

const emits = defineEmits<{
  'change-link': [];
}>();

const handleChangeLink = () => {
  setTimeout(() => {
    emits('change-link');
  }, 200);
};
</script>
