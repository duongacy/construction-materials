<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :class="
      cn(
        '[&_h1]:text-[2.25rem] [&_h2]:text-[1.875rem] [&_h3]:text-[1.5rem] [&_h4]:text-[1.25rem] [&_h5]:text-[1.125rem] [&_h6]:text-[1rem]',
        props.class,
      )
    "
    v-html="compiledMarkdown"
  ></div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import MarkdownIt from 'markdown-it';
import { computed } from 'vue';
const props = defineProps<{ content?: string; class?: string }>();

const compiledMarkdown = computed(() => {
  const md = new MarkdownIt();
  return md.render(props.content || '');
});
</script>
