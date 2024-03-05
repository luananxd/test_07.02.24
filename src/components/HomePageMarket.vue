<template>
  <section class="market section-block">
    <div class="market__wrapper center-wrapper">
      <span class="market__number section-number">03</span>
      <h2 class="market__title section-title">Рынок комплектующих</h2>
      <ul class="market__goods">
        <li
          v-for="component in componentsStore.components"
          :key="component.id"
          class="market__good good">
          <div class="good__logo-wrapper">
            <svg class="good__logo" width="101" height="67">
              <use :href="`/sprite.svg#${component.value}`" />
            </svg>
          </div>
          <h3 class="good__title">
            {{ component.name }}
          </h3>
          <p class="good__price">
            Стоимость:
            <span>
              {{ component.priceForBuy }} {{ getCoinsDescription(component.priceForBuy) }}
            </span>
          </p>
          <AppButton
            type="button"
            class="good__button button--red"
            @click="buyComponent(component.id, component.priceForBuy)"
            :disabled="coinsStore.balance < component.priceForBuy"
          >
            Установить
          </AppButton>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useComponentsStore } from '../store/componentsStore';
import { useCoinsStore } from '../store/coinsStore';

import { getCoinsDescription } from '../common/helpers';

const componentsStore = useComponentsStore();
const coinsStore = useCoinsStore();

const buyComponent = (componentId, price) => {
  componentsStore.addComponent(componentId, 1);
  coinsStore.removeCoins(price);
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.market {
  &__goods {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 40px;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__good {
    width: 236px;
  }
}

.good {
  &__logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 128px;
    margin-bottom: 25px;
    color: $orange;
  }

  &__logo {
    position: relative;
    width: 100px;
    height: 80px;
    filter: drop-shadow(0 8px 90px $orange);
  }

  &__title {
    @include info-text;
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
  }

  &__price {
    margin: 0;
    margin-bottom: 24px;
    color: $light-blue;
    font-weight: 500;
    text-align: center;

    & span {
      font-weight: 600;
    }
  }

  &__button {
    width: 100%;
  }
}
</style>
