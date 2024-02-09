<template>
  <section class="installation">
    <div class="installation__wrapper center-wrapper">
      <span class="installation__number section-number">05</span>
      <h2 class="installation__title section-title">Производство</h2>
      <div class="installation__constructor constructor" id="constructor">
        <form class="constructor__form" method="POST" action="#">
          <fieldset class="constructor__parameter parameter">
            <legend class="parameter__title">Тип биоробота:</legend>
            <label class="parameter__label">
              <input class="parameter__input radio" type="radio" name="biorobot-type" value="frontend">
              <span class="parameter__text">FrontEnd</span>
            </label>
            <label class="parameter__label">
              <input class="parameter__input radio" type="radio" name="biorobot-type" value="design">
              <span class="parameter__text">Design</span>
            </label>
          </fieldset>
          <fieldset class="constructor__parameter parameter">
            <legend class="parameter__title">Стабилизатор:</legend>
            <label class="parameter__label">
              <input class="parameter__input radio" type="radio" name="stabilizer" value="male">
              <span class="parameter__text">Male</span>
            </label>
            <label class="parameter__label">
              <input class="parameter__input radio" type="radio" name="stabilizer" value="female">
              <span class="parameter__text">Female</span>
            </label>
          </fieldset>
          <fieldset class="constructor__components components">
            <legend class="visually-hidden">Добавить компоненты для производства</legend>
            <ul class="components__list">
              <li class="components__item components__item--biohand">
                <input type="checkbox" name="biohand-1" checked>
                <span class="visually-hidden">Вернуть биоруку на склад</span>
              </li>
              <li class="components__item components__item--biohand">
                <input type="checkbox" name="biohand-2" checked>
                <span class="visually-hidden">Вернуть биоруку на склад</span>
              </li>
              <li class="components__item components__item--biohand">
                <input type="checkbox" name="biohand-3">
                <span class="visually-hidden">Добавить биоруку</span>
              </li>
              <li class="components__item components__item--biohand">
                <input type="checkbox" name="biohand-4" disabled>
              </li>
            </ul>
            <ul class="components__list">
              <li class="components__item components__item--chip">
                <input type="checkbox" name="chip-1" checked>
                <span class="visually-hidden">Вернуть чип на склад</span>
              </li>
              <li class="components__item components__item--chip">
                <input type="checkbox" name="chip-2">
                <span class="visually-hidden">Добавить чип</span>
              </li>
              <li class="components__item components__item--chip">
                <input type="checkbox" name="chip-3" disabled>
              </li>
              <li class="components__item components__item--chip">
                <input type="checkbox" name="chip-4" disabled>
              </li>
            </ul>
            <ul class="components__list">
              <li class="components__item components__item--soul">
                <input type="checkbox" name="soul">
                <span class="visually-hidden">Добавить душу</span>
              </li>
            </ul>
          </fieldset>
          <div class="counstructor__info">
            <button class="constructor__button button" type="submit">Произвести за 10 монет</button>
            <p class="constructor__description">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
          </div>
        </form>
        <div class="constructor__image-wrapper">
          <img class="constructor__robot" src="@/assets/robots/robot-frontend-male-unavailable.png" alt="Твой робот. Статус: недоступен для производства" width="236" height="320">
        </div>
      </div>
    </div>
  </section>
</template>
