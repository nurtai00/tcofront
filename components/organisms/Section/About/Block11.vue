<template>
  <section
    class="section"
    style="padding: 0; position: relative; background: #f2f6f7"
  >
    <div class="container">
      <div class="swiper swiper3">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, slide_index) in slides"
            :key="slide_index"
            class="swiper-slide"
            has-emit
            @popup="openPopup(slide)"
          >
            <OrganismsSectionOperationSlide
              class="slide"
              :data="{ ...slide, image: slide.imgSrc, description: slide.text }"
            >
              <template #description="{ description }">
                <p>{{ description }}</p>
              </template>
            </OrganismsSectionOperationSlide>
          </div>
        </div>
      </div>
    </div>
    <div class="main_b3_actions">
      <img
        class="main_b3_actions_prev"
        src="../../../../assets/icons/small-chevron-left.png"
        alt="small-chevron-left"
        @click="prevEl"
      />
      <img
        class="main_b3_actions_next"
        src="../../../../assets/icons/small-chevron-right.png"
        alt="small-chevron-right"
        @click="nextEl"
      />
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'TcoFrontBlock11',

  data() {
    return {
      swiper: null,
      slides: [
        {
          title: this.$t('company.slider_6[0].title_1'),
          text: this.$t('company.slider_6[0].text'),
          imgSrc: 'company/slide_4_1.png',
        },
        {
          title: this.$t('company.slider_6[1].title_1'),
          text: this.$t('company.slider_6[1].text'),
          imgSrc: 'company/slide_4_2.png',
        },
        {
          title: this.$t('company.slider_6[2].title_1'),
          text: this.$t('company.slider_6[2].text'),
          imgSrc: 'company/slide_4_3.png',
        },
        {
          title: this.$t('company.slider_6[3].title_1'),
          text: this.$t('company.slider_6[3].text'),
          imgSrc: 'company/slide_4_4.png',
        },
      ],
    }
  },
  async mounted() {
    await this.$nextTick()
    // eslint-disable-next-line no-new
    this.swiper = new Swiper('.swiper3', {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.main_b3_actions_next',
        prevEl: '.main_b3_actions_prev',
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

<style lang="scss" v-deep scoped>
.section {
  position: relative;
  height: 460px;
  @include phone {
    height: auto;
  }
}
::v-deep .slide__content-wrapper {
  padding-top: 80px;
  @include phone {
    padding-top: 20px;
  }
}
::v-deep .button-more {
  margin-top: 0 !important;
}
::v-deep .slider-wrapper {
  height: 460px !important;
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
.main_b3_actions {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  //position: relative;
  //left: 100px;
  //top: -160px;
  z-index: 20;
  left: 14%;
  @media (orientation: portrait) {
    left: 10%;
    position: absolute;
    bottom: 220px;
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
