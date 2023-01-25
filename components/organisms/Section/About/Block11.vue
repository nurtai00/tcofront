<template>
  <section
    class="section"
    style="padding: 0; position: relative; background: #f2f6f7"
  >
    <div class="container">
      <OrganismsSlider :options="options">
        <MoleculesSlide
          v-for="(slide, slide_index) in slides"
          :key="slide_index"
        >
          <OrganismsSectionOperationSlide
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
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock11',

  data() {
    return {
      options: {
        interval: 1000,
        loop: true,
        slidesPerView: 1,
        id: 'main_b11',
      },
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
