<template>
  <form class="grid gap-4" @submit.prevent="onSubmit">
    <BaseInput v-model:value="identifier" placeholder="Username" :error="errors.identifier" />
    <BaseInput
      v-model:value="password"
      placeholder="Password"
      :error="errors.password"
      type="password"
    />
    <BaseButton class="w-full mt-2" type="submit">Login</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseInput } from '@/components/ui/input';
import { PASSWORD_REGEX, USERNAME_REGEX } from '@/constants/regex';
import { useAuthenStore } from '@/store/useAuthenStore';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, type InvalidSubmissionHandler, type SubmissionHandler } from 'vee-validate';
import * as z from 'zod';

const SignInSchema = z.object({
  identifier: z
    .string()
    .refine((value) => USERNAME_REGEX.test(value), 'Your identifier is invalid'),
  password: z.string().refine((value) => PASSWORD_REGEX.test(value), 'Your password is invalid'),
});

type SignInType = z.infer<typeof SignInSchema>;

const { errors, handleSubmit, defineField } = useForm<SignInType>({
  initialValues: { identifier: 'ylvn2', password: '1@Qwertyuiop' },
  validationSchema: toTypedSchema(SignInSchema),
});

const [identifier] = defineField('identifier');
const [password] = defineField('password');

const signInHandler: SubmissionHandler<SignInType> = async (data) => {
  const payload = {
    identifier: identifier.value,
    password: password.value,
  };
  authenStore.signInMutation.mutate(payload);
};
const signInErrorHandler: InvalidSubmissionHandler<SignInType> = (e) => {
  console.error('Error:', e);
};
const onSubmit = handleSubmit(signInHandler, signInErrorHandler);
const authenStore = useAuthenStore();
</script>
