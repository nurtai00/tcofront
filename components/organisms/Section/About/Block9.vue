<template>
  <section style="padding: 0">
    <OrganismsSlider :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div
          class="double-block tco__partners"
          style="justify-content: flex-start"
        >
          <img src="@/assets/img/Rectangle 182.png" />
          <div class="tco__partners-wrapper" style="padding: 40px 0 40px 40px">
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
        src="../../../../assets/icons/small-chevron-left.svg"
        alt="small-chevron-left"
        width="44px"
        height="44px"
      />
      <img
        class="main_b9_actions_next"
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
      },
      slides: [
        {
          title: 'Ценности',
          text: 'Наши ценности определяют, кем мы являемся, и направляют нас к достижению результатов. Мы ведем свою деятельность, придерживаясь принципа ответственности в социальной сфере и в вопросах охраны окружающей среды, а также соблюдая законы и принося пользу обществу, в котором мы работаем.',
        },
        {
          title: 'Уважение к различиям и вовлеченность',
          text: 'Мы работаем в атмосфере открытости, в которой уважают уникальность и разнообразие культур, ценят талант, опыт и идеи каждого человека.',
        },
        {
          title: 'Высокие показатели',
          text: 'Мы стремимся к совершенству и достижению положительных результатов. Мы нацелены на высокую производительность и постоянное совершенствование. Мы придерживаемся модели поведения для достижения высоких показателей ТШО и несем ответственность за свои действия и результаты.',
        },
        {
          title: 'Честность и доверие',
          text: 'Мы честны по отношению к себе и другим. Мы стремимся заслужить доверие благодаря уважению и поддержке друг друга, соблюдая высочайшие этические нормы во всем, что мы делаем.',
        },
        {
          title: 'Партнерство',
          text: 'Мы строим доверительные, продуктивные и конструктивные отношения с государственными органами, учредителями, общественностью, деловыми партнерами, заказчиками и поставщиками, а также друг с другом. Мы наиболее успешны, когда достигаем успеха вместе.',
        },
        {
          title: 'Защита здоровья людей и охрана окружающей среды',
          text: 'Здоровье и безопасность наших сотрудников, производственная безопасность и охрана окружающей среды имеют для нас первостепенное значение. Мы стремимся к безаварийной производственной деятельности без травматизма, уделяя особое внимание на предотвращение происшествий с серьёзными последствиями.',
        },
        {
          title: 'Уважение к различиям и вовлеченность',
          text: 'Мы работаем в атмосфере открытости, в которой уважают уникальность и разнообразие культур, ценят талант, опыт и идеи каждого человека.',
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
      max-width: 572px;
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
    }
    background: #f2f6f7;
  }
}
::v-deep .slider-wrapper {
  height: auto;
}
.main_b9_actions {
  display: flex;
  align-items: center;
  position: relative;
  left: calc(50% + 40px);
  top: -85px;
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
