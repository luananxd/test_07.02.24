<template>
  <section class="preview">
    <div class="preview__wrapper center-wrapper">
      <span class="preview__number section-number">01</span>
      <span class="preview__scroll-info">Скролл</span>
      <div class="preview__title-wrapper">
        <h1 class="preview__title">Фабрика по производству биороботов</h1>
        <p class="preview__subtitle">класса "монитор-кресло"</p>
      </div>
      <div class="preview__image-wrapper">
        <picture>
          <!-- <source srcset="@/assets/img/robots-preview.webp 1x, @/assets/img/robots-preview@2x.webp 2x" type="image/webp"> -->
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
@import "@/assets/scss/colors.scss";

.preview {
  height: 100vh;
  padding-top: 192px;
  padding-bottom: 50px;
}

.preview__scroll-info {
  position: absolute;
  top: 225px;
  left: -20px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: $dull-blue;
  transform: rotate(-90deg);
}

.preview__scroll-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: -32px;
  width: 24px;
  height: 24px;
  background-image: url("@/assets/img/arrow.svg");
  transform: rotate(90deg);
}

.preview__wrapper {
  display: flex;
  position: relative;
}

.preview__title-wrapper {
  width: 470px;
  margin-left: 130px;
  margin-right: auto;
}

.preview__title {
  @include h1;
  margin-top: 24px;
  margin-bottom: 24px;
}

.preview__subtitle {
  @include h3;
  margin: 0;
  color: $light-blue;
}

</style>