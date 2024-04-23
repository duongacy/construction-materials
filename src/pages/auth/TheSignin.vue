<template>
  <div>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="submitHandler">
        <div>
          <label
            >Username:

            <input type="text" name="identifier" class="border" value="ylvn1" />
          </label>
        </div>
        <div>
          <label
            >Password:

            <input type="password" name="password" class="border" value="1@Qwertyuiop" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { postMutationFn } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultAuthenResponse, type AuthenResponse, type SignInPayload } from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';

const authenLocal = useLocalStorage<AuthenResponse>('authenLocal', defaultAuthenResponse());

const signInMutation = useMutation<AuthenResponse, unknown, SignInPayload, unknown>({
  mutationFn: (payload) => postMutationFn('/api/auth/local', payload, defaultAuthenResponse()),
  onSuccess(data) {
    authenLocal.setData(data);
  },
});

const submitHandler = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const payload: SignInPayload = {
    identifier: formData.get('identifier') as string,
    password: formData.get('password') as string,
  };
  signInMutation.mutate(payload);
};
</script>
