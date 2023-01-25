<template>
  <div class="section--blue" style="padding: 0; position: relative">
    <div class="container" style="position: relative">
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
        </MoleculesSlide>
      </OrganismsSlider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcoFrontBlock8',

  data() {
    return {
      options: {
        interval: 1000,
        loop: true,
        slidesPerView: 1,
        id: 'main_b8',
      },
      slides: [
        {
          title: this.$t('company.slider_4[0].title'),
          text: this.$t('company.slider_4[0].text'),
          pdf: true,
          imgSrc: 'photo.png',
        },
        {
          title: this.$t('company.slider_4[1].title'),
          text: this.$t('company.slider_4[1].text'),
          imgSrc: 'company/slide_2_1.png',
        },
        {
          title: this.$t('company.slider_4[2].title'),
          text: this.$t('company.slider_4[2].text'),
          imgSrc: 'company/slide_2_2.png',
        },
      ],
    }
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
