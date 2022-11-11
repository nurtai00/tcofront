<template>
  <div v-if="false" class="vacancy__search">
    <div class="container">
      <div class="vacancy__content content">
        <div class="content__actions">
          <AtomsTag :tag="{ text: 'Поиск вакансий', selected: true }" />
          <AtomsTag :tag="{ text: 'Вход' }" />
        </div>
        <div class="content__select">
          <div class="content__select-action">
            <label>Подразделение / Группа</label>
            <v-select
              v-model="selectValue"
              style="width: 500px"
              :options="options"
              label="text"
              :close-on-select="!isKeyDowned"
              :multiple="isMultiple"
              :clearable="false"
            />
          </div>
          <span>(Удерживайте клавишу Ctrl для выбора нескольких опций)</span>
          <button class="content__select-button">поиск</button>
        </div>
        <VacancyTable :items="mockList" />
        <div class="content__subscribe">
          <span>Не нашли подходящую должность?</span>
          <button>Подпишитесть на Оповещение о вакансиях</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VacancyTable from 'organisms/Section/Vacancy/VacancyTable'
export default {
  components: { VacancyTable },
  data() {
    return {
      isKeyDowned: false,
      isMultiple: false,
      selectValue: { text: 'Все', id: 1 },
      mockList: Array.from(
        { length: 5 },
        (_, index) => index * Date.now() + Math.random()
      ),
      options: [
        { text: 'Все', id: 1 },
        { text: 'Генеральный Директор ТШО', id: 2 },
        { text: 'Договорно правовой', id: 3 },
        { text: 'Маркетинг и транспортировка', id: 4 },
        { text: 'Производства', id: 5 },
        { text: 'Производства / Разработка месторождений', id: 6 },
        { text: 'Производства / Разработка месторождений', id: 7 },
        { text: 'Производства / Разработка месторождений', id: 8 },
      ],
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDownHandler)
    document.addEventListener('keyup', this.onKeyUpHandler)
  },
  destroyed() {
    document.removeEventListener('keydown', this.onKeyDownHandler)
    document.removeEventListener('keyup', this.onKeyUpHandler)
  },
  methods: {
    onKeyDownHandler(event) {
      if (event.key === 'Control') {
        this.isKeyDowned = true
        this.isMultiple = true
      }
    },
    onKeyUpHandler(event) {
      if (event.key === 'Control') {
        this.isKeyDowned = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.vacancy {
  &__search {
    margin: 40px 0;
  }
}
.content {
  &__select {
    display: flex;
    flex-direction: column;
    width: 50%;
    &-button {
      margin-top: 5px;
      color: #fff;
      background-color: $c-main;
      padding: 5px;
      border: none;
      width: 75px;
      border-radius: 5px;
      font-weight: 500;
      align-self: center;
    }
    &-action {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    span {
      display: block;
      margin-top: 20px;
    }
  }
  &__subscribe {
    margin-top: 40px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
