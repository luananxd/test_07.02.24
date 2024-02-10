<template>
  <section class="installation section-block">
    <div class="installation__wrapper center-wrapper">
      <span class="installation__number section-number section-number--installation">05</span>
        <h2 class="installation__title section-title">Производство</h2>
        <div class="installation__constructor constructor" id="constructor">
          <form class="constructor__form" method="POST" action="#">
            <div class="constructor__body">
              <div class="constructor__settings">
                <fieldset class="constructor__parameter parameter">
                  <legend class="parameter__title">Тип биоробота:</legend>
                  <div class="parameter__wrapper">
                    <AppRadio class="parameter__label">FrontEnd</AppRadio>
                    <AppRadio class="parameter__label">Design</AppRadio>
                  </div>
                </fieldset>
                <fieldset class="constructor__parameter parameter">
                  <legend class="parameter__title">Стабилизатор:</legend>
                  <div class="parameter__wrapper">
                    <AppRadio class="parameter__label">Male</AppRadio>
                    <AppRadio class="parameter__label">Female</AppRadio>
                  </div>
                </fieldset>
              </div>
              <fieldset class="constructor__components components">
                <legend class="visually-hidden">Добавить компоненты для производства</legend>
                <ul class="components__list">
                  <li>
                    <label class="components__item components__item--biohand">
                      <svg class="components__logo" width="36" height="24">
                        <use href="@/assets/img/sprite.svg#biohand"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="biohand-1" checked>
                      <span class="visually-hidden">Вернуть биоруку на склад</span>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--biohand">
                      <svg class="components__logo" width="36" height="24">
                        <use href="@/assets/img/sprite.svg#biohand"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="biohand-2" checked>
                      <span class="visually-hidden">Вернуть биоруку на склад</span>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--biohand">
                      <svg class="components__logo" width="36" height="24">
                        <use href="@/assets/img/sprite.svg#biohand"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="biohand-3">
                      <span class="visually-hidden">Добавить биоруку</span>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--biohand">
                      <svg class="components__logo" width="36" height="24">
                        <use href="@/assets/img/sprite.svg#biohand"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="biohand-4" disabled>
                    </label>
                  </li>
                </ul>
                <ul class="components__list">
                  <li>
                    <label class="components__item components__item--chip">
                      <svg class="components__logo" width="24" height="24">
                        <use href="@/assets/img/sprite.svg#chip"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="chip-1" checked>
                      <span class="visually-hidden">Вернуть чип на склад</span>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--chip">
                      <svg class="components__logo" width="24" height="24">
                        <use href="@/assets/img/sprite.svg#chip"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="chip-2">
                      <span class="visually-hidden">Добавить чип  У вас есть: 1</span>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--chip">
                      <svg class="components__logo" width="24" height="24">
                        <use href="@/assets/img/sprite.svg#chip"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="chip-3" disabled>
                    </label>
                  </li>
                  <li>
                    <label class="components__item components__item--chip">
                      <svg class="components__logo" width="24" height="24">
                        <use href="@/assets/img/sprite.svg#chip"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="chip-4" disabled>
                    </label>
                  </li>
                </ul>
                <ul class="components__list">
                  <li>
                    <label class="components__item components__item--soul">
                      <svg class="components__logo" width="32" height="32">
                        <use href="@/assets/img/sprite.svg#soul"></use>
                      </svg>
                      <input class="visually-hidden" type="checkbox" name="soul">
                      <span class="visually-hidden">Добавить душу. У вас есть: 1</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div class="constructor__info">
              <AppButton class="constructor__button button--red-border" type="submit" disabled>Произвести за 10 монет</AppButton>
              <p class="constructor__description">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
            </div>
          </form>
          <div class="constructor__image-wrapper">
            <img class="constructor__robot" src="@/assets/img/robots/robot-frontend-male-unavailable.png" alt="Твой робот. Статус: недоступен для производства" width="236" height="320">
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.installation {
  padding-bottom: 205px;
}

.installation__title {
  line-height: 72px;
}

.installation__constructor {
  width: 756px;

  @media(max-width: $tablet-max) {
    width: 496px;
  }

  @media(max-width: 650px) {
    width: 236px;
  }
}

// Конструктор

.constructor {
  display: grid;
  grid-template-columns: 482px 236px;
  column-gap: 38px;

  @media(max-width: 650px) {
    grid-template-columns: 234px 236px;
    column-gap: 28px;
  }

  @media(max-width: $phone-max) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
  }
}

.constructor__form {
  display: flex;
  flex-direction: column;
}

.constructor__body {
  display: grid;
  grid-template-columns: 229px 222px;
  column-gap: 28px;
  margin-bottom: 61px;

  @media(max-width: 650px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
}

.constructor__settings {
  @include second-text;
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media(max-width: 650px) {
    margin-bottom: 44px;
  }
}

.parameter {
  margin: 0;
  padding: 0px;
  border: none;
}

.parameter__title {
  @include medium-text;
  margin-bottom: 28px;
  padding: 0;
}

.parameter__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 99px);
  gap: 32px;
}

.components {
  margin: 0;
  padding: 0;
  border: none;
}

.components__list {
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

.components__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: $white;
  background-color: $dark-gray;

  &:has(input:checked) {
    color: $orange;
    background-color: transparent;
    border: 2px solid $orange;
    border-radius: 4px;
  }

  &:has(input:disabled) {
    color: $gray;
  }
}

.constructor__info {
  display: flex;
  align-items: start;
  column-gap: 28px;

  @media(max-width: 650px) {
    flex-direction: column-reverse;
  }
}

.constructor__button {
  min-width: 236px;
}

.constructor__description {
  @include second-text;
  width: 222px;
  margin: 0;

  @media(max-width: 650px) {
    margin-bottom: 20px;
  }
}

.constructor__image-wrapper {
  @media(max-width: $phone-max) {
    width: 236px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.constructor__image-wrapper img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

// radio

.radio {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
}

.radio::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: 2px solid $light-blue;
  border-radius: 50%;
}

.radio::after {
  content: "";
  display: none;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-color: $orange;
  border-radius: 50%;
}

.radio:has(.radio__input:checked)::after {
  display: block;
}

.radio__text {
  margin: 0;
}
</style>