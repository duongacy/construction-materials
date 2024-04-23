<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="submitHandler">
      <div>
        <label
          >Email:
          <input type="text" name="email" class="border" value="duongy500@gmail.com" />
        </label>
      </div>
      <div>
        <label
          >Username:
          <input type="text" name="username" class="border" value="ylvn1" />
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
</template>

<script setup lang="ts">
import { postMutationFn } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultAuthenResponse, type AuthenResponse, type RegisterPayload } from '@/types/api/user';
import { useMutation } from '@tanstack/vue-query';

const authenLocal = useLocalStorage<AuthenResponse>('authenLocal', defaultAuthenResponse());

const registerMutation = useMutation<AuthenResponse, unknown, RegisterPayload, unknown>({
  mutationFn: (payload) =>
    postMutationFn('/api/auth/local/register', payload, defaultAuthenResponse()),
  onSuccess(data) {
    authenLocal.setData(data);
  },
});

const submitHandler = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const payload: RegisterPayload = {
    email: formData.get('email') as string,
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  };
  registerMutation.mutate(payload);
};
</script>
