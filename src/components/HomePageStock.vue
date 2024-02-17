<template>
  <section class="stock section-block">
    <div class="stock__wrapper center-wrapper">
      <span class="stock__number section-number">04</span>
      <h2 class="stock__title section-title">
        Склад
      </h2>
      <ul class="stock__components">
        <li
          v-for="component in dataStore.components"
          :key="component.id"
          class="stock__component component"
        >
          <h3 class="component__title">
            {{ component.name }}
          </h3>
          <p class="component__price">
            Стоимость:
            <span>
              {{ component.priceForSell }} {{ getCoinsDescription(component.priceForSell) }}
            </span>
          </p>
          <span class="component__quantity">{{ componentStore.getComponentQuantity(component.id) }} шт</span>
          <AppButton
            type="button"
            class="component__button button--blue"
            :disabled="canSellComponent(component.id)"
            @click="componentStore.sellComponent(component.id)"
          >
            Продать
          </AppButton>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useDataStore } from '../store/dataStore';
import { useComponentsStore } from '../store/componentsStore';
import { getCoinsDescription } from '../common/helpers';

const dataStore = useDataStore();
const componentStore = useComponentsStore();

const canSellComponent = (componentId) => componentStore.getComponentQuantity(componentId) <= 0;
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.stock__components {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 40px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.stock__component {
  width: 236px;
}

.component__title {
  @include info-text;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;
}

.component__price {
  margin: 0;
  margin-bottom: 15px;
  color: $light-blue;
  font-weight: 500;
  text-align: center;

  & span {
    font-weight: 600;
  }
}

.component__quantity {
  display: block;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
}

.component__button {
  width: 100%;
}
</style>
