<template>
  <TheContainer class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Forms</p>
    <div class="mt-12 grid gap-4">
      <InputDemo />
      <SelectDemo />
      <RadioGroupDemo />
      <TextareaDemo />
      <CheckboxGroupDemo />
      <SwitchDemo />
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheContainer from '@/layouts/container/TheContainer.vue';
import CheckboxGroupDemo from './CheckboxGroupDemo.vue';
import InputDemo from './InputDemo.vue';
import RadioGroupDemo from './RadioGroupDemo.vue';
import SelectDemo from './SelectDemo.vue';
import SwitchDemo from './SwitchDemo.vue';
import TextareaDemo from './TextareaDemo.vue';
</script>
