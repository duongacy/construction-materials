<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import {
  BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import { BaseTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
</script>

<template>
  <ExampleSectionTemplate name="Tabs">
    <div class="grid gap-4">
      <BaseTabs default-value="account" class="w-[350px]">
        <TabsList class="grid grid-cols-2">
          <TabsTrigger value="account"> Account </TabsTrigger>
          <TabsTrigger value="password"> Password </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <BaseCard>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <BaseLabel for="name">Name</BaseLabel>
                <BaseInput id="name" default-value="Pedro Duarte" />
              </div>
              <div class="space-y-1">
                <BaseLabel for="username">Username</BaseLabel>
                <BaseInput id="username" default-value="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <BaseButton>Save changes</BaseButton>
            </CardFooter>
          </BaseCard>
        </TabsContent>
        <TabsContent value="password">
          <BaseCard>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <BaseLabel for="current">Current password</BaseLabel>
                <BaseInput id="current" type="password" />
              </div>
              <div class="space-y-1">
                <BaseLabel for="new">New password</BaseLabel>
                <BaseInput id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <BaseButton>Save password</BaseButton>
            </CardFooter>
          </BaseCard>
        </TabsContent>
      </BaseTabs>
    </div>
  </ExampleSectionTemplate>
</template>
