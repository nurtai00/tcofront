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
                  <div
                    v-if="slide.pdf"
                    style="
                      display: flex;
                      align-items: center;
                      gap: 10px;
                      cursor: pointer;
                    "
                    @click.stop="openLink"
                  >
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
            </div>
          </div>
        </div>
      </div>
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
  computed: {
    tcoWayPdfLink() {
      const mapOfLocalesLink = {
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/kk/tco-way_kaz.pdf?sfvrsn=941ac55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/ru/tco-way_rus.pdf?sfvrsn=3115c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/en/tco-way_eng.pdf?sfvrsn=4315c55c_2',
      }
      return mapOfLocalesLink[this.$i18n.locale]
    },
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
    openLink() {
      window.open(this.tcoWayPdfLink, '_blank')
    },
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
.section--blue {
  @media (orientation: portrait) {
    margin-top: 20px;
  }
}
.slide::v-deep {
  .slide__content-wrapper {
    padding-top: 80px;
    @include phone {
      padding-top: 20px;
    }
  }
  & {
    max-height: 500px;
    @include phone {
      height: 100%;
    }
  }
  .slide__image {
    @include phone {
      h3 {
        z-index: 10;
      }
      img {
        filter: brightness(0.6);
      }
    }
  }
}
.section--blue {
  position: relative;
  background: #f2f6f7;
}
::v-deep {
  &.slider-wrapper {
    height: 460px !important;
    position: relative;
  }
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
  left: 14%;
  //position: relative;
  //left: 100px;
  //top: -160px;
  z-index: 20;
  @media (orientation: portrait) {
    left: 10%;
    position: absolute;
    bottom: 330px;
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
