<script setup lang="ts">
import { BaseInput } from '@/components/ui/input';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { AlbumIcon, Mail, Search } from 'lucide-vue-next';
import { ref } from 'vue';

const value = ref();
</script>

<template>
  <ExampleSectionTemplate name="Input">
    <div class="grid gap-4 overflow-auto overflow-y-hidden">
      <div class="grid gap-2">
        <p class="text-heading6 font-bold">Default</p>
        <div class="flex flex-wrap gap-4">
          <BaseInput
            v-model:value="value"
            placeholder="Text here"
            label="No Icon"
            class="w-[350px]"
          />
          <BaseInput
            v-model:value="value"
            :start-icon="Mail"
            placeholder="Text here"
            label="With left icon"
            class="w-[350px]"
          />

          <BaseInput
            v-model:value="value"
            :end-icon="Search"
            placeholder="Text here"
            label="With right icon"
            class="w-[350px]"
          />
          <BaseInput
            v-model:value="value"
            :start-icon="AlbumIcon"
            :end-icon="Search"
            placeholder="Text here"
            label="With left and right icon"
            class="w-[350px]"
          />
          <BaseInput label="Error" placeholder="Text here" class="w-[350px]" error="Has error" />
          <BaseInput
            label="Hide error text"
            hide-error
            placeholder="Text here"
            class="w-[350px]"
            error="Has error"
          />
          <BaseInput label="Disabled" placeholder="Text here" class="w-[350px]" disabled />
        </div>
      </div>
    </div>
  </ExampleSectionTemplate>
</template>
