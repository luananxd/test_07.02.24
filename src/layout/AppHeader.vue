<template>
  <header class="page-header">
    <div class="page-header__wrapper center-wrapper">
      <div class="page-header__logo logo">
        <svg class="logo__icon" viewBox="0 0 78 48" width="78" height="48">
          <use href="@/assets/img/sprite.svg#logo"></use>
        </svg>
      </div>
      <a href="#constructor" class="page-header__button">
        Произвести биоробота
      </a>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 48px 0;
}

.page-header__wrapper {
  display: flex;
}

.page-header__logo {
  margin-right: auto;
}
.logo__icon {
  color: $orange;
}

.page-header__button {
  display: block;
  padding: 12px 18px;
  @include normal-text;
  color: $white;
  text-decoration: none;
  border: 2px solid $orange;
  border-radius: 60px;

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
}
</style>
