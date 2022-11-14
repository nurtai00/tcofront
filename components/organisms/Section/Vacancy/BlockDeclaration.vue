<template>
  <div class="declaration">
    <div class="container">
      <div class="declaration__wrapper">
        <div class="declaration__info">
          <AtomsHeading type="h3">Декларация</AtomsHeading>
          <div class="declaration__description">
            <span class="declaration__description-title">ФОРМА СОГЛАСИЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</span>
            <p class="declaration__description-item">
              Настоящим я подтверждаю, что ознакомился(лась) с Положением о
              конфиденциальности персональных данных ТОО «Тенгизшевройл» (далее
              – «ТШО») (Ссылка: http://www.tengizchevroil.com/ru/privacy), и
              соглашаюсь со всеми его условиями.
            </p>
            <p class="declaration__description-item">
              Я даю согласие на обработку ТШО моих персональных данных в
              законных деловых целях, связанных с привлечением и отбором кадров.
            </p>
            <p class="declaration__description-item">
              Я даю согласие на передачу за рубеж своих персональных данных,
              предоставленных в ходе данного процессa онлайн регистрации и (или)
              подачи заявки, и извещен(а) о том, что они будут храниться на
              серверах компании «Интернет Корпорэйшн Лимитед», Великобритания, с
              обеспечением их надлежащей защиты, и будут обрабатываться
              исключительно в соответствии с указаниями ТШО.
            </p>
            <p class="declaration__description-item">
              Я извещен(а), что в случае необходимости я имею право в любое
              время обновить мои персональные данные через онлайн профиль, или
              просить их уничтожения до истечения указанного ниже срока,
              обратившись по следующему электронному адресу:
              rectechsup@tengizchevroil.com.
            </p>
            <p class="declaration__description-item">
              Я осведомлен(а), что мои персональные данные будут уничтожены по
              умолчанию через 36 месяцев (3 года) с момента последнего
              обновления моего профиля.
            </p>
            <p class="declaration__description-item">
              Мне также известно, что в случае, если мне будет предложена
              работа, от меня потребуется документальное подтверждение
              предоставленных мной данных для их дополнительной проверки
              согласно процедурам ТШО по найму персонала.
            </p>
            <p class="declaration__description-item">
              Я подтверждаю, что предоставленная мной информация (в том числе
              содержащая персональные данные) является достоверной, правильной и
              полной. Я понимаю, что если предоставленная мной информация
              окажется недостоверной, неправильной или неполной, это будет
              рассматриваться как грубое нарушение и может явиться основанием
              для отказа в приеме меня на работу или для незамедлительного
              увольнения в любое время в будущем в случае моего приема на
              работу.
            </p>
            <p class="declaration__description-item">
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
          <div class="declaration__agree">
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
          <button
            :disabled="!isAgree"
            class="declaration__button"
            :class="{ disabled: !isAgree }"
            @click="saveAndNext"
          >
            Сохранить и продолжить
          </button>
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
  &__wrapper {
    display: flex;
    align-items: flex-start;
    gap: 120px;
    @include tablet {
      flex-direction: column-reverse;
      gap: 20px;
      img {
        align-self: flex-end;
      }
    }
  }
  &__info {
  }
  &__description {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-item {
      display: block;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      font-family: Roboto, sans-serif;
      color: $c-text;
      @include phone {
        font-size: 16px;
      }
    }
  }
  &__agree {
    margin-top: 40px;
  }
  &__button {
    margin-top: 40px;
    border: none;
    background-color: $c-main;
    color: white;
    padding: 14px 20px;
    border-radius: 4px;
    cursor: pointer;
    &.disabled {
      background-color: rgba($c-text, 60%);
      cursor: not-allowed;
    }
  }
}
.checkbox::v-deep {
  span {
    width: calc(100% - 24px);
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 400;
    @include phone {
      font-size: 16px;
    }
  }
}
</style>
