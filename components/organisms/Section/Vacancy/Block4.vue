<template>
  <div class="department">
    <div class="mobile_info">
      <AtomsHeading type="h3" color="text">
        {{ $t('vacancy.block_3.title') }}
      </AtomsHeading>
      <img src="@/assets/img/vacancy/block4.jpg" />
    </div>
    <div class="container">
      <div class="department__info">
        <AtomsHeading type="h3" color="text">
          {{ $t('vacancy.block_3.title') }}
        </AtomsHeading>
        <img src="@/assets/img/vacancy/block4.jpg" />
      </div>
      <div class="department__accordion">
        <AtomsAccordion
          :isOpen="accordion.first"
          @click="accordion.first = !accordion.first"
        >
          <template #title>
            <AtomsHeading type="h4" color="text">
              {{ $t('vacancy.block_3.list[0].title') }}
            </AtomsHeading>
          </template>
          <template #content>
            <div class="instruction">
              <div class="block">
                <p class="title" v-text="$t('vacancy.block_3.list[0].p_1')"></p>
                <p
                  class="subtitle"
                  v-text="$t('vacancy.block_3.list[0].p_11')"
                ></p>
              </div>
              <div class="instruction__experience block">
                <p class="title" v-text="$t('vacancy.block_3.list[0].p_2')"></p>
                <p
                  class="subtitle"
                  v-text="$t('vacancy.block_3.list[0].p_21')"
                ></p>
                <p
                  class="subtitle"
                  v-text="$t('vacancy.block_3.list[0].p_22')"
                ></p>
                <p
                  class="subtitle"
                  v-text="$t('vacancy.block_3.list[0].p_23')"
                ></p>
              </div>
            </div>
            <div class="respond">
              <AtomsHeading
                type="h4"
                color="text"
                v-text="$t('vacancy.block_3.list[0].subtitle')"
              >
              </AtomsHeading>
              <div class="divider" />
              <p
                class="respond__description"
                v-text="$t('vacancy.block_3.list[0].subtitle_text')"
              ></p>
              <form class="respond__form">
                <AtomsInput
                  v-model="formData.name"
                  rules="required|min:3"
                  outlined
                  :placeholder="$t('vacancy.block_3.list[0].name')"
                  @error="setFormErrors"
                />
                <AtomsInput
                  v-model="formData.phone"
                  rules="required|tel"
                  :mask="'+7 (###) ###-##-##'"
                  outlined
                  :placeholder="$t('vacancy.block_3.list[0].phone')"
                  @error="setFormErrors"
                />
                <AtomsInput
                  id="file"
                  v-model="formData.file"
                  name="file"
                  outlined
                  type="file"
                  :placeholder="$t('vacancy.block_3.list[0].resume')"
                  rules="required|file"
                  @change="onUploadFileHandler"
                >
                  <template v-if="!!fileInfo" #info>
                    <span>{{ fileInfo.name }}</span>
                    <button type="button" @click.stop="onRemoveFileHandler">
                      <img src="~icons/delete.png" alt="delete icon" />
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
                <div class="action">
                  <p v-text="$t('vacancy.block_3.list[0].label')"></p>
                  <AtomsButton v-text="$t('vacancy.block_3.list[0].button')">
                    Send
                  </AtomsButton>
                </div>
              </form>
            </div>
          </template>
        </AtomsAccordion>
        <AtomsAccordion>
          <template #title>
            <AtomsHeading type="h4" color="text">
              {{ $t('vacancy.block_3.list[1].title') }}
            </AtomsHeading>
          </template>
        </AtomsAccordion>
        <AtomsAccordion>
          <template #title>
            <AtomsHeading type="h4" color="text">
              {{ $t('vacancy.block_3.list[2].title') }}
            </AtomsHeading>
          </template>
        </AtomsAccordion>
        <AtomsAccordion>
          <template #title>
            <AtomsHeading type="h4" color="text">
              {{ $t('vacancy.block_3.list[3].title') }}
            </AtomsHeading>
          </template>
        </AtomsAccordion>
        <AtomsAccordion>
          <template #title>
            <AtomsHeading type="h4" color="text">
              {{ $t('vacancy.block_3.list[4].title') }}
            </AtomsHeading>
          </template>
        </AtomsAccordion>
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
  @include tablet() {
    padding: 0;
  }
  .container {
    display: flex;
    grid-gap: 50px;
    @include tablet() {
      flex-direction: column;
      grid-gap: 0;
    }
  }
  &__info {
    flex-basis: 50%;
    @include tablet {
      display: none;
    }
    img {
      margin-top: 40px;
      width: 100%;
    }
  }
  &__accordion {
    flex-basis: 50%;
    @include tablet() {
      margin-bottom: 40px;
    }
  }
}
.instruction {
  &__experience {
    margin-top: 20px;
  }
  & .block {
    display: flex;
    flex-direction: column;
  }
  & .title {
    font-weight: 600;
    @include tablet() {
      font-size: 14px;
      line-height: 18px;
    }
  }
  & .subtitle {
    margin-top: 10px;
    @include tablet() {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
.respond {
  margin-top: 40px;
  @include tablet() {
    margin-top: 16px;
  }
  & .divider {
    margin-top: 20px;
    height: 1px;
    width: 100%;
    right: 0;
    position: relative;
    background-color: rgba($c-text, 20%);
    @include tablet() {
      display: none;
    }
  }
  &__description {
    font-weight: 600;
    margin-top: 24px;
    @include tablet() {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    grid-gap: 24px;
  }
}
.action {
  display: flex;
  align-items: flex-start;
  grid-gap: 15px;
  @include tablet() {
    flex-direction: column;
    grid-gap: 20px;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .btn {
    padding: 14px 30px;
    @include tablet() {
      padding: 14px 32px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}
.mobile_info {
  display: none;
  position: relative;
  width: 100%;
  @include tablet() {
    display: block;
  }
  img {
    width: 100%;
    max-height: 218px;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    position: absolute;
    top: 40px;
    left: 16px;
    color: #ffffff;
  }
}
</style>
