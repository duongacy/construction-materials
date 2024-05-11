import { getAllBlogsQueryFn } from '@/api/requests/collection/blog';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('learningFinance', {
  state: () => ({
    allBlogsPageQuery: useQuery({
      queryKey: ['all-blogs'],
      queryFn: getAllBlogsQueryFn,
    }),
  }),
  getters: {
    blogs: (state) => {
      return state.allBlogsPageQuery.data?.data;
    },
  },
  actions: {},
});
