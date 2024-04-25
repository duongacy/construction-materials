<template>
  <!-- <div>
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
  </div> -->
  <form class="grid gap-4">
    <BaseInput placeholder="Username" />
    <BaseInput placeholder="Email" />
    <BaseInput placeholder="Password" type="password" />
    <BaseButton class="w-full mt-2">Register</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseInput } from '@/components/ui/input';
import { useAuthenStore } from '@/store/useAuthenStore';
import { type RegisterPayload } from '@/types/api/user';

const authenStore = useAuthenStore();

const submitHandler = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const payload: RegisterPayload = {
    email: formData.get('email') as string,
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  };
  authenStore.registerMutation.mutate(payload);
};
</script>
