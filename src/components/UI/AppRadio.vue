<template>
  <label class="parameter__label radio">
    <input class="radio__input visually-hidden" type="radio" name="biorobot-type" value="frontend" checked>
    <span class="radio__text"><slot /></span>
  </label>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

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