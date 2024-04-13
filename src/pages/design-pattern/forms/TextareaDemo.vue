<script setup lang="ts">
import BaseLabel from '@/components/ui/label/BaseLabel.vue';
import { BaseTextarea } from '@/components/ui/textarea';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <ExampleSectionTemplate name="Textarea">
    <div class="flex flex-wrap gap-4">
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Description</span>
        <BaseTextarea v-model:value="value" placeholder="Type your message here." class="mx-1" />
      </BaseLabel>
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Description</span>
        <BaseTextarea
          v-model:value="value"
          placeholder="Type your message here."
          class="mx-1"
          is-error
        />
      </BaseLabel>
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Description</span>
        <BaseTextarea
          v-model:value="value"
          placeholder="Type your message here."
          class="mx-1"
          disabled
        />
      </BaseLabel>
    </div>
  </ExampleSectionTemplate>
</template>
