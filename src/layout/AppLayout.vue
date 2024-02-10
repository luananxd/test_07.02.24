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
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/device-width.scss";

body {
  margin: 0;
  background-image: radial-gradient(1800px at top center, #26394d, #212529);
  font-family: "Montserrat", "Arial", sans-serif;
  color: $white;
  @include normal-text;
}

.app-layout {
  position: relative;
}

.center-wrapper {
  position: relative;
  width: 1016px;
  margin: 0 auto;
  padding-left: 130px;

  @media(max-width: $pc-max) {
    width: 74%;
    min-width: 756px;
    padding: 0;
  }

  @media(max-width: $tablet-max) {
    width: 65%;
    min-width: 496px;
  }

  @media(max-width: $phone-max) {
    width: 74%;
    min-width: 236px;
  }
}
</style>
