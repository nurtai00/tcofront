<template>
  <div class="condition_quiz">
    <AtomsHeading type="h3" color="main">
      Проверить на соответствие критериям
    </AtomsHeading>
    <MoleculesForm :onSubmit="onSubmit">
      <p>1. Вы гражданин Республики Казахстан?</p>
      <div>
        <AtomsRadio
          id="yes_citizen"
          v-model="model.citizen"
          name="citizen"
          val="yes"
          class="radio"
        >
          Да
        </AtomsRadio>
        <AtomsRadio
          id="no_citizen"
          v-model="model.citizen"
          name="citizen"
          val="no"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <p>2. Ваш возраст выше 18 лет?</p>
      <div>
        <AtomsRadio
          id="yes_age"
          v-model="model.age"
          name="age"
          val="yes"
          class="radio"
        >
          Да
        </AtomsRadio>
        <AtomsRadio
          id="no_age"
          v-model="model.age"
          name="age"
          val="no"
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
          id="yes_student"
          v-model="model.student"
          name="student"
          val="yes"
          class="radio"
        >
          Да
        </AtomsRadio>
        <AtomsRadio
          id="no_student"
          v-model="model.student"
          name="student"
          val="no"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <p>4. Ваш средний балл (GPA) 3.0 и выше?</p>
      <div>
        <AtomsRadio
          id="yes_gpa"
          v-model="model.gpa"
          name="gpa"
          val="yes"
          class="radio"
        >
          Да
        </AtomsRadio>
        <AtomsRadio
          id="no_gpa"
          v-model="model.gpa"
          name="gpa"
          val="no"
          class="radio"
        >
          Нет
        </AtomsRadio>
      </div>
      <AtomsButton
        v-if="!message.text"
        type="submit"
        :disabled="disabled"
        class="btn"
      >
        Отправить
      </AtomsButton>
      <p v-else class="message" :style="{ color: message.color }">
        {{ message.text }}
      </p>
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
      message: {},
    }
  },
  computed: {
    disabled() {
      let bool = false
      for (let i = 0; i < Object.values(this.model).length; i++) {
        if (Object.values(this.model)[i] === '') {
          bool = true
          break
        }
      }
      return bool
    },
  },
  methods: {
    onSubmit() {
      if (Object.values(this.model).includes('no')) {
        this.message = {
          text: 'К сожалению, вы не соответствовали критериям.',
          color: '#D01D12',
        }
      } else {
        this.message = {
          text: 'Поздравляем, вы соответствовали критериям, можете оставить заявку!',
          color: '#015467',
        }
      }
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
.message {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
</style>
