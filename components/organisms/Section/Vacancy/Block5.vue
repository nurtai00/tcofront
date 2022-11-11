<template>
  <div class="vacancy__fair fair">
    <div class="container">
      <div class="fair__wrapper">
        <AtomsHeading type="h3">
          Мы стремимся развивать ваши таланты
        </AtomsHeading>
        <div class="fair__info">
          <p class="fair__description">
            Ярмарки вакансий ТШО стали одним из основных мероприятий по
            трудоустройству и налаживанию контактов. Каждый год ТШО нанимает
            выдающихся выпускников на инженерные и аналитические должности в
            Атырау и Тенгизе. Ярмарка вакансий ТШО открыта для студентов и
            выпускников всех специальностей и уровней бакалавриата, магистратуры
            и степеней университетов РК и зарубежных университетов и
            стипендиальной программы "Болашак". Такие отделы ТШО, как
            инженерно-технический, здравоохранения, экологии и безопасности,
            финансовый, управления цепочками поставок и информационных
            технологий, а также отдел кадров являются постоянными участниками
            ярмарки вакансий. Ярмарки вакансий организуются и проводятся на
            регулярной основе на территории университетов. Это 2-3-дневное
            мероприятие, включающее тесты на профпригодность и предварительные
            собеседования.
          </p>
          <strong>Критерии участия в ярмарке вакансий ТШО:</strong>
          <strong>
            студент последнего курса бакалавриата / магистратуры
          </strong>
          <strong>- средний балл 3,0 и выше</strong>
        </div>
      </div>
      <div class="fair__list">
        <div class="item">
          <p class="item__description">
            Инженер программы обеспечения надежности на основе риска
          </p>
          <div class="block">
            <span class="block__first">Место работы:</span>
            <span class="block__second">Тенгиз</span>
          </div>
          <div class="block">
            <span class="block__first">Дата закрытия:</span>
            <span class="block__second">22/02/2022</span>
          </div>
        </div>
        <div class="item">
          <p class="item__description">
            Инженер программы обеспечения надежности на основе риска
          </p>
          <div class="block">
            <span class="block__first">Место работы:</span>
            <span class="block__second">Тенгиз</span>
          </div>
          <div class="block">
            <span class="block__first">Дата закрытия:</span>
            <span class="block__second">22/02/2022</span>
          </div>
        </div>
        <div class="item">
          <p class="item__description">
            Инженер программы обеспечения надежности на основе риска
          </p>
          <div class="block">
            <span class="block__first">Место работы:</span>
            <span class="block__second">Тенгиз</span>
          </div>
          <div class="block">
            <span class="block__first">Дата закрытия:</span>
            <span class="block__second">22/02/2022</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fair {
  padding: 80px 0;
  &__wrapper {
    h3 {
      text-align: center;
    }
  }
  &__info {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__description {
    font-size: 20px;
    font-family: Roboto, sans-serif;
    @include phone() {
      font-size: 16px;
      font-weight: 500;
    }
  }
  strong {
    font-size: 20px;
    font-family: Roboto, sans-serif;
    @include phone() {
      font-size: 16px;
    }
  }
  &__list {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    @include tablet() {
      flex-direction: column;
    }
  }
}
.item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgba($c-text, 20%);
  &__description {
    font-size: 18px;
    font-weight: 500;
  }
  .block {
    display: flex;
    gap: 20px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    &__second {
      font-weight: 500;
    }
  }
}
</style>
