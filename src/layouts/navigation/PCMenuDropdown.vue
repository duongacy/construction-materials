<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      as-child
      class="flex has-[.router-link-active]:bg-muted/80 items-center gap-x-1 whitespace-nowrap rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground/90 hover:bg-muted/60"
    >
      <button>
        {{ title }}
        <ChevronDownIcon class="h-5 w-5 flex-none text-foreground/40" aria-hidden="true" />
        <RouterLink v-for="item in items" :key="item.path + '__'" :to="item.path" class="hidden">
          {{ item.title }}
          <span class="absolute inset-0" />
        </RouterLink>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="absolute space-y-2 -translate-x-1/2 p-4 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-border"
    >
      <DropdownMenuItem
        v-for="item in items"
        :key="item.path"
        class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 bg-background has-[.router-link-active]:bg-muted/80 hover:bg-muted/60"
      >
        <div
          class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background/5 group-hover:bg-background"
        >
          <component
            :is="item.icon"
            class="h-6 w-6 text-foreground/60 group-hover:text-primary-600"
            aria-hidden="true"
          />
        </div>
        <div class="flex-auto">
          <RouterLink :to="item.path" class="block font-semibold text-foreground/90">
            {{ item.title }}
            <span class="absolute inset-0" />
          </RouterLink>
          <p class="mt-1 text-foreground/60">{{ item.description }}</p>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type RouterLinkItem } from '@/router';
import { ChevronDownIcon } from 'lucide-vue-next';

defineOptions({ inheritAttrs: false });

defineProps<{
  title?: string;
  items: RouterLinkItem[];
}>();
</script>
