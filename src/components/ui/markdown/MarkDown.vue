<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { computed } from 'vue';
const props = defineProps<{ content?: string }>();

const compiledMarkdown = computed(() => {
  const md = new MarkdownIt();
  return md.render(props.content || '');
});
</script>
