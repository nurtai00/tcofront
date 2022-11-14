<template>
  <div class="vacancyModal">
    <div class="vacancyModal__info">
      <div class="vacancyModal__info-item item">
        <span class="item__first">Номер вакансий</span>
        <span class="item__second">5077</span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">Название должности</span>
        <span class="item__second">
          Инженер программы обеспечения надежности на основе риска
        </span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">Поодразделение / группа</span>
        <span class="item__second">
          Инженер программы обеспечения надежности на основе риска
        </span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">Место работы</span>
        <span class="item__second"> Тенгиз </span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">График работы</span>
        <span class="item__second"> 28/28 </span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">Дата закрытия</span>
        <span class="item__second"> 28/28 </span>
      </div>
      <div class="vacancyModal__info-item item">
        <span class="item__first">Должностная инструкция</span>
        <span class="item__second">
          <span>JD-RBIEngineer_Openpositionnotificationform_FGP.docx</span>
        </span>
      </div>
      <button class="vacancyModal__info-button">Подать заявку</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vacancyModal {
  padding: 20px;
  &__info {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-item {
      display: flex;
      align-items: center;
    }
    .item {
      @include phone {
        flex-wrap: wrap;
        gap: 10px;
      }
      &__first {
        margin-right: 10px;
        width: 50%;
        @include tablet() {
          font-size: 12px;
        }
      }
      &__second {
        font-weight: 600;
        width: 50%;
        @include tablet() {
          width: 100%;
          font-size: 12px;
        }
      }
    }
    &-button {
      align-self: flex-start;
      background-color: $c-main;
      border: none;
      border-radius: 4px;
      padding: 14px 32px;
      font-weight: 500;
      color: white;
      @include phone {
        align-self: center;
      }
    }
  }
}
</style>
