<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard, CardFooter } from '@/components/ui/card';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
</script>

<template>
  <ExampleSectionTemplate name="Card">
    <div class="flex items-end gap-4 overflow-x-auto flex-wrap">
      <BaseCard
        class="w-[350px]"
        title="Card default"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      >
        <template #image>
          <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
        </template>
        <CardFooter>
          <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
          <BaseButton class="min-w-[80px]">Next</BaseButton>
        </CardFooter>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card fluid image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        image-fluid
      >
        <template #image>
          <div class="-mx-6 -mt-6">
            <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
          </div>
        </template>
        <CardFooter>
          <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
          <BaseButton class="min-w-[80px]">Next</BaseButton>
        </CardFooter>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card fluid footer and image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        image-fluid
        footer-fluid
      >
        <template #image>
          <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
        </template>
        <CardFooter class="flex gap-4 bg-neutral-100 -mb-6 -mx-6 py-3 px-6 justify-end">
          <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
          <BaseButton class="min-w-[80px]">Next</BaseButton>
        </CardFooter>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card without image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      >
        <p>Content</p>
        <CardFooter>
          <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
          <BaseButton class="min-w-[80px]">Next</BaseButton>
        </CardFooter>
      </BaseCard>
    </div>
  </ExampleSectionTemplate>
</template>
