<template>
  <section style="padding: 0">
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
        width="44px"
        height="44px"
      />
      <img
        class="main_b4_actions_next"
        src="../../../../assets/icons/small-chevron-right.svg"
        alt="small-chevron-right"
        width="44px"
        height="44px"
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
          title: 'Казахстанское содержание:',
          text_1_1: '0,6 млрд (в долларах США)',
          text_1_2: 'В т. ч. затраты по ПБР-ПУУД ',
          text_2_1: '0,9 млрд (в долларах США)',
          text_2_2: 'Бюджет программы «Игілік» в 2022 г.',
          text_3_1: '>2,3 млрд (в долларах США)',
          text_3_2: '',
          img: require('@/assets/img/company/slider_1_1.png'),
        },
        {
          title: 'Вклад в социальную сферу:',
          text_1_1: '2,3 млн (в долларах США)',
          text_1_2: 'Бюджет ПСИ* в 2022 г. ',
          text_2_1: '30 млн (в долларах США)',
          text_2_2: 'Затраты на товары и услуги',
          text_3_1: '>40,9 млрд',
          text_3_2: 'Совокупные затраты с 1993 г.',
          img: require('@/assets/img/company/slider_1_2.png'),
        },
      ],
    }
  },

  mounted() {},

  methods: {
    slideTo(index) {
      console.log('has slidet', index)
    },
  },
}
</script>

<style lang="scss" v-deep scoped>
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

      .underline {
        display: block;
        position: relative;
        width: 80%;
        border: 1px solid #8c9fa6;
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
        /* or 121% */

        /* tco 3 */

        color: #015467;

        @media (max-width: 385px) {
          font-size: 32px;
        }
      }

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        /* identical to box height, or 111% */

        /* tco 3 */

        color: #015467;
      }

      .steps {
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: 2px;

        span {
          display: block;
          width: 40px;
          height: 4px;
          background: rgba(1, 84, 103, 0.1);
          border-radius: 4px;
        }

        .done {
          background: #5e8698;
        }
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
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            /* identical to box height, or 114% */

            /* black background */

            color: #30454e;
          }

          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height, or 125% */

            /* grey */

            color: #8c9fa6;
          }
        }
      }

      .years {
        width: 80%;

        @media (max-width: 886px) {
          width: 100%;
          max-width: inherit;
          margin: auto;
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
  img {
    padding: 12px 18px 12px 14px;
    border: 1px solid #8c9fa6;
    border-radius: 50%;
    margin-right: 24px;
    cursor: pointer;
    pointer-events: auto;
    touch-action: auto;
    background: rgba(1, 84, 103, 0.1);
  }
  img:last-child {
    padding: 12px 14px 12px 18px;
  }
  // .disabled {
  //   cursor: not-allowed;
  //   pointer-events: none;
  //   touch-action: none;
  //   background: #ffffff;
  // }
}
</style>
