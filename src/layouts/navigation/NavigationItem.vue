<script setup lang="ts">
import NavigationMenuLink from '@/components/ui/navigation-menu/NavigationMenuLink.vue';
import { cn } from '@/lib/utils';

defineProps<{ title?: string; href?: string }>();
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <router-link
        :to="href || ''"
        :class="
          cn(
            'block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground [&.router-link-active]:bg-neutral-100 hover:bg-neutral-50',
            $attrs.class ?? '',
          )
        "
      >
        <div class="text-sm font-medium leading-none">{{ title }}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          <slot />
        </p>
      </router-link>
    </NavigationMenuLink>
  </li>
</template>
