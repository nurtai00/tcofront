<template>
  <div class="conditions container">
    <AtomsHeading type="h3" color="main">
      Обязательные условия для прохождения учебной практики в ТОО
      «ТЕНГИЗШЕВРОЙЛ»
    </AtomsHeading>
    <AtomsTag
      class="tag"
      :tag="{
        text: 'Проверить на соответствие критериям',
        selected: true,
      }"
      @click="showMod"
    />
    <div class="conditions_cards">
      <MoleculesCardPopUpCard
        v-for="(condition, idx) in conditions"
        :key="idx"
        :item="condition"
      />
    </div>
    <div class="conditions_small_info">
      <p>
        *Пожалуйста, ознакомьтесь с критериями для прохождения онлайн практики и
        предоставьте необходимые документы. См. во вложениях.
      </p>
      <p>
        Все документы необходимо выслать на эл. адрес –
        <span>tcointern@tengizchevroil.com</span>
      </p>
      <ul>
        <li>Заявление должно быть подписано</li>
        <li>Транскрипт- официальная версия с печатью и подписью</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conditions: [
        {
          id: '01',
          title:
            'Критерии кандидата для получения возможности прохождения учебной практики',
          text: '<ol><li>Гражданин Республики Казахстан, достигший 18-ти лет</li><li>Студент ВУЗа (Республики Казахстан, Российской Федерации, <br/>дальнего зарубежья) окончивший 2-ой / 3-ий курс очной формы обучения;</li><li>Средний балл успеваемости (GPA) в транскрипте  последней сессии  академического года должен составлять не ниже 3-х баллов из 4-х.</li></ol>',
          modal: 'Default',
        },
        {
          id: '02',
          title: 'Необходимые документы кандидата–сканированные копии',
          text: '<ol><li>Заявление по форме – (см. во вложении)</li><li>Удостоверение личности / паспорт – электронная сканированная версия;</li><li>Подтверждение о месте регистрации (выписка с eGoV)</li><li>Транскрипт с оценками со средним баллом GPA за последний академический год, включая последнюю сессию;</li><li>Справка о прохождении медосмотра по форме №075 – Предоставить после получения уведомления ТШО о принятии на учебную практику– срок прохождения не позже 2 недель до начала практики.</li></ol>',
          modal: 'Default',
        },
        {
          id: '03',
          title: 'Необходимое оборудование для прохождения онлайн практики:',
          text: '<ol><li>Персональный компьютер с официальной версией Windows 10, с последними обновлениями.</li> <li>Высокая скорость интернета</li> <li>Смартфон (Android, IOS)</li></ol>',
          modal: 'Default',
        },
      ],
    }
  },
  methods: {
    showMod() {
      this.$modal.add({ title: 'ConditionQuiz' })
    },
  },
}
</script>

<style lang="scss" scoped>
.conditions {
  width: 100%;
  padding: 80px 0;
  h3 {
    margin-bottom: 40px;
  }
}
.tag::v-deep {
  padding: 16px 20px !important;
  margin: 0;
  margin-bottom: 38px !important;
}
.conditions_cards {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 24px;
}
.conditions_small_info {
  width: 100%;
  background: #f2f6f7;
  padding: 40px;
  margin-top: 40px;
  p {
    color: #30454e;
    margin-bottom: 8px;
    span {
      font-weight: 600;
      color: #00b0f0;
    }
  }
  ul {
    padding-left: 30px;
    li {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
      list-style-type: disc;
    }
  }
}
</style>
