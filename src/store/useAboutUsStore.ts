import { aboutUsQueryFn } from '@/apis/aboutUs';
import { useQuery } from '@tanstack/vue-query';
import { defineStore } from 'pinia';

export const useAboutUsStore = defineStore('aboutUs', {
  state: () => {
    const aboutUsQuery = useQuery({
      queryKey: ['about-us'],
      queryFn: aboutUsQueryFn,
    });

    return {
      aboutUsQuery,
    };
  },
  actions: {},
});
