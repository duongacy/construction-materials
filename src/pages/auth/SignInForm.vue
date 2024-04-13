<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard, CardContent, CardFooter } from '@/components/ui/card';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants';
import { key } from '@/store';
import { type authActions } from '@/store/modules/AUTHEN/actions';
import { toTypedSchema } from '@vee-validate/zod';
import { Lock, Mail } from 'lucide-vue-next';
import { useForm, type InvalidSubmissionHandler, type SubmissionHandler } from 'vee-validate';
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useStore } from 'vuex';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().refine((value) => EMAIL_REGEX.test(value), 'Your email is invalid'),
  password: z.string().refine((value) => PASSWORD_REGEX.test(value), 'Your password is invalid'),
});
type SignInType = z.infer<typeof SignInSchema>;

const store = useStore(key);
const { errors, handleSubmit, defineField } = useForm<SignInType>({
  initialValues: { email: '', password: '' },
  validationSchema: toTypedSchema(SignInSchema),
});

const shouldShowValidate = ref(false);
const [email] = defineField('email');
const [password] = defineField('password');

const signInHandler: SubmissionHandler<SignInType> = async (data) => {
  const signinAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload: data,
  };
  try {
    await store.dispatch('AUTHEN/auth', signinAction);
  } catch (error: any) {
    alert(error.message);
  }
};
const signInErrorHandler: InvalidSubmissionHandler<SignInType> = (e) => {
  shouldShowValidate.value = true;
  const firstErrorField = document.querySelector(
    `[name='${Object.keys(e.errors)[0]}']`,
  ) as HTMLInputElement;
  firstErrorField?.focus();
};
const onSubmit = handleSubmit(signInHandler, signInErrorHandler);

onBeforeRouteLeave((_1, _2, next) => {
  const isAuthenticated = store.getters['AUTHEN/isAuthenticated'];
  if (!isAuthenticated) {
    const answer = window.confirm('Are you sure?');
    next(answer);
    return;
  }
  next();
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <BaseCard
      title="Sign In"
      description="If you have an account, please sign-in with email and password."
    >
      <CardContent class="grid gap-4">
        <BaseLabel class="grid gap-2">
          <span>Email</span>
          <BaseInput
            v-model:value="email"
            placeholder="Enter your email"
            name="email"
            :start-icon="Mail"
            @keypress="shouldShowValidate = false"
          />
          <p v-if="!!errors.email && shouldShowValidate" class="mt-2 text-red-500" variant="small">
            {{ errors.email }}
          </p>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>Password</span>
          <BaseInput
            v-model:value="password"
            placeholder="Enter your password"
            name="password"
            type="password"
            :start-icon="Lock"
            @keypress="shouldShowValidate = false"
          />
          <p
            v-if="!!errors.password && shouldShowValidate"
            class="mt-2 text-red-500"
            variant="small"
          >
            {{ errors.password }}
          </p>
        </BaseLabel>
      </CardContent>
      <CardFooter>
        <BaseButton type="submit" class="w-full">Sign In</BaseButton>
      </CardFooter>
    </BaseCard>
  </form>
</template>
