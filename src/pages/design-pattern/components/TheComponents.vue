<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Components</p>
    <div class="mt-12 grid gap-4">
      <AlertDemo />
      <BadgeDemo />
      <ButtonDemo />
      <CardDemo />
      <DropdownMenuDemo />
      <DialogDemo />
      <AlertDialogDemo />
      <PaginationDemo />
      <ContextMenuDemo />
      <CollapsibleDemo />
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import AlertDemo from './AlertDemo.vue';
import AlertDialogDemo from './AlertDialogDemo.vue';
import BadgeDemo from './BadgeDemo.vue';
import ButtonDemo from './ButtonDemo.vue';
import CardDemo from './CardDemo.vue';
import CollapsibleDemo from './CollapsibleDemo.vue';
import ContextMenuDemo from './ContextMenuDemo.vue';
import DialogDemo from './DialogDemo.vue';
import DropdownMenuDemo from './DropdownMenuDemo.vue';
import PaginationDemo from './PaginationDemo.vue';
</script>
