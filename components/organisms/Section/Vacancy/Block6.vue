<template>
  <div>
    <div class="info">
      <div class="info__img">
        <AtomsHeading class="info__title-mobile" type="h3">
          Вакансии на ПБР-ПУУД
        </AtomsHeading>
        <img src="@/assets/img/vacancy/block6-1.jpg" alt="block6-1" />
      </div>
      <div class="info__content container">
        <AtomsHeading class="info__title-desktop" type="h3">
          Вакансии на ПБР-ПУУД
        </AtomsHeading>
        <p class="info__description">
          Поиск открытых вакансий Проекта будущего расширения – Проекта
          управления устьевым давлением, а также подача заявок от соискателей
          может быть осуществлена через электронный портал ENBEK.KZ. Подрядчики
          и субподрядчики ПБР-ПУУД ТШО публикуют свои вакансии на указанном
          ресурсе.
        </p>
        <a class="info__link">Перейти на портал ENBEK.KZ</a>
      </div>
    </div>
    <div class="info reverse">
      <div class="info__content container reverse">
        <AtomsHeading class="info__title-desktop" type="h3">
          Мы стремимся развивать ваши таланты
        </AtomsHeading>
        <p class="info__description">
          Ярмарки вакансий ТШО стали одним из основных мероприятий по
          трудоустройству и налаживанию контактов. Каждый год ТШО нанимает
          выдающихся выпускников на инженерные и аналитические должности в
          Атырау и Тенгизе. Ярмарка вакансий ТШО открыта для студентов и
          выпускников всех специальностей и уровней бакалавриата, магистратуры и
          степеней университетов РК и зарубежных университетов и стипендиальной
          программы "Болашак".
        </p>
        <a class="info__link-button">Подробнее
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20"
              r="20"
              transform="rotate(-180 20 20)"
              fill="#00b0f0"
            />
            <path
              d="M17 12.5L24.5 20L17 27.5"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg></a>
        <a class="info__link">Перейти на вакансию</a>
      </div>
      <div class="info__img">
        <AtomsHeading class="info__title-mobile" type="h3">
          Мы стремимся развивать ваши таланты
        </AtomsHeading>
        <img src="@/assets/img/vacancy/block6-2.jpg" alt="block6-1" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info {
  display: flex;
  background-color: #f2f6f7;
  @include tablet() {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
    &__title-desktop {
      display: none;
    }
    &__title-mobile {
      display: block !important;
      position: absolute;
      top: 40px;
      left: 16px;
      color: white;
    }
  }
  &__img {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include tablet() {
      position: relative;
      width: 100%;
      img {
        width: 100%;
        max-height: 218px;
        height: 100%;
      }
    }
  }
  &__content {
    width: 50%;
    padding: 80px calc((100vw - var(--width-container)) / 2) 80px 40px;
    @include tablet() {
      width: 100%;
      padding: 0;
    }
    @media (max-width: 560px) {
      padding: 0 16px !important;
    }
    &.reverse {
      padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
      @include tablet() {
        padding: 0;
      }
    }
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
  }
  &__description {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin: 40px 0;
    @include tablet() {
      font-size: 18px;
      line-height: 24px;
      margin: 20px 0;
    }
  }
  &__title-mobile {
    display: none;
  }
  &__link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #00b0f0;
    @include tablet() {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 20px;
    }
    &-button {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 20px;
      cursor: pointer;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #00b0f0;
      @include tablet() {
        font-size: 16px;
        line-height: 20px;
      }
      svg {
        transition: transform 0.3s ease;
      }
      &:hover {
        svg {
          transform: translateX(10px);
        }
      }
    }
  }
}
</style>
