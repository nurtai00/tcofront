<template>
  <div class="department">
    <div class="container">
      <div class="department__wrapper">
        <div class="department__info">
          <AtomsHeading class="department__info-title" type="h3" color="black">
            Департаменты ТШО
          </AtomsHeading>
          <img src="@/assets/img/vacancy/block4.jpg" />
        </div>
        <div class="department__accordion">
          <AtomsAccordion
            :isOpen="accordion.first"
            @click="accordion.first = !accordion.first"
          >
            <template #title>
              <AtomsHeading type="h4">Управление скважинами</AtomsHeading>
            </template>
            <template #content>
              <div class="department__accordion-wrapper">
                <div class="instruction">
                  <div class="instruction__description block">
                    <span class="title">Здесь будет мини-описание </span>
                    <span class="subtitle">
                      Здесь будет мини-описание Здесь будет мини-описание Здесь
                      будет мини-описание Здесь будет мини-описание Здесь будет
                      мини-описание Здесь будет мини-описание
                    </span>
                  </div>
                  <div class="instruction__experience block column">
                    <span class="title"> Требуемый опыт работы</span>
                    <span class="subtitle"> От 3 до 6 лет </span>
                    <span class="subtitle"> Полная занятость </span>
                    <span class="subtitle"> Вахтовый метод работы </span>
                  </div>
                </div>
                <div class="respond">
                  <AtomsHeading type="h4" color="black">
                    Откликнуться
                  </AtomsHeading>
                  <div class="divider" />
                  <span class="respond__description">
                    Если вас заинтересовала вакансия, приложите и отправьте
                    резюме с указанием интересующей вас сферы деятельности и
                    ожидаемой заработной платы
                  </span>
                  <form class="respond__form">
                    <AtomsInput
                      v-model="formData.name"
                      rules="required|min:3"
                      outlined
                      placeholder="Ваше имя"
                      @error="setFormErrors"
                    />
                    <AtomsInput
                      v-model="formData.phone"
                      rules="required|tel"
                      :mask="'+7 (###) ###-##-##'"
                      outlined
                      placeholder="Номер телефона"
                      @error="setFormErrors"
                    />
                    <AtomsInput
                      id="file"
                      v-model="formData.file"
                      name="file"
                      outlined
                      type="file"
                      placeholder="Прикрепить резюме"
                      rules="required|file"
                      @change="onUploadFileHandler"
                    >
                      <template v-if="!!fileInfo" #info>
                        <span>{{ fileInfo.name }}</span>
                        <button type="button" @click.stop="onRemoveFileHandler">
                          <img src="~icons/delete.svg" alt="delete icon" />
                        </button>
                      </template>
                      <template #append>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.6852 2.81931C13.47 1.59304 11.5031 1.59304 10.2879 2.81931L3.90251 9.26268C1.89913 11.2843 1.89913 14.5652 3.90251 16.5868C5.87534 18.5776 9.16944 18.5741 11.1409 16.5837L14.4638 13.263C14.8154 12.9116 15.3852 12.9118 15.7366 13.2634C16.0879 13.615 16.0877 14.1849 15.7362 14.5362L12.4148 17.8554C9.71152 20.5815 5.3266 20.581 2.62398 17.8538C-0.0746906 15.1306 -0.0746911 10.7188 2.62398 7.99566L9.00933 1.55229C10.9288 -0.384617 14.0443 -0.384617 15.9637 1.55229C17.8787 3.48468 17.8787 6.61436 15.9637 8.54675L9.57838 14.9901C8.44259 16.1362 6.5977 16.1362 5.46191 14.9901C4.33059 13.8485 4.33059 12.001 5.46191 10.8594L9.04443 7.27684C9.3959 6.92537 9.96575 6.92537 10.3172 7.27684C10.6687 7.62831 10.6687 8.19816 10.3172 8.54963C9.12462 9.74223 7.92431 10.9276 6.73919 12.1277C6.30442 12.5678 6.30483 13.2835 6.74044 13.7231C7.172 14.1586 7.86829 14.1586 8.29984 13.7231L14.6852 7.27973C15.9049 6.04894 15.9049 4.0501 14.6852 2.81931Z"
                            fill="#99A2AD"
                          />
                        </svg>
                      </template>
                    </AtomsInput>
                    <div class="respond__form-action action">
                      <span class="action__text">Нажимая кнопку "Отправить", вы принимаете условия
                        Политики конфиденциальности и обработки персональных
                        данных</span>
                      <button class="action__button">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </template>
          </AtomsAccordion>
          <AtomsAccordion>
            <template #title>
              <AtomsHeading type="h4">
                Инженерно-техническое обеспечение
              </AtomsHeading>
            </template>
          </AtomsAccordion>
          <AtomsAccordion>
            <template #title>
              <AtomsHeading type="h4">Финансы</AtomsHeading>
            </template>
          </AtomsAccordion>
          <AtomsAccordion>
            <template #title>
              <AtomsHeading type="h4">Отдел кадров</AtomsHeading>
            </template>
          </AtomsAccordion>
          <AtomsAccordion>
            <template #title>
              <AtomsHeading type="h4">Отдел кадров</AtomsHeading>
            </template>
          </AtomsAccordion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        file: '',
      },
      formErrors: [],
      fileInfo: null,
      accordion: {
        first: false,
      },
    }
  },
  computed: {
    fieldsIsValid() {
      return this.formErrors.length === 0
    },
  },
  methods: {
    setFormErrors(errors) {
      this.formErrors = errors
    },
    onUploadFileHandler(event) {
      const [file] = event.target.files
      this.fileInfo = file
    },
    onRemoveFileHandler() {
      this.formData.file = ''
      this.fileInfo = null
    },
  },
}
</script>
<style lang="scss" scoped>
.department {
  padding: 80px 0;
  background-color: #f2f6f7;
  &__wrapper {
    display: flex;
    gap: 50px;
    @include tablet() {
      flex-direction: column;
    }
  }
  &__info {
    flex-basis: 50%;
    @include tablet {
      &-title {
        color: white;
        position: relative;
        top: 100px;
        z-index: 2;
      }
    }
    img {
      margin-top: 40px;
      width: 100%;
      @include phone() {
        position: relative;
        left: -16px;
        width: 100vw;
      }
    }
  }
  &__accordion {
    &-wrapper {
      padding: 10px;
    }
    flex-basis: 50%;
  }
}
.instruction {
  &__experience {
    margin-top: 20px;
  }
  & .block {
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    gap: 5px;
  }
  & .column {
    display: flex;
    flex-direction: column;
  }
  & .title {
    font-size: 20px;
    font-weight: 600;
    @include phone() {
      font-size: 16px;
    }
  }
  & .subtitle {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
    @include phone() {
      font-size: 16px;
    }
  }
}
.respond {
  margin-top: 40px;
  & .divider {
    margin-top: 20px;
    height: 1px;
    width: 100%;
    right: 0;
    position: relative;
    background-color: rgba($c-text, 20%);
  }
  &__description {
    @include phone() {
      font-size: 16px;
      font-weight: 400;
    }
    line-height: 20px;
    font-weight: 600;
    font-size: 20px;
    display: block;
    margin-top: 24px;
  }
  &__form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    &-action {
      margin-top: 20px;
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }
  }
}
.action {
  @include phone() {
    flex-direction: column;
    &__text {
      font-size: 15px;
    }
  }
  &__text {
    font-size: 18px;
    color: $c-text;
  }
  &__button {
    background-color: $c-main;
    color: white;
    padding: 14px 30px;
    border: none;
    border-radius: 4px;
  }
}
</style>
