<template>
  <div class="condition_quiz">
    <AtomsHeading type="h3" color="main">
      Проверить на соответствие критериям
    </AtomsHeading>
    <MoleculesForm :onSubmit="onSubmit">
      <p>1. Вы гражданин Республики Казахстан?</p>
      <div>
        <AtomsRadio
          v-model="model.citizen"
          name="citizen"
          val="yes"
          id="yes_citizen"
          class="radio"
          >Да</AtomsRadio
        >
        <AtomsRadio
          v-model="model.citizen"
          name="citizen"
          id="no_citizen"
          val="no"
          class="radio"
          >Нет</AtomsRadio
        >
      </div>
      <p>2. Ваш возраст выше 18 лет?</p>
      <div>
        <AtomsRadio
          v-model="model.age"
          name="age"
          val="yes"
          id="yes_age"
          class="radio"
          >Да</AtomsRadio
        >
        <AtomsRadio
          v-model="model.age"
          name="age"
          val="no"
          id="no_age"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <p>
        3. Вы студент Высшего учебного заведения закончивший два полноценных
        учебных года?
      </p>
      <div>
        <AtomsRadio
          v-model="model.student"
          name="student"
          val="yes"
          id="yes_student"
          class="radio"
          >Да</AtomsRadio
        >
        <AtomsRadio
          v-model="model.student"
          name="student"
          val="no"
          id="no_student"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <p>4. Ваш средний балл (GPA) 3.0 и выше?</p>
      <div>
        <AtomsRadio
          v-model="model.gpa"
          name="gpa"
          val="yes"
          id="yes_gpa"
          class="radio"
          >Да</AtomsRadio
        >
        <AtomsRadio
          v-model="model.gpa"
          name="gpa"
          val="no"
          id="no_gpa"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <AtomsButton type="submit">Отправить</AtomsButton>
    </MoleculesForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        citizen: '',
        age: '',
        student: '',
        gpa: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.model)
    },
  },
}
</script>

<style lang="scss" scoped>
.condition_quiz {
  h3 {
    margin-bottom: 40px;
    margin-top: 52px;
  }
  p {
    font-weight: 400;
    margin-bottom: 16px;
  }
  div {
    width: 100%;
    max-width: 225px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
}
</style>
