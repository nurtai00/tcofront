<template>
  <section style="padding: 0; position: relative">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div class="double-block" style="justify-content: flex-end">
          <div class="tco__partners-wrapper">
            <h1 v-text="slide.title"></h1>
            <div class="amount">
              <div class="item">
                <span v-text="slide.text_1_1"></span>
                <p v-text="slide.text_1_2"></p>
              </div>
              <div class="item">
                <span v-text="slide.text_2_1"></span>
                <p v-text="slide.text_2_2"></p>
              </div>
              <div class="item">
                <span v-text="slide.text_3_1"></span>
                <p v-text="slide.text_3_2"></p>
              </div>
            </div>
          </div>
          <img :src="slide.img" alt="slider_1_1" />
        </div>
      </MoleculesSlide>
    </OrganismsSlider>

    <div class="main_b4_actions">
      <img
        class="main_b4_actions_prev"
        src="../../../../assets/icons/small-chevron-left.svg"
        alt="small-chevron-left"
      />
      <img
        class="main_b4_actions_next"
        src="../../../../assets/icons/small-chevron-right.svg"
        alt="small-chevron-right"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock4',

  data() {
    return {
      options: {
        navigation: {
          previous: '.main_b4_actions_prev',
          next: '.main_b4_actions_next',
        },
        loop: true,
        slidesPerView: 1,
        id: 'main_b4',
        slide: this.slideTo,
      },
      slides: [
        {
          title: this.$t('company.slider_2[0].title'),
          text_1_1: this.$t('company.slider_2[0].items[0].title'),
          text_1_2: this.$t('company.slider_2[0].items[0].text'),
          text_2_1: this.$t('company.slider_2[0].items[1].title'),
          text_2_2: this.$t('company.slider_2[0].items[1].text'),
          text_3_1: this.$t('company.slider_2[0].items[2].title'),
          text_3_2: this.$t('company.slider_2[0].items[2].text'),
          img: require('@/assets/img/company/slider_1_1.png'),
        },
        {
          title: this.$t('company.slider_2[1].title'),
          text_1_1: this.$t('company.slider_2[1].items[0].title'),
          text_1_2: this.$t('company.slider_2[1].items[0].text'),
          text_2_1: this.$t('company.slider_2[1].items[1].title'),
          text_2_2: this.$t('company.slider_2[1].items[1].text'),
          text_3_1: this.$t('company.slider_2[1].items[2].title'),
          text_3_2: this.$t('company.slider_2[1].items[2].text'),
          img: require('@/assets/img/company/slider_1_2.png'),
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
.double-block {
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    position: relative;
  }
  img {
    @media (orientation: portrait) {
      height: 220px;
      object-fit: cover;
    }
  }
}
.tco {
  &__partners {
    &-wrapper {
      padding: 40px 40px 40px 0;
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
      .amount {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        .item {
          background: #e8f8fe;
          border-radius: 4px;
          padding: 20px;
          width: 100%;
          span {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            color: #30454e;
            @media (orientation: portrait) {
              font-size: 18px;
              line-height: 24px;
            }
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #8c9fa6;
            @media (orientation: portrait) {
              font-size: 14px;
              line-height: 18px;
            }
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
.main_b4_actions {
  display: flex;
  align-items: center;
  position: relative;
  left: calc((100vw - 1176px) / 2);
  top: -140px;
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
  section {
    position: relative;
  }
  // .disabled {
  //   cursor: not-allowed;
  //   pointer-events: none;
  //   touch-action: none;
  //   background: #ffffff;
  // }
}
</style>
