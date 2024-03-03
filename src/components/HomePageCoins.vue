<template>
  <section class="coins section-block">
    <div class="coins__wrapper center-wrapper">
      <span class="coins__number section-number">02</span>
      <h2 class="coins__title section-title">Кошелёк криптовалют</h2>
      <div class="coins__quantity-line">
        <render />
      </div>
      <p class="coins__balance">
        <span class="coins__count">{{ coinsStore.coinsBalance }}</span> biorobo
        {{ getCoinsDescription(coinsStore.coinsBalance) }}
      </p>
      <div class="coins__income">
        <button class="coins__button" type="button">
          Нацыганить
        </button>
        <AppCheckbox
          v-model:is-checked="coinsStore.useModificator"
          class="coins__label"
        >
          Цыганить по {{ coinsStore.modificator }} монет
        </AppCheckbox>
      </div>
    </div>
  </section>
</template>
<script setup>
import { h } from 'vue';
import { useCoinsStore } from '../store/coinsStore';
import { getCoinsDescription } from '../common/helpers';

const coinsStore = useCoinsStore();
const render = () => {
  const coins = [];
  for (let i = 1; i <= coinsStore.coinsBalance; i += 1) {
    const coin = h('span', {
      class: 'coins__coin',
      style: `z-index: ${coinsStore.coinsBalance - i}`,
    });
    coins.push(coin);
  }
  return coins;
};
</script>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.coins__quantity-line {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  margin-bottom: 24px;
  padding-left: 10px;

  @media (max-width: $phone-max) {
    margin-bottom: 34px;
  }
}

.coins__coin {
  display: block;
  width: 16px;
  height: 20px;
  margin-left: -10px;
  background-image: url("@/assets/img/coin.png");
  background-position: center, center;
  background-repeat: no-repeat;
}

// .coins__coin:not(:first-child) {
//   margin-left: -10px;
// }

.coins__balance {
  margin-bottom: 44px;
  font-size: 24px;
  color: $light-blue;

  @media (max-width: $pc-max) {
    @include info-text;
    margin-bottom: 32px;
  }
}

.coins__count {
  font-weight: 500;
}

.coins__income {
  display: flex;

  @media (max-width: $phone-max) {
    align-items: flex-start;
    flex-direction: column;
  }
}

.coins__button {
  position: relative;
  margin-right: 31px;
  padding: 0;
  @include normal-text;
  font-family: "Montserrat", "Arial", sans-serif;
  color: $orange;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: $red-orange;

    &::before {
      background-color: $red-orange;
    }
  }

  &:active {
    color: $orange;

    &::before {
      background-color: transparent;
    }
  }

  &:disabled {
    color: $gray;

    &::before {
      background-color: transparent;
    }
  }

  @media (max-width: $phone-max) {
    margin-bottom: 24px;
  }
}

.coins__button::before {
  content: "";
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 134, 27, 0.5);
}
</style>
