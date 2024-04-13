<template>
  <div>
    <div class="pt-4">
      <form class="-mx-4 grid gap-y-4 bg-neutral-100 p-4" @submit.prevent="onSubmit">
        <div>
          <!-- form head -->
          <h2 class="text-heading6 font-bold leading-7 text-neutral-900">Request</h2>
          <p class="mt-1 text-caption leading-6 text-neutral-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div class="mt-2 grid gap-y-4">
          <!-- form body -->
          <label class="grid gap-2">
            <span class="text-caption font-medium leading-6 text-neutral-900">Email</span>
            <input
              ref="emailRef"
              v-model.trim="request.userEmail.value"
              type="text"
              :class="
                cn({
                  'focus:ring-primary-600 py-1.5 text-caption leading-6 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2': true,
                  'focus:ring-error-600 ring-error-600 focus:ring-2': !!request.userEmail.error,
                })
              "
              placeholder="Please enter your email"
              @change="cancelValidate('userEmail')"
            />
            <p v-if="!!request.userEmail.error" class="text-error-600 text-caption leading-6">
              {{ request.userEmail.error }}
            </p>
          </label>

          <label class="grid gap-2">
            <span class="text-caption font-medium leading-6 text-neutral-900">Message</span>
            <textarea
              ref="messageRef"
              v-model.trim="request.message.value"
              rows="3"
              :class="
                cn(
                  'focus:ring-primary-600  border-0 py-1.5 text-caption leading-6 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2',
                  {
                    'focus:ring-error-600 ring-error-600 focus:ring-2': !!request.message.error,
                  },
                )
              "
              placeholder="Write a few sentences about yourself"
              @change="cancelValidate('message')"
            />
            <p v-if="!!request.message.error" class="text-error-600 text-caption leading-6">
              {{ request.message.error }}
            </p>
          </label>
        </div>

        <div class="flex justify-end gap-x-4">
          <!-- form footer -->
          <base-button variant="secondary" size="large" type="button" @click="onCancel"
            >Cancel</base-button
          >
          <base-button variant="primary" size="large" type="submit">Submit</base-button>
        </div>
      </form>
    </div>
    <base-dialog
      :show="!!error"
      title="Request fail"
      ok-text="OK"
      @close="onCloseErrorDialog"
      @ok="onCloseErrorDialog"
    >
      <p class="text-caption text-neutral-500">
        <!-- {{ error }} -->
        Something went wrong
      </p>
    </base-dialog>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { key } from '@/store';
import type { TRequest } from '@/types/request';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore(key);
const router = useRouter();
const error = ref<string>('');
const onCloseErrorDialog = () => {
  error.value = '';
};

const props = defineProps<{ coachId: string }>();
const request = ref({
  userEmail: { value: '', error: '' },
  message: { value: '', error: '' },
});
const emailRef = ref<HTMLInputElement>();
const messageRef = ref<HTMLTextAreaElement>();

const checkValidate = () => {
  if (!request.value.userEmail.value.includes('@')) {
    request.value.userEmail.error = 'Email is not valid!';
    emailRef.value?.focus();
    return false;
  }
  if (request.value.message.value === '') {
    request.value.message.error = 'Please enter message!';
    messageRef.value?.focus();
    return false;
  }
  return true;
};

const cancelValidate = (key: keyof typeof request.value) => {
  request.value[key].error = '';
};

const onCancel = () => {
  router.back();
};

onMounted(() => {
  emailRef.value?.focus();
});

const onSubmit = async () => {
  if (!checkValidate()) return;
  const data: TRequest = {
    id: new Date().getTime().toString(),
    coachId: props.coachId,
    userEmail: request.value.userEmail.value,
    message: request.value.message.value,
  };
  try {
    await store.dispatch('REQUESTS/addAction', data);
    router.back();
  } catch (err: any) {
    console.log(err);
    error.value = err?.message || 'Something went wrong';
  }
};
</script>
