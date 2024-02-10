<template>
  <AppLayout />
</template>

<script setup>
import AppLayout from "@/layout/AppLayout.vue";
</script>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
