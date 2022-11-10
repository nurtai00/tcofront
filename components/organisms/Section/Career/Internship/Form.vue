<template>
  <div class="form">
    <div class="container">
      <div class="form_content">
        <AtomsHeading type="h3" color="main">
          ФОРМА СОГЛАСИЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
        </AtomsHeading>
        <div>
          <p>
            Настоящим я даю согласие на обработку уполномоченным лицам ТШО моих
            персональных данных и справки о прохождении мед.осмотра по форме
            №086 , связанных с целью участия в программе учебной практики ТШО.
          </p>
          <AtomsCheckbox
            :value="checked"
            @change="
              (val) => {
                checked = val
              }
            "
            id="checked"
            class="checkbox"
          >
            Я осведомлен(а), что мои персональные данные будут уничтожены по
            умолчанию через 6 месяцев с момента подачи заявки на учебную
            практику. Настоящим я подтверждаю, что ознакомился(лась) с Формой
            согласия на обработку персональных данных ТОО "Тенгизшевройл" и
            соглашаюсь со всеми его условиями.
          </AtomsCheckbox>
          <AtomsButton :disabled="disabled">
            Сохранить и продолжить</AtomsButton
          >
        </div>
      </div>
    </div>
    <img src="@/assets/img/career/form.png" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
  computed: {
    disabled() {
      return !this.checked
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  width: 100%;
  background: #f2f6f7;
  img {
    position: absolute;
    width: 50%;
    height: auto;
    max-height: 766px;
    object-fit: cover;
    top: 0;
    right: 0;
  }
}
.form_content {
  width: 100%;
  min-height: 766px;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  h3 {
    max-width: 578px;
    margin-bottom: 40px;
  }
  div {
    max-width: 548px;
  }
}
.checkbox {
  margin: 20px 0;
}
.checkbox::v-deep {
  align-items: flex-start;
  span {
    width: calc(100% - 32px);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
  }
}
</style>
