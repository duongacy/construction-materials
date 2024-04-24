<template>
  <div v-if="show" :class="cn('grid min-h-screen grid-rows-[auto_1fr_auto]', $props.class)">
    <div class="sticky top-0 z-40 w-full bg-white">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { onMounted, onUnmounted, ref } from 'vue';

const show = ref(false);
let timeoutId: any = null;
onMounted(() => {
  timeoutId = setTimeout(() => {
    show.value = true;
  }, 200);
});

onUnmounted(() => {
  clearTimeout(timeoutId);
});

defineProps<{
  class?: string;
}>();
</script>
