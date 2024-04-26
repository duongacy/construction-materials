<template>
  <form class="grid gap-4" @submit.prevent="onSubmit">
    <BaseInput v-model:value="username" :error="errors.username" placeholder="Username" />
    <BaseInput v-model:value="email" :error="errors.email" placeholder="Email" />
    <BaseInput
      v-model:value="password"
      :error="errors.password"
      placeholder="Password"
      type="password"
    />
    <BaseButton class="w-full mt-2" type="submit">Register</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseInput } from '@/components/ui/input';
import { useAuthenStore } from '@/store/useAuthenStore';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, type InvalidSubmissionHandler, type SubmissionHandler } from 'vee-validate';
import * as z from 'zod';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^.{6,}$/;

const SignInSchema = z.object({
  username: z.string().refine((value) => value.length >= 4, 'Your username is invalid'),
  email: z.string().refine((value) => EMAIL_REGEX.test(value), 'Your email is invalid'),
  password: z.string().refine((value) => PASSWORD_REGEX.test(value), 'Your password is invalid'),
});

type RegisterType = z.infer<typeof SignInSchema>;

const { errors, handleSubmit, defineField } = useForm<RegisterType>({
  initialValues: { username: 'ylvn1', email: 'duongy96@gmail.com', password: '1@Qwertyuiop' },
  validationSchema: toTypedSchema(SignInSchema),
});

const [username] = defineField('username');
const [email] = defineField('email');
const [password] = defineField('password');

const signInHandler: SubmissionHandler<RegisterType> = async (data) => {
  const payload = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  authenStore.registerMutation.mutate(payload);
};
const signInErrorHandler: InvalidSubmissionHandler<RegisterType> = (e) => {
  console.error('Error:', e);
};
const onSubmit = handleSubmit(signInHandler, signInErrorHandler);

const authenStore = useAuthenStore();
</script>
