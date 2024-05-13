<template>
  <div class="bg-background">
    <TheContainer class="py-32">
      <div class="max-w-3xl">
        <h2
          id="features-heading"
          class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl"
        >
          {{ blogDetailData?.title }}
        </h2>
        <p class="mt-4 text-foreground/50">
          {{ blogDetailData?.description }}
        </p>
      </div>
      <MarkDown :content="blogDetailData?.content" class="mt-10" />
    </TheContainer>
  </div>
</template>

<script setup lang="ts">
import { getBlogByIdQueryFn } from '@/api/requests/collection/blog';
import { MarkDown } from '@/components/ui/markdown';
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

const props = defineProps<{
  blogId: string;
}>();

const blogDetailQuery = useQuery({
  queryKey: ['blog', props.blogId],
  queryFn: () => getBlogByIdQueryFn(props.blogId),
});

const blogDetailData = computed(() => blogDetailQuery.data.value?.data.data);
</script>
