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
        interval: 1000000000,
        slidesPerView: 1,
        id: 'main-slider',
        slide: this.slideTo,
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
      <OrganismsSlider class="slider" :options="options">
        <MoleculesSlide
          v-for="(slide, slide_index) in slides"
          :key="slide_index"
        >
          <div class="double-block tco__partners">
            <div class="tco__partners-wrapper">
              <h3 class="tco__partners-wrapper-title">
                {{ $t('company.slider_1[0].title') }}
              </h3>
              <h3 v-text="slide.company"></h3>
              <h1 v-text="slide.percent"></h1>
            </div>
            <div class="tco__partners-img">
              <img :src="slide.img" alt="kazmunaylogo" />
            </div>
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
  background: #f2f6f7;
  max-height: 410px;
  display: flex;
  align-items: center;
  overflow: hidden;
  @include tablet {
    height: 100%;
  }
}
.tco {
  &__partners {
    justify-content: flex-end;
    @media (orientation: portrait) {
      padding-top: 20px;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
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
      position: relative;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      @media (orientation: portrait) {
        align-self: flex-start;
        padding-top: 0;
        gap: 0;
        width: 100%;
      }
      h1,
      h1 {
        color: #015467;
        font-weight: 700;
        font-size: 56px;
        line-height: 24px;
        @media (orientation: portrait) {
          font-size: 24px;
          margin-bottom: 10px;
        }
      }
      h3 {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        @media (orientation: portrait) {
          font-size: 20px;
          line-height: 26px;
        }
      }
      &-title {
        color: #015467;
        @media (orientation: portrait) {
          position: absolute;
          top: -200px;
          color: white;
          font-size: rem(24);
          z-index: 10;
        }
      }
      h3:nth-child(2) {
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: #015467;
        margin-top: 0;
        margin-bottom: 20px;
        @media (orientation: portrait) {
          margin: 10px 0;
          font-size: 18px;
        }
      }
    }

    &-img {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
      @media (orientation: portrait) {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: calc(100% + 32px);
        margin-left: -16px;
        max-height: 250px;
        height: 100%;
        img {
          filter: brightness(0.6);
        }
      }
    }
  }
}
.steps {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  bottom: 180px;
  left: 130px;
  @media (orientation: portrait) {
    left: 16px;
    top: -10px;
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
