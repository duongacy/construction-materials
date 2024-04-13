<script setup lang="ts">
import { BaseDialog, DialogContent } from '@/components/ui/dialog';
import type { DialogRootEmits, DialogRootProps } from 'radix-vue';
import { useForwardPropsEmits } from 'radix-vue';
import BaseCommand from './BaseCommand.vue';

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <BaseDialog v-bind="forwarded">
    <DialogContent class="overflow-hidden p-0 shadow-lg">
      <BaseCommand
        class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
      >
        <slot />
      </BaseCommand>
    </DialogContent>
  </BaseDialog>
</template>
