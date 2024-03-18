<template>
  <HomePagePreview />
  <HomePageCoins />
  <HomePageMarket />
  <HomePageStock 
    @open-coins-modal="showCoinsModal = true"
  />
  <HomePageInstallation />
  <AppModal
    :show-modal="showCoinsModal"
    :icon-path="'src/assets/img/coin.png'"
    @close="showCoinsModal = false"
  >
    <template #title>
      Количество монет<br>ограничено
    </template>
    <template #text>
      Вы не можете нацыганить более 100 монет biorobo
    </template>
  </AppModal>
  <AppModal
    :show-modal="showProducedModal"
    @close="showProducedModal = false"
  >
    <template #title>
      Биоробот<br>произведён
    </template>
    <template #text>
      Поздравляем!<br>Вы произвели биоробота
    </template>
  </AppModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCoinsStore } from '../store/coinsStore';
import { useProductionStore } from '../store/productionStore';
import HomePagePreview from '../components/HomePagePreview.vue';
import HomePageCoins from '../components/HomePageCoins.vue';
import HomePageMarket from '../components/HomePageMarket.vue';
import HomePageStock from '../components/HomePageStock.vue';
import HomePageInstallation from '../components/HomePageInstallation.vue';

const coinsStore = useCoinsStore();
const productionStore = useProductionStore();

const { balance: coinsBalance } = storeToRefs(coinsStore);
const showCoinsModal = ref(false);
watch(coinsBalance, (newValue) => {
  showCoinsModal.value = newValue > coinsStore.limit || false;
})

const { isProduced } = storeToRefs(productionStore);
const showProducedModal = ref(false);

watch(isProduced, (newValue) => {
  showProducedModal.value = newValue;
})
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
