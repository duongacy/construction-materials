<template>
  <img
    :class="cn('h-8 w-auto', $props.class)"
    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    alt=""
  />
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{
  class?: string;
}>();
</script>
