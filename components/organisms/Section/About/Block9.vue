<template>
  <client-only>
    <div class="main" style="position: relative">
      <div class="container" style="position: relative">
        <div class="swiper swiper2">
          <div class="swiper-wrapper">
            <div v-for="slide of slides" :key="slide.text" class="swiper-slide">
              <OrganismsSectionOperationSlide
                side
                class="slide"
                :data="slide"
                has-emit
                @popup="openPopup(slide)"
              >
                <template #description="{ description }">
                  <p>{{ description }}</p>
                </template>
              </OrganismsSectionOperationSlide>
            </div>
          </div>
        </div>
      </div>
      <div class="main_b2_actions">
        <img
          class="main_b2_actions_prev"
          src="../../../../assets/icons/small-chevron-left.png"
          alt="small-chevron-left"
          @click="prevEl"
        />
        <img
          class="main_b2_actions_next"
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
  name: 'TcoFrontBlock9',
  data() {
    return {
      swiper: null,
      slides: [
        {
          title: this.$t('company.slider_5[0].title'),
          description: this.$t('company.slider_5[0].text'),
          image: 'company/slide_3_1.png',
        },
        {
          title: this.$t('company.slider_5[1].title'),
          description: this.$t('company.slider_5[1].text'),
          image: 'company/slide_3_2.png',
        },
        {
          title: this.$t('company.slider_5[2].title'),
          description: this.$t('company.slider_5[2].text'),
          image: 'company/slide_3_3.png',
        },
        {
          title: this.$t('company.slider_5[3].title'),
          description: this.$t('company.slider_5[3].text'),
          image: 'company/slide_3_4.png',
        },
        {
          title: this.$t('company.slider_5[4].title'),
          description: this.$t('company.slider_5[4].text'),
          image: 'company/slide_3_5.png',
        },
        {
          title: this.$t('company.slider_5[5].title'),
          description: this.$t('company.slider_5[5].text'),
          image: 'company/slide_3_6.png',
        },
      ],
    }
  },

  async mounted() {
    await this.$nextTick()
    // eslint-disable-next-line no-new
    this.swiper = new Swiper('.swiper2', {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.main_b2_actions_next',
        prevEl: '.main_b2_actions_prev',
      },
      slidesPerView: 1,
    })
  },
  methods: {
    nextEl() {
      this.swiper.slideNext()
    },
    prevEl() {
      this.swiper.slidePrev()
    },
    openPopup(item) {
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

<style lang="scss" scoped>
.main {
  background: #f2f6f7;
  position: relative;
  height: 460px;
  @include phone {
    height: auto;
  }
}
::v-deep .slide__content-wrapper {
  padding-top: 80px;
  @media (orientation: portrait) {
    padding-top: 20px;
  }
}
::v-deep .slider-wrapper {
  height: 460px;
  position: relative;
  @include phone {
    height: auto;
  }
}
::v-deep .slide__image {
  @include phone {
    h3 {
      z-index: 10;
    }
    img {
      filter: brightness(0.6);
    }
  }
}
.slide {
}
section {
  position: relative;
}
::v-deep .button-more {
  margin-top: 0 !important;
}
.main_b2_actions {
  display: flex;
  align-items: center;
  position: absolute;
  left: 52%;
  bottom: 10px;
  //position: relative;
  //left: 100px;
  //top: -160px;
  z-index: 20;
  @media (orientation: portrait) {
    left: 10%;
    position: absolute;
    bottom: 230px;
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
