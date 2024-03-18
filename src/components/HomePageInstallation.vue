<template>
  <section class="installation section-block">
    <div class="installation__wrapper center-wrapper">
      <span class="installation__number section-number section-number--installation">05</span>
      <h2 class="installation__title section-title"> Производство</h2>
      <form
        id="constructor"
        class="installation__constructor constructor"
        method="POST"
        action="#"
      >
        <div class="constructor__body">
          <div class="constructor__settings">
            <fieldset
              v-for="parameter in productionStore.parameters"
              class="constructor__parameter parameter"
            >
              <legend class="parameter__title">{{ parameter.title }}</legend>
              <AppRadio
                v-for="variant in parameter.variants"
                v-model:link="productionStore[parameter.name]"
                class="parameter__label"
                :name="parameter.name"
                :value="variant.value"
                data-test="2"
              >
                {{ variant.description }}
              </AppRadio>
            </fieldset>
          </div>
          <fieldset class="constructor__components components">
            <legend class="visually-hidden">Добавить компоненты для производства</legend>
            <ul
              v-for="(component, componentIndex) in productionStore.constructorTemplate"
              class="components__list"
            >
              <li
                v-for="(item, index) in component.cellsQuantity"
              >
                <label
                  :class="`components__item components__item--${component.name}`"
                >
                  <svg class="components__logo">
                    <use :href="`/sprite.svg#${component.name}`"/>
                  </svg>
                  <input
                    class="visually-hidden"
                    type="checkbox"
                    v-model="component.values"
                    @change="toggleComponentInStock(component.id)"
                    :value="`${component.name}-${index}`"
                    :disabled="getAvailableComponentQuantity(component.id) < index + 1"
                  />
                  <span class="visually-hidden">Вернуть компонент биорука на склад</span>
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div class="constructor__info">
          <div class="constructor__button-wrapper">
            <AppButton
              class="constructor__button button--red-border"
              type="submit"
              @click.prevent="createRobot"
              :disabled="productionStore.robotStatus.value !== 'available'"
            >
              Произвести за {{ productionStore.robotProducePrice }} монет
            </AppButton>
          </div>
          <p 
            v-if="productionStore.robotStatus.value === 'unavailable'"
            class="constructor__description"
          >
            {{ productionStore.constructorDescription }}
          </p>
        </div>
        <div class="constructor__image-wrapper">
          <div
            class="constructor__robot"
            :class="productionStore.robotConstructorClass"
            role="img"
            :aria-label="`Твой робот. Статус: ${productionStore.robotStatus.title}`"
          ></div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useComponentsStore } from '../store/componentsStore';
import { useProductionStore } from '../store/productionStore';
import { useCoinsStore } from '../store/coinsStore';

import { storeToRefs } from 'pinia';

const componentsStore = useComponentsStore();
const productionStore = useProductionStore();
const coinsStore = useCoinsStore();
const { balance: coinsBalance } = storeToRefs(coinsStore);

const getAvailableComponentQuantity = (componentId) => {
  return componentsStore.getComponentQuantity(componentId) + productionStore.getComponentQuantity(componentId);
}

const toggleComponentInStock = (componentId) => {
  if(event.target.checked) {
    componentsStore.removeComponent(componentId, 1);
  } else {
    componentsStore.addComponent(componentId, 1);
  }
}

const createRobot = () => {
  productionStore.isProduced = true;
  coinsBalance.value -= productionStore.robotProducePrice;
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/text-style.scss";
@import "../assets/scss/device-width.scss";
@import "../assets/scss/colors.scss";

.installation {
  padding-bottom: 205px;

  &__title {
    line-height: 72px;
  }
}

.constructor {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "body preview"
    "info preview";
  column-gap: 39px;
  width: 73px;
  min-width: 756px;
  margin: 0 auto;

  @media (max-width: $tablet-max) {
    grid-template-columns: 1.1fr 1fr;
    row-gap: 20px;
    min-width: 496px;
  }

  @media (max-width: $phone-max) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "preview"
      "body"
      "info";
    min-width: 236px;
  }

  &__body {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    column-gap: 24px;
    margin-bottom: 32px;

    @media (max-width: $tablet-max) {
      display: flex;
      flex-direction: column;
      row-gap: 44px;
    }
  }

  // Выбор параметров робота

  &__settings {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }

  // Блок с кнопкой и подписью

  &__info {
    grid-area: info;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    column-gap: 24px;

    @media (max-width: $tablet-max) {
      display: flex;
      flex-direction: column-reverse;
      row-gap: 20px;
    }
  }

  // Информация почему нельзя произвести робота

  &__description {
    @include second-text;
    width: 222px;
    margin: 0;
  }

  &__button {
    min-width: 236px;
  }

  // Обертка превью робота

  &__image-wrapper {
    grid-area: preview;
    max-height: 320px;
  }

  // Превью робота

  &__robot {
    width: 236px;
    height: 320px;
    background-image: url("../assets/img/robots-sprite.png");
    background-repeat: no-repeat;
    background-size: 1016px 1008px;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;

    @media (min-resolution: 2dppx) {
      background-image: url("../assets/img/robots-sprite@2x.png");
    }

    &--frontend-male-produced {
      background-position: 0 0;
    }

    &--design-male-produced {
      background-position: -236px 0;
    }

    &--frontend-female-produced {
      background-position: -472px 0;
    }

    &--design-female-produced {
      background-position: -708px 0;
    }

    &--frontend-male-available {
      background-position: 0 -320px;
    }

    &--design-male-available {
      background-position: -236px -320px;
    }

    &--frontend-female-available {
      background-position: -472px -320px;
    }

    &--design-female-available {
      background-position: -708px -320px;
    }

    &--frontend-male-unavailable {
      background-position: 0 -640px;
    }

    &--design-male-unavailable {
      background-position: -236px -640px;
    }

    &--frontend-female-unavailable {
      background-position: -472px -640px;
    }

    &--design-female-unavailable {
      background-position: -708px -640px;
    }
  }
}

.parameter {
  @include second-text;
  display: flex;
  column-gap: 24px;
  margin: 0;
  padding: 0px;
  border: none;

  &__title {
    @include medium-text;
    margin-bottom: 28px;
    padding: 0;
  }

  &__label {
    width: 100px;
  }
}

.components {
  margin: 0;
  padding: 0;
  border: none;

  // Список компонентов

  &__list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    padding-top: 4px;
    list-style-type: none;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  // Кнопка компонента

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    color: $white;
    background-color: $dark-gray;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;

    & svg {
      width: 32px;
      height: 32px;
    }

    &--biohand svg {
      width: 32px;
      height: 24px;
    }

    &--chip svg {
      width: 24px;
      height: 24px;
    }

    &--soul svg {
      width: 32px;
      height: 32px;
    }

    &:has(input:checked) {
      color: $orange;
      background-color: transparent;
      border: 2px solid $orange;
      border-radius: 4px;
    }

    &:has(input:disabled) {
      color: $gray;
      border-radius: 0;
      border-color: transparent;
      background-color: $dark-gray;
    }
  }
}
</style>
