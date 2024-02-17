<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<template>
  <div
    v-if="props.showModal"
    class="modal"
    autofocus
    tabindex="-1"
    role="dialog"
    @click.self="emit('close')"
    @keydown.esc="emit('close')"
  >
    <div class="modal__body">
      <span
        v-if="props.iconPath"
        class="modal__icon"
        :style="`background-image: url(${props.iconPath});`"
      />
      <h2 class="modal__title">
        <slot name="title" />
      </h2>
      <div class="modal__text">
        <slot name="text" />
      </div>
      <button
        class="modal__close close-button"
        type="button"
        @click="emit('close')"
      >
        <span class="visually-hidden">Закрыть модальное окно</span>
        <svg class="close-button__icon" width="14" height="14">
          <use href="/sprite.svg#close" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  iconPath: {
    type: String,
    required: false,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  color: $black;
  background-color: rgba(26, 26, 26, 0.67);
}

.modal__body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 496px;
  min-height: 240px;
  padding-top: 33px;
  padding-bottom: 40px;
  padding-left: 106px;
  padding-right: 70px;
  background-color: $white;
  border-radius: 10px;

  @media(max-width: $phone-max) {
    width: 236px;
    min-height: 200px;
    padding: 15px;
    padding-top: 82px;
    padding-bottom: 30px;
    text-align: center;
  }
}

.modal__icon {
  position: absolute;
  top: 48px;
  left: 34px;
  width: 52px;
  height: 52px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  @media(max-width: $phone-max) {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.modal__title {
  @include h2;
  margin: 0;
  margin-bottom: 23px;

  @media(max-width: $phone-max) {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
  }
}

.modal__text {
  @include info-text;
  margin: 0;
  color: $gray;
}

.modal__close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  color: $orange;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition-duration: 200ms;
  transition-timing-function: ease-in;

  &:hover {
    color: $red-orange;
    background-color: #efefef;
  }
}
</style>
