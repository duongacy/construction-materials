<template>
  <TheContainer class="mt-32 sm:mt-40">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
        {{ blogsData?.title }}
      </h2>
      <p class="mt-2 text-lg leading-8 text-foreground/60">
        {{ blogsData?.description }}
      </p>
    </div>
    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <!-- <article
        v-for="post in blogPosts"
        :key="post.id"
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img
          :src="post.imageUrl"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-900 via-neutral-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />

        <div
          class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-300"
        >
          <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img
                :src="post.author.imageUrl"
                alt=""
                class="h-6 w-6 flex-none rounded-full bg-white/10"
              />
              {{ post.author.name }}
            </div>
          </div>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
          <a :href="post.href">
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
      </article> -->
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import { useAboutUsStore } from '@/store/useAboutUsStore';

// interface Blog {
//   title: string;
//   description: string;
//   content: string;
// }

// interface AboutUsBlogsSectionData extends StrapiFormat {
//   title: string;
//   description: string;
//   blogs: Blog[];
// }

// const aboutUsBlogsSectionQuery = useQuery({
//   queryKey: ['about-us-blogs-section'],
//   queryFn: () => axiosInstanceGet<AboutUsBlogsSectionData>('/api/about-us-blogs-section'),
// });

// const aboutUsBlogsSectionData = aboutUsBlogsSectionQuery.data;
// const blogPosts = computed(() => aboutUsBlogsSectionData.value?.data?.blogs);

// const store = useAboutUsStore();
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     author: {
//       name: 'Michael Foster',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ];
const aboutUsStore = useAboutUsStore();
const blogsData = aboutUsStore.blogsSectionData;
console.log('blogsData', blogsData.value?.title);
</script>
