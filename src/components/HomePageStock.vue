<template>
  <section class="stock section-block">
    <div class="stock__wrapper center-wrapper">
      <span class="stock__number section-number">04</span>
      <h2 class="stock__title section-title">Склад</h2>
      <ul class="stock__components">
        <li class="stock__component component">
          <h3 class="component__title">Имя компонента</h3>
          <p class="component__price">
            Стоимость: <span>5 монет</span>
          </p>
          <span class="component__quantity">3 шт</span>
          <AppButton
            type="button"
            class="component__button button--blue"
          >
            Продать
          </AppButton>
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
