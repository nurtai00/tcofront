<template>
  <div class="register">
    <AtomsHeading type="h3" color="black">Регистрация</AtomsHeading>

    <div class="register__rules rules">
      <span class="rules__title">
        Поля, отмеченные <span>*</span>, обязательны для заполнения.
      </span>
      <ul class="rules__list">
        <li class="rules__list-item">
          Чтобы подать заявку на эту вакансию и иметь возможность доступа к
          своему профилю и его изменения в дальнейшем, пожалуйста,
          идентифицируйте себя, указав адрес своей электронной почты и пароль
        </li>
        <li class="rules__list-item">
          Пароль должен содержать как минимум 8 символов, в том числе одну цифру
          и один знак пунктуации.
        </li>
        <li class="rules__list-item">
          Мы будем использовать Ваш электронный адрес для информирования о
          статусе Вашей заявки.
        </li>
      </ul>
    </div>
    <form class="register__form form">
      <AtomsInput
        v-model="registerInput.email"
        outlined
        name="email"
        rules="required|email"
        placeholder="email"
      />
      <AtomsInput
        v-model="registerInput.confirmEmail"
        outlined
        name="confirmEmail"
        :confirmed="registerInput.email"
        rules="required|email"
        placeholder="Подтвердите email"
      />
      <AtomsInput
        v-model="registerInput.password"
        outlined
        type="password"
        name="password"
        rules="required|password"
        placeholder="Пароль"
      />
      <AtomsInput
        v-model="registerInput.confirmPassword"
        outlined
        type="password"
        name="confirmPassword"
        rules="required|password"
        :confirmed="registerInput.password"
        placeholder="Подтвердите пароль"
      />
      <AtomsInput
        v-model="registerInput.surname"
        outlined
        name="surname"
        rules="required|alpha"
        placeholder="Имя (Должны быть заполнены только латинскими буквами)"
      />
      <AtomsInput
        v-model="registerInput.lastName"
        outlined
        name="lastName"
        rules="required|alpha"
        placeholder="Фамилия (Должны быть заполнены только латинскими буквами)"
      />
      <div class="form__radioButtons">
        <span class="form__radioButtons-title">Пол</span>
        <div class="form__radioButtons-block">
          <AtomsRadio
            id="male"
            v-model="registerInput.sex"
            color="blue"
            name="sex"
            val="male"
          >
            Мужчина
          </AtomsRadio>
          <AtomsRadio
            id="female"
            v-model="registerInput.sex"
            color="blue"
            name="sex"
            val="female"
          >
            Женщина
          </AtomsRadio>
        </div>
      </div>
      <AtomsInput
        v-model="registerInput.lastName"
        outlined
        name="lastName"
        rules="required|alpha"
        placeholder="Фамилия (Должны быть заполнены только латинскими буквами)"
      />
      <AtomsInput
        v-model="registerInput.homeTel"
        outlined
        name="homeTel"
        rules="required|tel"
        placeholder="Телефон"
      />
      <AtomsInput
        v-model="registerInput.phoneNumber"
        outlined
        name="phoneNumber"
        rules="required|tel"
        mask="+7 (###) ###-##-##"
        placeholder="Моб. Телефон"
      />
      <AtomsInput
        v-model="registerInput.citizen"
        outlined
        name="citizen"
        rules="required"
        placeholder="Гражданства"
      />
      <AtomsInput
        v-model="registerInput.homeAddress"
        outlined
        name="homeAddress"
        rules="required"
        placeholder="Адрес (Домашний адрес)"
      />
      <AtomsInput
        v-model="registerInput.country"
        outlined
        name="country"
        rules="required"
        placeholder="Страна"
      />
      <span class="form__hint">
        Убедитесь в том, что Вы заполнили все обязательные поля на этой странице
      </span>
      <div class="form__actions">
        <button :disabled="!formIsValid" class="form__actions-button">
          Сохранить и продолжить
        </button>
        <button :disabled="!formIsValid" class="form__actions-button outline">
          Сохранить и вернуться
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerInput: {
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        surname: '',
        lastName: '',
        sex: 'male',
        homeTel: '',
        phoneNumber: '',
        citizen: '',
        homeAddress: '',
        birthDate: '',
        country: '',
      },
    }
  },
  computed: {
    formIsValid() {
      return Object.values(this.registerInput).every(
        (value) => value.length > 0
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.register {
  max-width: 696px;
  .rules {
    margin-top: 20px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 300;
    &__title {
      span {
        color: red;
      }
    }
    &__list {
      padding: 20px;
      &-item {
        color: black;
        list-style: disc;
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  }
}
.form {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__radioButtons {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border-bottom: 1px solid rgba($c-text, 20%);
    &-title {
      font-weight: 600;
      font-size: 18px;
      position: relative;
      color: $c-text;
      &::after {
        content: '*';
        font-size: 14px;
        color: red;
        position: absolute;
        left: 6%;
      }
    }
    &-block {
      margin-top: 20px;
      display: flex;
      gap: 20px;
    }
  }
  &__hint {
    font-size: 20px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
  }
  &__actions {
    display: flex;
    gap: 20px;
    &-button {
      background-color: $c-main;
      color: white;
      padding: 14px 32px;
      border: none;
      border-radius: 4px;
      font-family: Roboto, sans-serif;
      font-weight: 400;
      &.outline {
        background-color: #fff;
        border: 1px solid $c-main;
        color: $c-main;
      }
    }
  }
}
</style>
