<template>
  <div class="declaration">
    <div class="container">
      <AtomsHeading type="h3">Декларация</AtomsHeading>
      <div class="content">
        <div>
          <div class="description">
            <p>ФОРМА СОГЛАСИЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
            <p>
              Настоящим я подтверждаю, что ознакомился(лась) с Положением о
              конфиденциальности персональных данных ТОО «Тенгизшевройл» (далее
              – «ТШО») (Ссылка: http://www.tengizchevroil.com/ru/privacy), и
              соглашаюсь со всеми его условиями.
            </p>
            <p>
              Я даю согласие на обработку ТШО моих персональных данных в
              законных деловых целях, связанных с привлечением и отбором кадров.
            </p>
            <p>
              Я даю согласие на передачу за рубеж своих персональных данных,
              предоставленных в ходе данного процессa онлайн регистрации и (или)
              подачи заявки, и извещен(а) о том, что они будут храниться на
              серверах компании «Интернет Корпорэйшн Лимитед», Великобритания, с
              обеспечением их надлежащей защиты, и будут обрабатываться
              исключительно в соответствии с указаниями ТШО.
            </p>
            <p>
              Я извещен(а), что в случае необходимости я имею право в любое
              время обновить мои персональные данные через онлайн профиль, или
              просить их уничтожения до истечения указанного ниже срока,
              обратившись по следующему электронному адресу:
              rectechsup@tengizchevroil.com.
            </p>
            <p>
              Я осведомлен(а), что мои персональные данные будут уничтожены по
              умолчанию через 36 месяцев (3 года) с момента последнего
              обновления моего профиля.
            </p>
            <p>
              Мне также известно, что в случае, если мне будет предложена
              работа, от меня потребуется документальное подтверждение
              предоставленных мной данных для их дополнительной проверки
              согласно процедурам ТШО по найму персонала.
            </p>
            <p>
              Я подтверждаю, что предоставленная мной информация (в том числе
              содержащая персональные данные) является достоверной, правильной и
              полной. Я понимаю, что если предоставленная мной информация
              окажется недостоверной, неправильной или неполной, это будет
              рассматриваться как грубое нарушение и может явиться основанием
              для отказа в приеме меня на работу или для незамедлительного
              увольнения в любое время в будущем в случае моего приема на
              работу.
            </p>
            <p>
              Я понимаю, что в Положение о конфиденциальности персональных
              данных ТШО могут время от времени вноситься изменения и
              дополнения, и что мне необходимо периодически посещать Веб-сайт
              ТШО, чтобы отслеживать такие изменения. Я также понимаю, что в
              случае несогласия с такими изменениями, я могу отозвать свое
              согласие на обработку персональных данных, обратившись по
              указанному выше электронному адресу, что повлечет за собой их
              уничтожение.
            </p>
          </div>
          <div class="agree">
            <AtomsCheckbox
              id="checkbox"
              v-model="isAgree"
              class="checkbox"
              required
            >
              Настоящим я подтверждаю, что ознакомился(лась) с Формой согласия
              на обработку персональных данных ТОО "Тенгизшевройл" и соглашаюсь
              со всеми его условиями. *
            </AtomsCheckbox>
          </div>
          <AtomsButton
            :disabled="!isAgree"
            @click="saveAndNext"
            :class="{ disabled: !isAgree }"
          >
            Сохранить и продолжить
          </AtomsButton>
        </div>
        <img src="@/assets/img/vacancy/declaration-note.svg" alt="note" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAgree: false,
    }
  },
  methods: {
    saveAndNext() {
      this.$modal.add({
        title: 'RegisterPopup',
        payload: { modal: 'RegisterPopup' },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.declaration {
  padding: 80px 0;
  @include tablet {
    padding: 40px 0;
  }
}
.content {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  @include tablet {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
  img {
    width: 331px;
    height: 209px;
    margin-left: 123px;
    @include tablet() {
      width: 200px;
      height: 126px;
      margin-left: auto;
      margin-bottom: 40px;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    p {
      @include tablet() {
        font-size: 16px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .agree {
    margin-top: 40px;
    @include tablet() {
      margin-top: 20px;
    }
  }
}
.btn {
  margin-top: 40px;
  border: none;
  background-color: $c-main;
  color: white;
  padding: 14px 20px;
  border-radius: 4px;
  cursor: pointer;
  @include tablet() {
    margin-top: 20px;
    width: 100%;
  }
  &.disabled {
    background-color: rgba($c-text, 60%);
  }
}
.checkbox::v-deep {
  span.checkbox__indicator {
    margin-right: 20px;
  }
  span {
    width: calc(100% - 44px);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
    @include tablet {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
