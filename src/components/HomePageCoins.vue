
import AppCheckbox from './UI/AppCheckbox.vue';
<template>
  <section class="coins section-block">
    <div class="coins__wrapper center-wrapper">
      <span class="coins__number section-number">02</span>
      <h2 class="coins__title section-title">Кошелёк криптовалют</h2>
      <div class="coins__quantity-line">
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
        <span class="coins__coin"></span>
      </div>
      <p class="coins__balance"><span class="coins__count">45</span> biorobo монет</p>
      <div class="coins__income">
        <button class="coins__button" type="button">Нацыганить</button>
        <AppCheckbox class="coins__label">Цыганить по 5 монет</AppCheckbox>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.coins__quantity-line {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  margin-bottom: 24px;

  @media(max-width: $phone-max) {
    margin-bottom: 34px;
  }
}

.coins__coin {
  display: block;
  width: 16px;
  height: 20px;
  background-image: url("@/assets/img/coin.png");
  background-position: center, center;
  background-repeat: no-repeat;
}

.coins__coin:not(:first-child) {
  margin-left: -9px;
  mask-image: url("@/assets/img/coin-mask.svg");
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: -24px;
}

.coins__balance {
  margin-bottom: 44px;
  font-size: 24px;
  color: $light-blue;

  @media(max-width: $pc-max) {
    @include info-text;
    margin-bottom: 32px;
  }
}

.coins__count {
  font-weight: 500;
}

.coins__income {
  display: flex;

  @media(max-width: $phone-max) {
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

  @media(max-width: $phone-max) {
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

// Checbox

.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
}

.checkbox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid $light-blue;
}

.checkbox::after {
  content: "";
  display: none;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 14px;
  height: 14px;
  background-image: url("@/assets/img/check.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

.checkbox:has(.checkbox__input:checked)::after {
  display: block;
}

.checkbox__title {
  margin: 0;
}
</style>