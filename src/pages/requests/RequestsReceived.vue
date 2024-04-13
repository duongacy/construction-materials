<template>
  <div>
    <div class="p-4">
      <div class="flex flex-col gap-4 overflow-hidden border border-neutral-200 p-4">
        <div>
          <h3 class="text-body font-semibold leading-6 text-neutral-900">Requests</h3>
          <p v-if="!requests.length" class="mt-1 text-caption text-neutral-500">
            Don't have any requests.
          </p>
        </div>
        <div v-if="!!requests.length" class="h-[1px] bg-neutral-200"></div>
        <div v-if="!!requests.length" class="grid gap-4">
          <div v-for="request in requests" :key="request.id" class="overflow-hidden p-4 shadow-lg">
            <a
              :href="'mailto:' + request.userEmail"
              class="text-caption font-bold text-neutral-900"
              >{{ request.userEmail }}</a
            >
            <div class="mt-4 space-y-6 text-body italic text-neutral-600">
              {{ request.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <base-dialog :show="!!error" @close="onCloseErrorDialog" @ok="onCloseErrorDialog" ok-text="OK"
      >{{ error }}
    </base-dialog> -->
  </div>
</template>

<script setup lang="ts">
import { key } from '@/store';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const error = ref<string>('');
const store = useStore(key);
const requests = computed(() => {
  return store.state.REQUESTS.requests;
});
const loadAllRequests = async () => {
  try {
    await store.dispatch('REQUESTS/loadAllAction');
  } catch (err: any) {
    error.value = err.message;
  }
};

loadAllRequests();

const onCloseErrorDialog = () => {
  error.value = '';
};
</script>
