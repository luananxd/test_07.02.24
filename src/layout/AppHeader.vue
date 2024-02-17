<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__logo logo">
        <svg class="logo__icon" viewBox="0 0 78 48" width="78" height="48" role="img" aria-label="Логотип фабрики биороботов">
          <use href="/sprite.svg#logo" />
        </svg>
      </div>
      <a href="#constructor" class="page-header__button">
        Произвести биоробота
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 48px 0;

  @media(max-width: $tablet-max) {
    padding: 24px 0;
  }
}

.page-header__wrapper {
  display: flex;
  width: 1016px;
  margin: 0 auto;

  @media(max-width: $pc-max) {
    width: 74%;
    min-width: 756px;
  }

  @media(max-width: $tablet-max) {
    width: 65%;
    min-width: 496px;
  }

  @media(max-width: $phone-max) {
    width: 74%;
    min-width: 236px;
  }
}

.page-header__logo {
  height: 48px;
  margin-right: auto;

  @media(max-width: $phone-max) {
    display: none;
  }
}
.logo__icon {
  color: $orange;
}

.page-header__button {
  display: block;
  min-width: 236px;
  padding: 10px 14px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: $white;
  text-align: center;
  text-decoration: none;
  border: 2px solid $orange;
  border-radius: 60px;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: $red-orange;
    border-color: $red-orange;
  }

  &:active {
    background-color: $orange;
    border-color: $orange;
  }

  &:focus-visible {
    outline: 3px solid $violet;
  }

  @media(max-width: $phone-max) {
    width: 100%;
  }
}
</style>
