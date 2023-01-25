<template>
  <div class="main" style="position: relative">
    <div class="container" style="position: relative">
      <OrganismsSlider style="height: 100%" :options="options">
        <MoleculesSlide
          v-for="(slide, slide_index) in slides"
          :key="slide_index"
        >
          <OrganismsSectionOperationSlide
            side
            class="slide"
            :data="{ ...slide, image: slide.imgSrc, description: slide.text }"
          >
            <template #description="{ description }">
              <p>{{ description }}</p>
            </template>
          </OrganismsSectionOperationSlide>
        </MoleculesSlide>
      </OrganismsSlider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcoFrontBlock9',

  data() {
    return {
      options: {
        interval: 1000,
        loop: true,
        slidesPerView: 1,
        id: 'main_b9',
      },
      slides: [
        {
          title: this.$t('company.slider_5[0].title'),
          text: this.$t('company.slider_5[0].text'),
          imgSrc: 'company/slide_3_1.png',
        },
        {
          title: this.$t('company.slider_5[1].title'),
          text: this.$t('company.slider_5[1].text'),
          imgSrc: 'company/slide_3_2.png',
        },
        {
          title: this.$t('company.slider_5[2].title'),
          text: this.$t('company.slider_5[2].text'),
          imgSrc: 'company/slide_3_3.png',
        },
        {
          title: this.$t('company.slider_5[3].title'),
          text: this.$t('company.slider_5[3].text'),
          imgSrc: 'company/slide_3_4.png',
        },
        {
          title: this.$t('company.slider_5[4].title'),
          text: this.$t('company.slider_5[4].text'),
          imgSrc: 'company/slide_3_5.png',
        },
        {
          title: this.$t('company.slider_5[5].title'),
          text: this.$t('company.slider_5[5].text'),
          imgSrc: 'company/slide_3_6.png',
        },
      ],
    }
  },

  mounted() {},
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
