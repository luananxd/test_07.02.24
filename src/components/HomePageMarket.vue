
import AppButton from './UI/AppButton.vue';
<template>
  <section class="market section-block">
    <div class="market__wrapper center-wrapper">
      <span class="market__number section-number">03</span>
      <h2 class="market__title section-title">Рынок комплектующих</h2>
      <ul class="market__goods">
        <li class="market__good good">
          <div class="good__logo-wrapper">
            <svg class="good__logo" width="101" height="67">
              <use href="@/assets/img/sprite.svg#biohand"></use>
            </svg>
          </div>
          <h3 class="good__title">Биорука</h3>
          <p class="good__price">Стоимость: <span>7 монет</span></p>
          <AppButton type="button" class="good__button button--red">Установить</AppButton>
        </li>
        <li class="market__good good">
          <div class="good__logo-wrapper">
            <svg class="good__logo" width="80" height="80">
              <use href="@/assets/img/sprite.svg#chip"></use>
            </svg>
          </div>
          <h3 class="good__title">Микрочип</h3>
          <p class="good__price">Стоимость: <span>5 монет</span></p>
          <AppButton type="button" class="good__button button--red">Установить</AppButton>
        </li>
        <li class="market__good good">
          <div class="good__logo-wrapper">
            <svg class="good__logo" width="88" height="88">
              <use href="@/assets/img/sprite.svg#soul"></use>
            </svg>
          </div>
          <h3 class="good__title">Душа</h3>
          <p class="good__price">Стоимость: <span>25 монет</span></p>
          <AppButton type="button" class="good__button button--red">Установить</AppButton>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.market__goods {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 40px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.market__good {
  width: 236px;
}

.good__logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 128px;
  margin-bottom: 25px;
  color: $orange;
}

.good__logo {
  position: relative;
  filter: drop-shadow(0 8px 90px $orange);
}

.good__title {
  @include info-text;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;
}

.good__price {
  margin: 0;
  margin-bottom: 24px;
  color: $light-blue;
  font-weight: 500;
  text-align: center;

  & span {
    font-weight: 600;
  }
}

.good__button {
  width: 100%;
}

</style>