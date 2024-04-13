<template>
  <NavigationMenu :class="cn('', $props.class)">
    <NavigationMenuList class="gap-4">
      <router-link to="/profile" :class="navigationMenuTriggerStyle()"> About me </router-link>

      <NavigationMenuItem>
        <NavigationMenuTrigger class="has-[.router-link-active]:bg-neutral-100"
          >Design pattern
          <ListItem
            v-for="component in components"
            :key="component.title + '__'"
            :href="component.href"
            class="hidden"
          >
          </ListItem>
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <ListItem
              v-for="component in components"
              :key="component.title"
              :title="component.title"
              :href="component.href"
            >
              {{ component.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <router-link :to="getRoute('publicProjects').path" :class="navigationMenuTriggerStyle()">
        Public projects
      </router-link>
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
import { cn } from '@/lib/utils';
import { getRoute } from '@/router';
import ListItem from './NavigationItem.vue';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Content',
    href: getRoute('designPatternContent').path,
    description: 'Typography, Images, Tables, Figures,...',
  },
  {
    title: 'Forms',
    href: getRoute('designPatternForm').path,
    description: 'Select, Checkbox, Radio, Range, Input,...',
  },
  {
    title: 'Layout',
    href: getRoute('designPatternLayout').path,
    description: 'Header, Footer, Container,...',
  },
  {
    title: 'Components',
    href: getRoute('designPatternComponents').path,
    description: 'Accordion, Alerts, Badge, Breadcrumb,...',
  },
];

defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
</script>
