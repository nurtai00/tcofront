<template>
  <div class="main" style="position: relative">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div
          class="double-block tco__partners"
          style="justify-content: flex-start"
        >
          <img :style="options.style" src="@/assets/img/Rectangle 182.png" />
          <div class="tco__partners-wrapper">
            <h1 v-text="slide.title"></h1>
            <div class="underline"></div>
            <p v-text="slide.text"></p>
          </div>
        </div>
      </MoleculesSlide>
    </OrganismsSlider>
    <div class="main_b9_actions">
      <img
        class="main_b9_actions_prev"
        src="../../../../assets/icons/small-chevron-left.png"
        alt="small-chevron-left"
        width="44px"
        height="44px"
      />
      <img
        class="main_b9_actions_next"
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
  name: 'TcoFrontBlock9',

  data() {
    return {
      options: {
        navigation: {
          previous: '.main_b9_actions_prev',
          next: '.main_b9_actions_next',
        },
        loop: true,
        slidesPerView: 1,
        id: 'main_b9',
        slide: this.slideTo,
        style: 'max-height: 600px',
      },
      slides: [
        {
          title: this.$t('company.slider_5[0].title'),
          text: this.$t('company.slider_5[0].text'),
        },
        {
          title: this.$t('company.slider_5[1].title'),
          text: this.$t('company.slider_5[1].text'),
        },
        {
          title: this.$t('company.slider_5[2].title'),
          text: this.$t('company.slider_5[2].text'),
        },
        {
          title: this.$t('company.slider_5[3].title'),
          text: this.$t('company.slider_5[3].text'),
        },
        {
          title: this.$t('company.slider_5[4].title'),
          text: this.$t('company.slider_5[4].text'),
        },
        {
          title: this.$t('company.slider_5[5].title'),
          text: this.$t('company.slider_5[5].text'),
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
.main {
  padding: 0;
  // height: 790px;
}
.tco {
  &__partners {
    &-wrapper {
      padding: 40px 0px 40px 40px;
      max-width: 572px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px;
      text-align: left;
      margin-top: 80px;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
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
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        color: #015467;
      }
      p {
        @media (orientation: portrait) {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
    background: #f2f6f7;
  }
}
::v-deep .slider-wrapper {
  height: auto;
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
section {
  position: relative;
}
.main_b9_actions {
  display: flex;
  align-items: center;
  position: absolute;
  left: calc(50% + 40px);
  bottom: 25px;
  @media (orientation: portrait) {
    left: 16px;
    position: absolute;
    top: 175px;
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
