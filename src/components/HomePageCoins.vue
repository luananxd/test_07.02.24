<template>
  <section class="coins">
    <div class="coins__wrapper center-wrapper">
      <span class="coins__number section-number">02</span>
      <div class="coins__content-wrapper">
        <h2 class="coins__title section-title">Кошелёк криптовалют</h2>
        <div class="coins__quantity-line">
          <span class="coins__coin"></span>
          <span class="coins__coin"></span>
        </div>
        <p class="coins__balance"><span class="coins__count">45</span> biorobo монет</p>
        <div class="coins__income">
          <button class="coins__button" type="button">Нацыганить</button>
          <label class="coins__label checkbox">
            <input class="checkbox__input visually-hidden" type="checkbox" name="enable-modificator">
            <p class="checkbox__title">Цыганить по 5 монет</p>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.coins {
  padding-top: 50px;
  padding-bottom: 50px;
}

.coins__number {
  top: 9px;
}

.coins__content-wrapper {
  margin-left: 130px;
}

.coins__title {
  @include h2;
  margin-top: 0;
  margin-bottom: 60px;
}

.coins__quantity-line {
  display: flex;
  margin-bottom: 24px;
}

.coins__coin {
  display: block;
  width: 16px;
  height: 20px;
  background-image: url("@/assets/img/coin.png");
  background-position: center, center;
  background-repeat: no-repeat;
}

// .coins__coin:not(:first-child) {
//   margin-left: -10px;
// }

.coins__balance {
  margin-bottom: 40px;
  color: $light-blue;
}

.coins__count {
  font-weight: 500;
}

.coins__income {
  display: flex;
}

.coins__button {
  position: relative;
  margin-right: 67px;
  padding: 0;
  @include normal-text;
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
  cursor: pointer;
}

.checkbox::before {
  content: "";
  position: absolute;
  top: 0;
  left: -36px;
  width: 24px;
  height: 24px;
  border: 2px solid $light-blue;
}

.checkbox::after {
  content: "";
  display: none;
  position: absolute;
  top: 5px;
  left: -31px;
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