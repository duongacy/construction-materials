<template>
  <div class="grid min-h-screen place-content-end bg-slate-100">
    <img src="/src/assets/vue_bg.svg" class="absolute h-full w-full object-cover" />
    <div class="relative h-[600px] w-[600px]å bg-neutral-700 p-20">
      <BaseTabs default-value="sign-in" class="mx-auto w-[350px]">
        <TabsList class="grid grid-cols-2">
          <TabsTrigger value="sign-in"> Sign In </TabsTrigger>
          <TabsTrigger value="sign-up"> Sign Up </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignupForm />
        </TabsContent>
      </BaseTabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignInForm from './SignInForm.vue';
import SignupForm from './SignupForm.vue';
</script>
