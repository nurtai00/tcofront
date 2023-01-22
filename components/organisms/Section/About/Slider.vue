<script>
export default {
  data() {
    return {
      slides: [
        {
          count: 3,
          company: this.$t('company.slider_1[0].text'),
          percent: '20%',
          img: require('@/assets/img/company/kazmunaylogo.png'),
        },
        {
          count: 2,
          company: this.$t('company.slider_1[1].text'),
          percent: '50%',
          img: require('@/assets/img/chevron-desktop.jpg'),
        },
        {
          count: 4,
          company: this.$t('company.slider_1[2].text'),
          percent: '25%',
          img: require('@/assets/img/company/mobi.png'),
        },
        {
          count: 5,
          company: this.$t('company.slider_1[3].text'),
          percent: '5%',
          img: require('@/assets/img/Lukoil_final.jpg'),
        },
      ],
      options: {
        pagination: '.steps span',
        loop: true,
        slidesPerView: 1,
        id: 'main-slider',
        slide: this.slideTo,
        style: 'max-height: 560px;',
      },
    }
  },
  methods: {
    slideTo() {},
  },
}
</script>

<template>
  <div class="slider-cont">
    <div class="container">
      <OrganismsSlider :options="options">
        <MoleculesSlide
          v-for="(slide, slide_index) in slides"
          :key="slide_index"
        >
          <div class="double-block tco__partners">
            <div class="tco__partners-wrapper">
              <h3>{{ $t('company.slider_1[0].title') }}</h3>
              <h3 v-text="slide.company"></h3>
              <h1 v-text="slide.percent"></h1>
            </div>
            <img :src="slide.img" alt="kazmunaylogo" />
          </div>
        </MoleculesSlide>
      </OrganismsSlider>
      <div class="steps">
        <span v-for="line in 4" :key="line"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider-cont {
  position: relative;
  overflow: hidden;
  background: #f2f6f7;
}
.tco {
  &__partners {
    justify-content: flex-end;
    @media (orientation: portrait) {
      flex-direction: column-reverse;
    }
    &-wrapper {
      width: 50%;
      padding: 40px;
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 25px;
      text-align: left;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      @media (orientation: portrait) {
        padding-top: 0px;
        gap: 0px;
      }
      h1,
      h3 {
        color: #015467;
      }
      h1 {
        font-weight: 700;
        font-size: 56px;
        line-height: 64px;
        @media (orientation: portrait) {
          font-size: 24px;
        }
      }
      h3 {
        font-weight: 700;
        font-size: 38px;
        line-height: 46px;
        @media (orientation: portrait) {
          font-size: 20px;
          line-height: 26px;
        }
      }
      h3:nth-child(1) {
        @media (orientation: portrait) {
          color: #ffffff;
          position: relative;
          top: -285px;
        }
      }
      h3:nth-child(2) {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin-top: 80px;
        margin-bottom: 20px;
        @media (orientation: portrait) {
          margin: 0px;
          font-size: 18px;
        }
      }
    }

    img {
      width: 50%;
    }
  }
}
.steps {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  bottom: 20px;
  left: 20px;
  @media (orientation: portrait) {
    left: 16px;
    top: -20px;
    width: calc(100vw - 32px);
  }
  span {
    display: block;
    width: 40px;
    height: 4px;
    background: rgba(1, 84, 103, 0.1);
    border-radius: 4px;
    cursor: pointer;
  }
  .current {
    background: #5e8698;
  }
}
::v-deep .slider-wrapper {
  height: 100% !important;
}
</style>
