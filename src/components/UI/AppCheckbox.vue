<template>
  <label class="coins__label checkbox">
    <input class="checkbox__input visually-hidden" type="checkbox" name="enable-modificator">
    <p class="checkbox__title"><slot /></p>
  </label>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

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