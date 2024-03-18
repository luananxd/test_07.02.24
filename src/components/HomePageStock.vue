<template>
  <section class="stock section-block">
    <div class="stock__wrapper center-wrapper">
      <span class="stock__number section-number">04</span>
      <h2 class="stock__title section-title">Склад</h2>
      <ul class="stock__components">
        <li
          v-for="component in componentsStore.components"
          :key="component.id"
          class="stock__component component">
          <h3 class="component__title">
            {{ component.name }}
          </h3>
          <p class="component__price">
            Стоимость: <span>{{ component.priceForSell }} {{ getCoinsDescription(component.priceForSell) }}</span>
          </p>
          <span class="component__quantity">{{ component.quantity }} шт</span>
          <AppButton
            type="button"
            class="component__button button--blue"
            @click="sellComponent(component.id, component.priceForSell)"
            :disabled="component.quantity < 1"
          >
            Продать
          </AppButton>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useComponentsStore } from '../store/componentsStore';
import { useProductionStore } from '../store/productionStore';
import { useCoinsStore } from '../store/coinsStore';

import { getCoinsDescription } from '../common/helpers';
import { storeToRefs } from 'pinia';

const componentsStore = useComponentsStore();
const productionStore = useProductionStore();
const coinsStore = useCoinsStore();
const { balance: coinsBalance } = storeToRefs(coinsStore);

const sellComponent = (componentId, price) => {
  componentsStore.removeComponent(componentId, 1);
  coinsBalance.value += price;
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.stock {
  &__components {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 40px;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__component {
    width: 236px;
  }
}

.component {
  &__title {
    @include info-text;
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
  }

  &__price {
    margin: 0;
    margin-bottom: 15px;
    color: $light-blue;
    font-weight: 500;
    text-align: center;

    & span {
      font-weight: 600;
    }
  }

  &__quantity {
    display: block;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__button {
    width: 100%;
  }
}
</style>
