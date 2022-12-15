<template>
  <div class="section--blue" style="padding: 0; position: relative">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div
          class="double-block tco__partners"
          style="justify-content: flex-end"
        >
          <div class="tco__partners-wrapper" style="max-height: 600px">
            <h1 v-text="slide.title"></h1>
            <div class="underline"></div>
            <p v-text="slide.text"></p>
            <div v-if="slide.pdf">
              <img
                src="@/assets/icons/pdf.png"
                alt="pdf"
                width="30"
                height="40"
              />
              <span>{{ $t('company.slider_4[0].pdf') }}</span>
            </div>
          </div>
          <img :style="options.style" src="@/assets/img/photo.png" />
        </div>
      </MoleculesSlide>
    </OrganismsSlider>
    <div class="main_b8_actions">
      <img
        class="main_b8_actions_prev"
        src="../../../../assets/icons/small-chevron-left.png"
        alt="small-chevron-left"
        width="44px"
        height="44px"
      />
      <img
        class="main_b8_actions_next"
        src="../../../../assets/icons/small-chevron-right.png"
        alt="small-chevron-right"
        width="44px"
        height="44px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcoFrontBlock8',

  data() {
    return {
      options: {
        interval: 3000,
        navigation: {
          previous: '.main_b8_actions_prev',
          next: '.main_b8_actions_next',
        },
        loop: true,
        slidesPerView: 1,
        id: 'main_b8',
        slide: this.slideTo,
        style: 'max-height: 730px',
      },
      slides: [
        {
          title: this.$t('company.slider_4[0].title'),
          text: this.$t('company.slider_4[0].text'),
          pdf: true,
        },
        {
          title: this.$t('company.slider_4[1].title'),
          text: this.$t('company.slider_4[1].text'),
        },
        {
          title: this.$t('company.slider_4[2].title'),
          text: this.$t('company.slider_4[2].text'),
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
.section--blue {
  // height: 650px;
}
.double-block {
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    position: relative;
  }
  img {
    @media (orientation: portrait) {
      height: 220px;
      object-fit: cover;
      background: linear-gradient(
        0deg,
        rgba(48, 69, 78, 0.8),
        rgba(48, 69, 78, 0.8)
      );
    }
  }
}
.tco {
  &__partners {
    &-wrapper {
      padding: 40px 40px 60px 0;
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      gap: 30px;
      h1 {
        margin-top: 60px;
      }
      @media (max-width: 1200px) {
        padding: 15px;
      }

      @media (max-width: 886px) {
        max-width: inherit;
      }
      &:before {
        @media (orientation: portrait) {
          background: linear-gradient(
            0deg,
            rgba(48, 69, 78, 0.8),
            rgba(48, 69, 78, 0.8)
          );
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 220px;
        }
      }
      .underline {
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
      p {
        @media (orientation: portrait) {
          font-size: 16px;
          line-height: 22px;
        }
      }
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        color: #015467;
      }
      div:last-child {
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          text-decoration-line: underline;
          color: #00b0f0;
          @media (orientation: portrait) {
            font-size: 14px;
            line-height: 18px;
          }
        }
        img {
          width: 30px;
          margin-right: 12px;
          @media (orientation: portrait) {
            height: 40px;
          }
        }
      }
    }
    background: #f2f6f7;
  }
}
::v-deep .slider-wrapper {
  height: auto;
}
.main_b8_actions {
  display: flex;
  align-items: center;
  position: absolute;
  left: calc((100vw - 1176px) / 2);
  bottom: 140px;
  @media (orientation: portrait) {
    left: 16px;
    position: absolute;
    top: 180px;
    bottom: auto;
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
