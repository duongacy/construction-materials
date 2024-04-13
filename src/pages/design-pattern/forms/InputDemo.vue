<script setup lang="ts">
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
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
          <BaseLabel class="grid w-[350px] gap-2">
            <span>No Icon</span>
            <BaseInput v-model:value="value" placeholder="Text here" class="mx-1"> </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="Mail"
              placeholder="Text here"
              class="mx-1"
            >
            </BaseInput>
          </BaseLabel>

          <BaseLabel class="grid w-[350px] gap-2">
            <span>With right icon</span>
            <BaseInput
              v-model:value="value"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
            >
            </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left and right icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="AlbumIcon"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
            >
            </BaseInput>
          </BaseLabel>
        </div>
      </div>
      <div class="grid gap-2">
        <p class="text-heading6 font-bold">Error</p>
        <div class="flex flex-wrap gap-4">
          <BaseLabel class="grid w-[350px] gap-2">
            <span>No Icon</span>
            <BaseInput v-model:value="value" placeholder="Text here" class="mx-1" is-error>
            </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="Mail"
              placeholder="Text here"
              class="mx-1"
              is-error
            >
            </BaseInput>
          </BaseLabel>

          <BaseLabel class="grid w-[350px] gap-2">
            <span>With right icon</span>
            <BaseInput
              v-model:value="value"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
              is-error
            >
            </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left and right icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="AlbumIcon"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
              is-error
            >
            </BaseInput>
          </BaseLabel>
        </div>
      </div>
      <div class="grid gap-2">
        <p class="text-heading6 font-bold">Disabled</p>
        <div class="flex flex-wrap gap-4">
          <BaseLabel class="grid w-[350px] gap-2">
            <span>No Icon</span>
            <BaseInput v-model:value="value" placeholder="Text here" class="mx-1" disabled>
            </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="Mail"
              placeholder="Text here"
              class="mx-1"
              disabled
            >
            </BaseInput>
          </BaseLabel>

          <BaseLabel class="grid w-[350px] gap-2">
            <span>With right icon</span>
            <BaseInput
              v-model:value="value"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
              disabled
            >
            </BaseInput>
          </BaseLabel>
          <BaseLabel class="grid w-[350px] gap-2">
            <span>With left and right icon</span>
            <BaseInput
              v-model:value="value"
              :start-icon="AlbumIcon"
              :end-icon="Search"
              placeholder="Text here"
              class="mx-1"
              disabled
            >
            </BaseInput>
          </BaseLabel>
        </div>
      </div>
    </div>
  </ExampleSectionTemplate>
</template>
