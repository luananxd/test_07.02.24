<template>
  <section class="preview">
    <div class="preview__wrapper center-wrapper">
      <span class="preview__number section-number section-number--preview">01</span>
      <span class="preview__scroll-info">Скролл</span>
      <div class="preview__title-wrapper">
        <h1 class="preview__title">
          Фабрика по производству биороботов
        </h1>
        <p class="preview__subtitle">
          класса «монитор-кресло»
        </p>
      </div>
      <div class="preview__image-wrapper">
        <picture>
          <source srcset="@/assets/img/robots-preview.webp 1x, @/assets/img/robots-preview@2x.webp 2x" type="image/webp">
          <source srcset="@/assets/img/robots-preview@2x.png 2x" type="image/png">
          <img class="preview__image" src="@/assets/img/robots-preview.png" alt="Два робота: синий и оранжевый" width="366" height="320">
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/scss/text-style.scss";
@import "@/assets/scss/device-width.scss";
@import "@/assets/scss/colors.scss";

.preview {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 560px;

  @media(max-width: $pc-max) {
    height: auto;
    min-height: 0px;
    padding-top: 196px;
    padding-bottom: 40px;
  }

  @media(max-width: $tablet-max) {
    padding-top: 152px;
  }

  @media(max-width: $phone-max) {
    padding-top: 132px;
  }
}

.preview__scroll-info {
  position: absolute;
  top: 220px;
  left: -20px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: $dull-blue;
  transform: rotate(-90deg);

  @media(max-width: $pc-max) {
    display: none;
  }
}

.preview__scroll-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: -40px;
  width: 24px;
  height: 24px;
  background-image: url("@/assets/img/arrow.svg");
  transform: rotate(90deg);
}

.preview__wrapper {
  display: flex;
  column-gap: 50px;

  @media(max-width: $pc-max) {
    column-gap: 24px;
  }

  @media(max-width: $tablet-max) {
    column-gap: 10px;
  }

  @media(max-width: $phone-max) {
    flex-direction: column-reverse;
    align-items: center;
    column-gap: 0;
  }
}

.preview__title-wrapper {
  width: 470px;
  margin-right: auto;

  @media(max-width: $pc-max) {
    width: 66%;
    min-width: 496px;
  }

  @media(max-width: $tablet-max) {
    width: 52%;
    min-width: 259px;
  }

  @media(max-width: $phone-max) {
    margin: 0;
    width: 100%;
  }
}

.preview__title {
  @include h1;
  margin-top: 24px;
  margin-bottom: 24px;

  @media(max-width: $phone-max) {
    text-align: center;
  }
}

.preview__subtitle {
  @include h3;
  margin: 0;
  color: $light-blue;

  @media(max-width: $pc-max) {
    @include info-text;
  }

  @media(max-width: $phone-max) {
    display: none;
  }
}

.preview__image-wrapper {
  width: 366px;
  height: 320px;

  @media(max-width: $pc-max) {
    width: 31%;
    min-width: 236px;
    height: 206px;
  }

  @media(max-width: $tablet-max) {
    width: 48%;
    min-width: 226px;
  }
}

.preview__image-wrapper img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

</style>
