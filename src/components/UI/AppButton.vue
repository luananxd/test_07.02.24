<template>
  <button type="button" class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.button {
  padding: 10px;
  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  border-radius: 60px;
  border: none;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
}

.button--red {
  color: $white;
  background: linear-gradient($orange, $red-orange);
  transition-duration: 200ms;
  transition-timing-function: ease-in;

  &:hover {
    background: linear-gradient($red-orange, $red-orange);
  }

  &:active {
    background: linear-gradient($orange, $orange);
  }

  &:disabled {
    background: $gray;
    color: $light-gray;
  }
}

.button--blue {
  color: $blue;
  background: transparent;
  border: 2px solid $blue;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: $black;
    background: $blue;
    box-shadow: 0 10px 40px 0 $dark-blue;
  }

  &:active {
    color: $blue;
    background: transparent;
    box-shadow: none;
  }

  &:disabled {
    border-color: $gray;
    color: $gray;
  }
}

.button--red-border {
  color: $white;
  background: transparent;
  border: 2px solid $orange;
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

  &:disabled {
    border-color: $gray;
    color: $gray;
  }
}
</style>
