<template>
  <HomePagePreview />
  <HomePageCoins />
  <HomePageMarket />
  <HomePageStock />
  <HomePageInstallation />
</template>

<script setup>
import { h } from "vue";

import HomePagePreview from "@/components/HomePagePreview.vue";
import HomePageCoins from "@/components/HomePageCoins.vue";
import HomePageMarket from "@/components/HomePageMarket.vue";
import HomePageStock from "@/components/HomePageStock.vue";
import HomePageInstallation from "@/components/HomePageInstallation.vue";

</script>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.section-block {
  padding-top: 50px;
  padding-bottom: 50px;

  @media(max-width: $tablet-max) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media(max-width: $phone-max) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.section-title {
  @include h2;
  margin: 0;
  margin-bottom: 60px;

  @media(max-width: $pc-max) {
    margin-bottom: 40px;
  }

  @media(max-width: $phone-max) {
    text-align: center;
  }
}

.section-number {
  position: absolute;
  top: 9px;
  left: 0;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  color: $dull-blue;

  &--preview {
    top: 48px;
  }

  &--installation {
    top: 24px;
  }

  @media(max-width: $pc-max) {
    display: none;
  }
}
</style>