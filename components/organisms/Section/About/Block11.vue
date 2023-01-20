<template>
  <section style="padding: 0; position: relative">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div class="double-block tco__partners">
          <div class="tco__partners-wrapper">
            <h1>{{ $t('company.slider_6[0].title') }}</h1>
            <div class="underline"></div>
            <span v-text="slide.title"></span>
            <p v-text="slide.text"></p>
          </div>
          <img :style="options.style" :src="slide.imgSrc" />
        </div>
      </MoleculesSlide>
    </OrganismsSlider>

    <div class="main_b11_actions">
      <img
        class="main_b11_actions_prev"
        src="../../../../assets/icons/small-chevron-left.png"
        alt="small-chevron-left"
        width="44px"
        height="44px"
      />
      <img
        class="main_b11_actions_next"
        src="../../../../assets/icons/small-chevron-right.png"
        alt="small-chevron-right"
        width="44px"
        height="44px"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock11',

  data() {
    return {
      options: {
        navigation: {
          previous: '.main_b11_actions_prev',
          next: '.main_b11_actions_next',
        },
        loop: true,
        slidesPerView: 1,
        id: 'main_b11',
        slide: this.slideTo,
        style: 'max-height: 600px',
      },
      slides: [
        {
          title: this.$t('company.slider_6[0].title_1'),
          text: this.$t('company.slider_6[0].text'),
          imgSrc: require('~/assets/img/company/slide_4_1.png'),
        },
        {
          title: this.$t('company.slider_6[1].title_1'),
          text: this.$t('company.slider_6[1].text'),
          imgSrc: require('~/assets/img/company/slide_4_2.png'),
        },
        {
          title: this.$t('company.slider_6[2].title_1'),
          text: this.$t('company.slider_6[2].text'),
          imgSrc: require('~/assets/img/company/slide_4_3.png'),
        },
        {
          title: this.$t('company.slider_6[3].title_1'),
          text: this.$t('company.slider_6[3].text'),
          imgSrc: require('~/assets/img/company/slide_4_4.png'),
        },
      ],
    }
  },

  mounted() {},

  methods: {
    slideTo() {},
  },
}
</script>

<style lang="scss" v-deep scoped>
.tco {
  &__partners {
    justify-content: flex-end;
    @media (orientation: portrait) {
      flex-direction: column-reverse;
    }
    &-wrapper {
      padding: 40px 40px 40px 0;
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      @media (orientation: portrait) {
        gap: 15px;
      }
      .underline {
        margin-top: 20px;
        display: block;
        position: relative;
        width: 80%;
        border: 1px solid #8c9fa6;
        @media (orientation: portrait) {
          display: none;
        }
      }
      .line {
        display: block;
        position: relative;
        width: 80vw;
        border: 1px solid #8c9fa6;
      }
      h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 46px;
        color: #015467;
        @media (max-width: 385px) {
          font-size: 32px;
        }
        @media (orientation: portrait) {
          font-size: 20px;
          line-height: 26px;
          color: #ffffff;
          position: absolute;
          left: 16px;
          top: 40px;
        }
      }
      span {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 42px;
        color: #015467;
        margin-top: 40px;
        @include tablet {
          margin-top: 20px;
        }
        @media (orientation: portrait) {
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
        }
      }
      p {
        display: inline-block;
        margin-top: 10px;
        @include tablet {
          margin-top: 10px;
        }
        @media (orientation: portrait) {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
    background: #f2f6f7;
  }
}
.double-block {
  @media (orientation: portrait) {
    position: relative;
  }
  img {
    @media (orientation: portrait) {
      height: 216px;
      object-fit: cover;
    }
  }
}
::v-deep .slider-wrapper {
  height: auto;
}
.main_b11_actions {
  display: flex;
  align-items: center;
  position: relative;
  left: calc((100vw - 1176px) / 2);
  top: -105px;
  @media (orientation: portrait) {
    left: 16px;
    position: absolute;
    top: 175px;
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
  // .disabled {
  //   cursor: not-allowed;
  //   pointer-events: none;
  //   touch-action: none;
  //   background: #ffffff;
  // }
}
</style>
