<template>
  <section
    class="section"
    style="padding: 0; position: relative; background: #f2f6f7"
  >
    <div class="container">
      <div ref="swiper3" class="swiper">
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
    new Swiper(this.$refs.swiper3, {
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
.section {
  height: 460px;
}
::v-deep .slide__content-wrapper {
  padding-top: 80px !important;
}
::v-deep .slider-wrapper {
  height: 460px !important;
}
</style>
