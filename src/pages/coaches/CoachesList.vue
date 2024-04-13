<template>
  <TheContainer>
    <p class="text-neutral-800 text-heading3 font-bold">Our coachs</p>
    <p class="text-neutral-500 text-heading5 font-thin mt-2">
      We’re a dynamic group of individuals who are passionate about what we do and dedicated to
      delivering the best results for our clients.
    </p>
    <div class="columns-1 md:columns-2 lg:columns-3 mt-6 space-y-6 gap-6 lg:space-y-8 lg:gap-8">
      <CoachItem
        v-for="item in coaches"
        :key="item.id"
        :item="item"
        class="overflow-hidden shadow-lg"
        @register="open = true"
      >
      </CoachItem>
    </div>

    <BaseDialog
      v-model:open="open"
      modal
      title="Lorem ipsum dolor sit amet."
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere."
      ok-text="Continue"
      cancel-text="Cancel"
      @ok="onOk"
      @cancel="onCancel"
    >
      <div class="grid gap-4">
        <BaseLabel class="grid gap-2">
          <span>Name</span>
          <BaseInput placeholder="Enter your name" />
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>Email</span>
          <BaseInput placeholder="Enter your email" />
        </BaseLabel>
      </div>
    </BaseDialog>
  </TheContainer>

  <!-- <div class="p-4">
    <div class="overflow-hidden  border border-neutral-200 py-6">
      <div class="bg-white px-4">
        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div class="ml-4 mt-4">
            <h3 class="text-body font-semibold leading-6 text-neutral-900">Coaches</h3>
            <p class="mt-1 text-caption text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <BaseButton variant="outline" to="/coaches/add">Create new coach </BaseButton>
          </div>
        </div>
      </div>
      <div class="my-4 h-[1px] bg-neutral-200"></div>
      <div class="grid gap-4 bg-white px-4 md:grid-cols-2">
        <coach-item v-for="coach in coaches" :key="coach.id" :item="coach"></coach-item>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import BaseDialog from '@/components/ui/dialog/BaseDialog.vue';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import { key } from '@/store';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CoachItem from './CoachItem.vue';

const open = ref();

const store = useStore(key);
const coaches = computed(() => {
  return store.state.COACHES.coaches;
});

const onOk = () => {
  open.value = false;
};
const onCancel = () => {
  open.value = false;
};

onMounted(async () => {
  try {
    store.dispatch('COACHES/loadAllAction');
  } catch (error: any) {
    console.log(error.message);
  }
});
const people = [
  {
    name: 'Lindsay Walton',
    country: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton 2',
    country: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton 3',
    country: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];
</script>
