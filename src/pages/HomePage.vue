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

.section-number {
  position: absolute;
  top: 48px;
  left: 0;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  color: $dull-blue;
}
</style>