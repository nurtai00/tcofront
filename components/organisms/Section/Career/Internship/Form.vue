<template>
  <div class="form">
    <div class="mobile">
      <img src="@/assets/img/career/programm_mobile.png" alt="" />
      <AtomsHeading type="h3" color="white">
        ФОРМА СОГЛАСИЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
      </AtomsHeading>
    </div>
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
            id="checked"
            :value="checked"
            class="checkbox"
            @change="
              (val) => {
                checked = val
              }
            "
          >
            Я осведомлен(а), что мои персональные данные будут уничтожены по
            умолчанию через 6 месяцев с момента подачи заявки на учебную
            практику. Настоящим я подтверждаю, что ознакомился(лась) с Формой
            согласия на обработку персональных данных ТОО "Тенгизшевройл" и
            соглашаюсь со всеми его условиями.
          </AtomsCheckbox>
          <AtomsButton :disabled="disabled">
            Сохранить и продолжить
          </AtomsButton>
        </div>
      </div>
    </div>
    <img
      src="@/assets/img/career/form.png"
      alt=""
      srcset=""
      class="rigth_img"
    />
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
  .rigth_img {
    position: absolute;
    width: 50%;
    height: 100%;
    object-fit: cover;
    top: 0;
    right: 0;
    @include tablet() {
      display: none;
    }
  }
  @include tablet() {
    .container {
      padding: 0 !important;
      max-width: 100%;
    }
  }
}
.mobile {
  position: relative;
  display: none;
  h3 {
    position: absolute;
    top: 40px;
    left: 16px;
  }
  img {
    width: 100%;
    height: auto;
    min-height: 200px;
    object-fit: cover;
  }
  @include tablet() {
    display: flex;
  }
}
.form_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  padding-right: calc(50% + 20px);
  @include tablet() {
    padding: 20px 16px;
  }
  h3 {
    max-width: 578px;
    margin-bottom: 40px;
    @include tablet() {
      display: none;
    }
  }
  div {
    max-width: 548px;
    @include tablet() {
      max-width: 100%;
      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
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
    @include tablet() {
      font-size: 16px;
      line-height: 22px;
    }
  }
}

@include tablet() {
  .btn {
    width: 100%;
    padding: 12px 24px;
  }
}
</style>
