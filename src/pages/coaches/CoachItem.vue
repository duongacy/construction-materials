<template>
  <!-- <BaseCard class="grid gap-4">
    <CardContent>
      <p class="font-bold">{{ fullName }}</p>
      <p>{{ item.description }}</p>
      <div class="mt-2 flex gap-2">
        <BaseBadge v-for="area in item.areas" :key="area + '-area'" variant="destructive">{{
          area
        }}</BaseBadge>
      </div>
    </CardContent>
    <CardFooter class="flex justify-end gap-4">
      <BaseButton variant="outline">
        <router-link :to="detailsLink">Details</router-link>
      </BaseButton>
      <router-link :to="requestLink">
        <BaseButton>Request</BaseButton>
      </router-link>
    </CardFooter>
  </BaseCard> -->
  <div class="overflow-hidden shadow-lg">
    <img
      class="aspect-[3/2] w-full object-cover"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
      alt=""
    />
    <div class="bg-neutral-100 p-4">
      <p class="text-gray-900 font-semibold text-heading6">
        Whitney Francis <span class="font-extralight">(Vietnam)</span>
      </p>
      <div class="flex gap-x-1 mt-1 items-center">
        <StarIcon class="stroke-yellow-700 fill-yellow-700 size-4" />
        <StarIcon class="stroke-yellow-700 fill-yellow-700 size-4" />
        <StarIcon class="stroke-yellow-700 fill-yellow-700 size-4" />
        <StarHalfIcon class="stroke-yellow-700 fill-yellow-700 size-4" />
        <p class="text-neutral-500 font-light text-caption">(12,766)</p>
      </div>
      <p class="mt-2 line-clamp-2 font-light text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium reiciendis eum
        error reprehenderit. Fugiat nemo, commodi, nam doloribus, et enim dolorum magnam magni
        nostrum a ipsam iste nobis. Suscipit.
      </p>
      <div class="flex gap-2 flex-wrap mt-4">
        <BaseBadge variant="destructive">Algorithm</BaseBadge>
        <BaseBadge variant="destructive">Web development</BaseBadge>
        <BaseBadge variant="destructive">Machine learning</BaseBadge>
      </div>

      <div class="mt-4 flex justify-end gap-4">
        <router-link :class="buttonVariants({ size: 'md', variant: 'outline' })" :to="detailsLink"
          >Details</router-link
        >
        <!-- <BaseButton size="md" variant="outline" @click="emits('detail', item.id)"
          >Details</BaseButton
        > -->
        <BaseButton size="md" @click="emits('register', item.id)">Register</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import { BaseButton, buttonVariants } from '@/components/ui/button';
import type { TCoach } from '@/types/coach';
import { StarHalfIcon, StarIcon } from 'lucide-vue-next';
import { computed } from 'vue';

const emits = defineEmits<{
  register: [id: string];
  detail: [id: string];
}>();

const detailsLink = computed(() => '/coaches/' + props.item.id);
const requestLink = computed(() => detailsLink.value + '/request');

const fullName = computed(() => props.item.firstName + ' ' + props.item.lastName);

const props = defineProps<{ item: TCoach }>();
</script>
