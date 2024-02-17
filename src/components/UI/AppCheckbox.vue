<template>
  <label class="coins__label checkbox">
    <input
      class="checkbox__input visually-hidden"
      type="checkbox"
      :name="$attrs.name"
      :checked="isChecked"
      @change="isChecked = !isChecked"
    >
    <p class="checkbox__text"><slot /></p>
  </label>
</template>

<script setup>
const isChecked = defineModel('isChecked');
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:has(.checkbox__input:checked)::after {
    display: block;
  }

  &:hover::before {
    border-color: $gray;
  }

  &:hover::after {
    opacity: 0.5;
  }
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

.checkbox__text {
  display: block;
  width: 100%;
  margin: 0;
  word-wrap: break-word;
}
</style>
