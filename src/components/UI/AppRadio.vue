<template>
  <label class="parameter__label radio">
    <input
      v-model="link"
      class="radio__input visually-hidden"
      type="radio"
      :name="$attrs.name"
      :value="$attrs.value"
    >
    <span class="radio__text"><slot /></span>
  </label>
</template>

<script setup>
const link = defineModel('link');
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/colors.scss";

.radio {
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:has(.radio__input:checked)::after {
    display: block;
  }

  &:hover::before {
    border-color: $gray;
  }

  &:hover::after {
    opacity: 0.5;
  }
}

.radio::before {
  content: "";
  position: absolute;
  top: 8px;
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
  top: 8px;
  left: 4px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-color: $orange;
  border-radius: 50%;
}

.radio__text {
  display: block;
  width: 100%;
  margin: 0;
  word-wrap: break-word;
}
</style>
