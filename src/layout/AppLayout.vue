<template>
  <div class="app-layout">
    <AppHeader />
    <HomePage />
  </div>
</template>

<script setup>
import AppHeader from "@/layout/AppHeader.vue";
import HomePage from "@/pages/HomePage.vue";
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-image: radial-gradient(1800px at top center, #26394d, #212529);
  font-family: "Montserrat", "Arial", sans-serif;
  color: $white;
}

.app-layout {
  position: relative;
}

.center-wrapper {
  width: 1016px;
  margin: 0 auto;
}
</style>
