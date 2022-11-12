<template>
  <section class="section--blue" style="padding: 0">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div
          class="double-block tco__partners"
          style="justify-content: flex-end"
        >
          <div class="tco__partners-wrapper">
            <h1 v-text="slide.title"></h1>
            <div class="underline"></div>
            <p v-text="slide.text"></p>
            <div v-if="slide.pdf">
              <img
                src="@/assets/icons/pdf.svg"
                alt="pdf"
                width="30"
                height="40"
              />
              <span>Путь ТШО (pdf)</span>
            </div>
          </div>
          <img src="@/assets/img/photo.png" />
        </div>
      </MoleculesSlide>
    </OrganismsSlider>

    <div class="main_b8_actions">
      <img
        class="main_b8_actions_prev"
        src="../../../../assets/icons/small-chevron-left.svg"
        alt="small-chevron-left"
        width="44px"
        height="44px"
      />
      <img
        class="main_b8_actions_next"
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
  name: 'TcoFrontBlock8',

  data() {
    return {
      options: {
        navigation: {
          previous: '.main_b8_actions_prev',
          next: '.main_b8_actions_next',
        },
        loop: true,
        slidesPerView: 1,
        id: 'main_b8',
        slide: this.slideTo,
      },
      slides: [
        {
          title: 'Достижение результата правильными методами',
          text: '«Путь ТШО» объясняет, кто мы, во что верим, как достигаем целей и к чему стремимся. Он обеспечивает единство понимания наших ценностей и моделей поведения не только нами, но и всеми, кто с нами взаимодействует.',
          pdf: true,
        },
        {
          title: 'Цель',
          text: 'Наша основная цель – приносить наибольшую пользу Республике Казахстан, учредителям ТШО и нашим сотрудникам.',
        },
        {
          title: 'Перспективная задача',
          text: 'Быть самым безопасным, наиболее эффективным и прибыльным предприятием нефтегазовой отрасли в мире, вызывающим уважение за профессионализм его сотрудников, партнерские отношения и производственные показатели.',
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
        }
        img {
          width: 30px;
          margin-right: 12px;
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
