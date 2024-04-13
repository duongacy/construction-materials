<script setup lang="ts">
import {
  AlertDialogRoot,
  useForwardProps,
  type AlertDialogEmits,
  type AlertDialogProps,
} from 'radix-vue';
import { computed } from 'vue';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '.';

const props = defineProps<
  AlertDialogProps & {
    title?: string;
    description?: string;
    cancelText?: string;
    okText?: string;
  }
>();

const originalProps = computed(() => {
  const { title, description, cancelText, okText, ...rest } = props;
  return rest;
});
const emits = defineEmits<
  AlertDialogEmits & {
    confirm: [value: boolean];
  }
>();

const forwardedProps = useForwardProps(originalProps);
</script>

<template>
  <AlertDialogRoot v-bind="forwardedProps" @update:open="emits('update:open', false)">
    <AlertDialogContent>
      <AlertDialogHeader v-if="!!title || !!description">
        <AlertDialogTitle v-if="!!title">{{ title }}</AlertDialogTitle>
        <AlertDialogDescription v-if="!!description">{{ description }}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter v-if="!!cancelText || !!okText">
        <AlertDialogCancel v-if="!!cancelText" @click="emits('confirm', false)">{{
          cancelText
        }}</AlertDialogCancel>
        <AlertDialogAction v-if="!!okText" @click="emits('confirm', true)">{{
          okText
        }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
    <slot />
  </AlertDialogRoot>
</template>
