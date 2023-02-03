<template>
  <client-only>
    <div class="section--blue" style="padding: 0; position: relative">
      <div class="container" style="position: relative">
        <div class="swiper swiper1">
          <div class="swiper-wrapper">
            <div
              v-for="slide of slides"
              :key="slide.title"
              class="swiper-slide"
            >
              <OrganismsSectionOperationSlide
                class="slide"
                has-emit
                :data="slide"
                @popup="openPopup(slide)"
              >
                <template #description="{ description }">
                  <p>
                    {{ description }}
                  </p>
                  <div v-if="slide.pdf">
                    <img
                      src="@/assets/icons/pdf.png"
                      alt="pdf"
                      width="30"
                      height="40"
                    />
                    <span>{{ $t('company.slider_4[0].pdf') }}</span>
                  </div>
                </template>
              </OrganismsSectionOperationSlide>
              <div class="main_b4_actions">
                <img
                  class="main_b4_actions_prev"
                  src="../../../../assets/icons/small-chevron-left.png"
                  alt="small-chevron-left"
                  @click="prevEl"
                />
                <img
                  class="main_b4_actions_next"
                  src="../../../../assets/icons/small-chevron-right.png"
                  alt="small-chevron-right"
                  @click="nextEl"
                />
              </div>
              <!--          <div-->
              <!--            class="double-block tco__partners"-->
              <!--            style="justify-content: flex-end"-->
              <!--          >-->
              <!--            <div class="tco__partners-wrapper" style="max-height: 600px">-->
              <!--              <h1 v-text="slide.title"></h1>-->
              <!--              <div class="underline"></div>-->
              <!--              <p v-text="slide.text"></p>-->
              <!--            </div>-->
              <!--            <img :style="options.style" :src="slide.imgSrc" />-->
              <!--          </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'TcoFrontBlock8',
  data() {
    return {
      options: {
        loop: true,
        slidesPerView: 1,
      },
      swiper: null,
      slides: [
        {
          title: this.$t('company.slider_4[0].title'),
          description: this.$t('company.slider_4[0].text'),
          pdf: true,
          image: `photo${this.$i18n.locale}.png`,
        },
        {
          title: this.$t('company.slider_4[1].title'),
          description: this.$t('company.slider_4[1].text'),
          image: 'company/slide_2_1.png',
        },
        {
          title: this.$t('company.slider_4[2].title'),
          description: this.$t('company.slider_4[2].text'),
          image: 'company/slide_2_2.png',
        },
      ],
    }
  },
  async mounted() {
    await this.$nextTick()
    // eslint-disable-next-line no-new
    this.swiper = new Swiper('.swiper1', {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.main_b4_actions_next',
        prevEl: '.main_b4_actions_prev',
      },
      slidesPerView: 1,
    })
    console.log(this.swiper)
  },
  methods: {
    nextEl() {
      this.swiper.slideNext()
    },
    prevEl() {
      this.swiper.slidePrev()
    },
    openPopup(item) {
      this.swiper.autoplay.pause()
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: item.title,
          text: item.description,
        },
      })
    },
  },
}
</script>

<style lang="scss" v-deep scoped>
.slide::v-deep {
  .slide__content-wrapper {
    padding-top: 80px;
  }
  & {
    max-height: 500px;
    @include phone {
      height: 100%;
    }
  }
}
.section--blue {
  position: relative;
  background: #f2f6f7;
}
::v-deep .slider-wrapper {
  height: 460px !important;
  position: relative;
}
.swiper-button-next {
  left: 45%;
  bottom: 10%;
  background-color: #8c9fa6;
  padding: 25px;
  border-radius: 50%;
  border: none;
}
.main_b4_actions {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  //position: relative;
  //left: 100px;
  //top: -160px;
  @media (orientation: portrait) {
    left: 16px;
    position: absolute;
    top: 175px;
  }
  img {
    padding: 12px 18px 12px 14px;
    border: 1px solid #8c9fa6;
    border-radius: 50%;
    margin-right: 24px;
    cursor: pointer;
    pointer-events: auto;
    touch-action: auto;
    background: rgba(1, 84, 103, 0.1);
    @media (orientation: portrait) {
      padding: 7px 10px 7px 8px;
      margin-right: 12px;
      width: 26px;
      height: 26px;
      background: #ffffff;
    }
  }
  img:last-child {
    padding: 12px 14px 12px 18px;
    @media (orientation: portrait) {
      padding: 7px 8px 7px 10px;
      margin-right: 12px;
    }
  }
  section {
    position: relative;
  }
  // .disabled {
  //   cursor: not-allowed;
  //   pointer-events: none;
  //   touch-action: none;
  //   background: #ffffff;
  // }
}
</style>
