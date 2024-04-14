<template>
  <NavigationMenu :class="cn('', $props.class)">
    <NavigationMenuList class="gap-4">
      <router-link :to="aboutRoute.path" :class="navigationMenuTriggerStyle()">
        {{ aboutRoute.title }}
      </router-link>

      <NavigationMenuItem>
        <NavigationMenuTrigger class="has-[.router-link-active]:bg-neutral-100"
          >S-Trade promotion
          <ListItem
            v-for="item in stradePromotionRoutes"
            :key="item.title + '__'"
            :href="item.path"
            class="hidden"
          />
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 gap-3 p-4">
            <ListItem
              v-for="item in stradePromotionRoutes"
              :key="item.title"
              :title="item.title"
              :href="item.path"
            >
              {{ item.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="has-[.router-link-active]:bg-neutral-100"
          >S-Investment
          <ListItem
            v-for="item in sInvestmentRoutes"
            :key="item.title + '__'"
            :href="item.path"
            class="hidden"
          />
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 gap-3 p-4">
            <ListItem
              v-for="item in sInvestmentRoutes"
              :key="item.title"
              :title="item.title"
              :href="item.path"
            >
              {{ item.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="has-[.router-link-active]:bg-neutral-100"
          >Learning center
          <ListItem
            v-for="item in learningCenterRoutes"
            :key="item.title + '__'"
            :href="item.path"
            class="hidden"
          />
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 gap-3 p-4">
            <ListItem
              v-for="item in learningCenterRoutes"
              :key="item.title"
              :title="item.title"
              :href="item.path"
            >
              {{ item.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <router-link :to="contactRoute.path" :class="navigationMenuTriggerStyle()">
        Contact
      </router-link>
      <button @click="toggleDarkMode">{{ isDark ? 'Light' : 'Dark' }}</button>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import {
  aboutRoute,
  contactRoute,
  learningCenterRoutes,
  sInvestmentRoutes,
  stradePromotionRoutes,
} from '@/router';
import { ref, watchEffect } from 'vue';
import ListItem from './NavigationItem.vue';
const theme = ref('');

watchEffect(() => {
  if (theme.value === '') {
    document.querySelector('html')?.classList.remove('dark');
  } else {
    document.querySelector('html')?.classList.add('dark');
  }
});
defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
const [isDark, toggleDarkMode] = useTheme();
</script>
