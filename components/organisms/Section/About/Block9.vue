<template>
  <client-only>
    <div class="main" style="position: relative">
      <div class="container" style="position: relative">
        <div ref="swiper2" class="swiper">
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
    new Swiper(this.$refs.swiper2, {
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

<style lang="scss" scoped>
.main {
  background: #f2f6f7;

  height: 460px;
}
::v-deep .slide__content-wrapper {
  padding-top: 80px !important;
}
::v-deep .slider-wrapper {
  height: 460px !important;
}
.slide {
}
section {
  position: relative;
}
</style>
