<template>
  <div>
    <MarkDown :content="blogDetailData?.content" />
  </div>
</template>

<script setup lang="ts">
import { getBlogByIdQueryFn } from '@/api/requests/collection/blog';
import { MarkDown } from '@/components/ui/markdown';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

const props = defineProps<{
  blogId: string;
}>();

const blogDetailQuery = useQuery({
  queryKey: ['blog', props.blogId],
  queryFn: () => getBlogByIdQueryFn(props.blogId),
});

const blogDetailData = computed(() => blogDetailQuery.data.value?.data);
</script>
