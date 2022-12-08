<template>
  <div class="fair">
    <div class="container">
      <AtomsHeading type="h3">
        Мы стремимся развивать ваши таланты
      </AtomsHeading>
      <div class="fair__info">
        <p>
          Ярмарки вакансий ТШО стали одним из основных мероприятий по
          трудоустройству и налаживанию контактов. Каждый год ТШО нанимает
          выдающихся выпускников на инженерные и аналитические должности в
          Атырау и Тенгизе. Ярмарка вакансий ТШО открыта для студентов и
          выпускников всех специальностей и уровней бакалавриата, магистратуры и
          степеней университетов РК и зарубежных университетов и стипендиальной
          программы "Болашак". Такие отделы ТШО, как инженерно-технический,
          здравоохранения, экологии и безопасности, финансовый, управления
          цепочками поставок и информационных технологий, а также отдел кадров
          являются постоянными участниками ярмарки вакансий. Ярмарки вакансий
          организуются и проводятся на регулярной основе на территории
          университетов. Это 2-3-дневное мероприятие, включающее тесты на
          профпригодность и предварительные собеседования.
        </p>
        <p><strong>Критерии участия в ярмарке вакансий ТШО:</strong></p>
        <p>
          <strong>
            студент последнего курса бакалавриата / магистратуры
          </strong>
        </p>
        <p><strong>- средний балл 3,0 и выше</strong></p>
      </div>
      <div class="fair__list">
        <div class="item" @click="openVacancy">
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
        <div class="item" @click="openVacancy">
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
        <div class="item" @click="openVacancy">
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
<script>
export default {
  methods: {
    openVacancy() {
      this.$modal.add({
        title: 'VacancyModal',
        payload: { modal: 'VacancyModal' },
        type: 'centered',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.fair {
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
  }
  h3 {
    text-align: center;
    @include tablet() {
      text-align: left;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    grid-gap: 20px;
    @include tablet() {
      margin-top: 20px;
      grid-gap: 10px;
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  &__list {
    display: flex;
    margin-top: 40px;
    grid-gap: 20px;
    @include tablet() {
      flex-direction: column;
      margin-top: 20px;
    }
  }
}
.item {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px;
  border: 1px solid rgba($c-text, 20%);
  cursor: pointer;
  @include tablet() {
    grid-gap: 16px;
  }
  &__description {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }
  .block {
    display: flex;
    grid-gap: 20px;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
      grid-gap: 10px;
    }
    &__second {
      font-weight: 600;
    }
  }
}
</style>
