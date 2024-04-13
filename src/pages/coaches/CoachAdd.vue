<template>
  <form>
    <!-- <base-input label="First name" v-model="firstName" @input="onInput"></base-input>
    <base-radio-group></base-radio-group>
    <base-checkbox></base-checkbox>
    <base-listbox></base-listbox>
   -->
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firstName = ref('');

const onInput = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
};
</script>
