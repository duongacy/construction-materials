<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard } from '@/components/ui/card';
import {
  BaseDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import ExampleSectionTemplate from '@/pages/design-pattern/ExampleSectionTemplate.vue';
</script>

<template>
  <ExampleSectionTemplate name="Dialog">
    <div class="flex gap-4 flex-wrap">
      <BaseCard title="Default" class="w-[350px]">
        <BaseDialog>
          <DialogTrigger as-child>
            <BaseButton variant="outline"> Edit Profile </BaseButton>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <BaseLabel for="name" class="text-right"> Name </BaseLabel>
                <BaseInput id="name" value="Pedro Duarte" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <BaseLabel for="username" class="text-right"> Username </BaseLabel>
                <BaseInput id="username" value="@peduarte" class="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <BaseButton type="submit"> Save changes </BaseButton>
            </DialogFooter>
          </DialogContent>
        </BaseDialog>
      </BaseCard>
      <BaseCard title="Scroll body" class="w-[350px]">
        <BaseDialog>
          <DialogTrigger as-child>
            <BaseButton variant="outline"> Edit Profile </BaseButton>
          </DialogTrigger>
          <DialogContent
            class="sm:max-w-[425px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
          >
            <DialogHeader class="p-6 pb-0">
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4 overflow-y-auto px-6">
              <div class="flex flex-col justify-between h-[300dvh]">
                <p>
                  This is some placeholder content to show the scrolling behavior for modals. We use
                  repeated line breaks to demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer than the predefined
                  max-height of modal, content will be cropped and scrollable within the modal.
                </p>

                <p>This content should appear at the bottom after you scroll.</p>
              </div>
            </div>
            <DialogFooter class="p-6 pt-0">
              <BaseButton type="submit"> Save changes </BaseButton>
            </DialogFooter>
          </DialogContent>
        </BaseDialog>
      </BaseCard>
      <BaseCard title="Scroll overlay" class="w-[350px]">
        <BaseDialog>
          <DialogTrigger as-child>
            <BaseButton variant="outline"> Edit Profile </BaseButton>
          </DialogTrigger>
          <DialogScrollContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Modal title</DialogTitle>
              <DialogDescription> Here is modal with overlay scroll </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4 h-[300dvh]">
              <p>
                This is some placeholder content to show the scrolling behavior for modals. Instead
                of repeating the text in the modal, we use an inline style to set a minimum height,
                thereby extending the length of the overall modal and demonstrating the overflow
                scrolling. When content becomes longer than the height of the viewport, scrolling
                will move the modal as needed.
              </p>
            </div>
            <DialogFooter>
              <BaseButton type="submit"> Save changes </BaseButton>
            </DialogFooter>
          </DialogScrollContent>
        </BaseDialog>
      </BaseCard>
      <BaseCard title="Within context menu" class="w-[350px]">
        <p class="text-body">Coming soon...</p>
      </BaseCard>
    </div>
  </ExampleSectionTemplate>
</template>
