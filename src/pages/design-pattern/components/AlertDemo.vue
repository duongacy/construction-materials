<script setup lang="ts">
import { BaseAlert } from '@/components/ui/alert';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { ExclamationTriangleIcon, RocketIcon } from '@radix-icons/vue';
</script>

<template>
  <ExampleSectionTemplate name="Alert">
    <div class="flex flex-wrap gap-4">
      <BaseAlert title="Default Alert!" class="w-[350px]">
        You can add components to your app using the cli.
      </BaseAlert>
      <BaseAlert :icon="RocketIcon" title="Default Alert with icon!" class="w-[350px]">
        You can add components to your app using the cli.
      </BaseAlert>
      <BaseAlert
        :icon="ExclamationTriangleIcon"
        variant="destructive"
        title="Destructive Alert with icon"
        class="w-[350px]"
      >
        You can add components to your app using the cli.
      </BaseAlert>
    </div>
  </ExampleSectionTemplate>
</template>
