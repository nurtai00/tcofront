<template>
  <client-only>
    <div class="section--blue" style="padding: 0; position: relative">
      <div class="container" style="position: relative">
        <div ref="swiper" class="swiper">
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
      slides: [
        {
          title: this.$t('company.slider_4[0].title'),
          description: this.$t('company.slider_4[0].text'),
          pdf: true,
          image: 'photo.png',
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
    new Swiper(this.$refs.swiper, {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
    })
  },
  methods: {
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
}
</style>
