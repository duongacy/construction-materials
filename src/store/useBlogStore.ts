import { getAllBlogsQueryFn } from '@/api/requests/collection/blog';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useBlogStore = defineStore('learningFinance', {
  state: () => ({
    allBlogsPageQuery: useQuery({
      queryKey: ['all-blogs'],
      queryFn: getAllBlogsQueryFn,
    }),
  }),
  getters: {
    blogs: (state) => computed(() => state.allBlogsPageQuery.data?.data.data),
  },
  actions: {},
});
