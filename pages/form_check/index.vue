<template>
  <MoleculesForm :onSubmit="submit">
    <AtomsInput
      v-model="name"
      name="Имя"
      placeholder="name"
      :mask="{mask: 'T', custom: [{ symbol: 'T', pattern: /^\d+$/, rule: (v) => +v > 30 }]}"
    />
    <AtomsInput
      v-model="surname"
      name="Фамилия"
      rules="required|min:3"
      clearable
      placeholder="surname"
    />
    <AtomsInput
      v-model="email"
      name="Почта"
      rules="required|email"
      clearable
      styleType="animate"
      placeholder="email"
    />
    <AtomsInput
      id="password"
      v-model="password"
      type="password"
      placeholder="password"
      name="Пароль"
      rules="required|password"
      clearable
    />
    <AtomsInput
      v-model="passwordRepeat"
      type="password"
      name="Повторите пароль"
      rules="required|password"
      :confirmed="password"
    />
    <MoleculesSelect :model="city" :options="list" required @change="onList" />
    <AtomsCheckbox id="fuckyou" v-model="cond" required clearable />
    <AtomsInput
      v-model="description"
      placeholder="description"
      textarea
      name="Описание"
      rules="required|max:200|alpha"
      clearable
      styleType="placeholder"
    />
    <AtomsButton type="submit">submit</AtomsButton>
  </MoleculesForm>
</template>

<script>
/**
 * 'PAGES/form_check'
 * @displayName form_check
 */
export default {
  name: 'FormCheck',
  data: () => ({
    name: '5671',
    surname: 'a',
    email: '',
    password: '',
    passwordRepeat: '',
    cond: false,
    city: '',
    description: '',
    list: [
      {
        id: 0,
        name: 'Выберите ваш город',
      },
      {
        id: 1,
        name: 'Москва',
      },
      {
        id: 2,
        name: 'Санкт-Петербург',
      },
      {
        id: 3,
        name: 'Новосибирск',
      },
      {
        id: 4,
        name: 'Екатеринбург',
      },
      {
        id: 5,
        name: 'Нижний Новгород',
      },
      {
        id: 6,
        name: 'Казань',
      },
      {
        id: 7,
        name: 'Челябинск',
      },
    ],
  }),
  methods: {
    submit() {
      console.log('submit')
    },
    onList(e) {
      this.city = e
    },
  },
}
</script>

<style lang="scss" scoped></style>
