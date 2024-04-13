<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <div class="sticky top-0 z-50 w-full bg-white">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
