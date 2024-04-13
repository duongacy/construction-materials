<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { onMounted, ref, useAttrs } from 'vue';
import { buttonVariants, type ButtonProps } from '.';

const attrs = useAttrs();
defineOptions({
  inheritAttrs: false,
});
const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
});

const divRef = ref<HTMLDivElement | null>(null);
const width = ref(0);
onMounted(() => {
  width.value = divRef.value?.getBoundingClientRect().width || 0;
  divRef.value?.addEventListener('resize', () => {
    width.value = divRef.value?.getBoundingClientRect().width || 0;
  });
});

defineExpose({ width });
</script>

<template>
  <Primitive
    v-bind="attrs"
    :as="as"
    :as-child="asChild"
    :class="['relative', buttonVariants({ size, class: props.class, variant })]"
  >
    <div ref="divRef" class="absolute inset-0 z-[-1000]"></div>
    <slot />
  </Primitive>
</template>
