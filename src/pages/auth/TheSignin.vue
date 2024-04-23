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
import { postMutationFn, type StrapiFormat } from '@/apis';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutation } from '@tanstack/vue-query';

type LoginPayload = {
  identifier: string;
  password: string;
};

interface User extends StrapiFormat {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}

type AuthenInfo = {
  jwt: string;
  user: User;
};

const defaultAuthenInfo: AuthenInfo = {
  jwt: '',
  user: {
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    id: 0,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
};
const authenLocal = useLocalStorage<AuthenInfo>('authenLocal', defaultAuthenInfo);
const loginMutate = useMutation<AuthenInfo, unknown, LoginPayload, unknown>({
  mutationFn: (payload) => postMutationFn('/api/auth/local', payload, defaultAuthenInfo),
  onSuccess(data) {
    authenLocal.setData(data);
  },
});

const submitHandler = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const payload: LoginPayload = {
    identifier: formData.get('identifier') as string,
    password: formData.get('password') as string,
  };
  loginMutate.mutate(payload);
};
</script>
