<template>
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">Our team</h2>
      <p class="mt-6 text-lg leading-8 text-foreground/60">
        Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo
        vel facere repellendus ut eos dolores similique.
      </p>
    </div>
    <ul
      role="list"
      class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
    >
      <li v-for="person in team" :key="person.name">
        <img class="mx-auto h-24 w-24 rounded-full" :src="person.imageUrl" alt="" />
        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-foreground/90">
          {{ person.name }}
        </h3>
        <p class="text-sm leading-6 text-foreground/60">{{ person.role }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
];
</script>

<style scoped></style>
