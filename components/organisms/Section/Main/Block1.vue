<script>
import jsonData from '~/components/templates/News/json_data.json'
const data = jsonData[0]
export default {
  data() {
    return {
      slides: [
        {
          title: data[this.$i18n.locale].title,
          text: data[this.$i18n.locale].body,
          date: data[this.$i18n.locale].date,
          button: this.$t('home.block_11[0].button'),
          img: require('@/assets/img/new/new_28.jpg'),
          link: this.localePath('/news/3'),
        },
        {
          title: this.$t('home.block_11[0].title'),
          text: this.$t('home.block_11[0].text'),
          date: this.$t('home.block_11[0].date'),
          button: this.$t('home.block_11[0].button'),
          img: require('@/assets/img/banner_bg.png'),
          link: this.localePath('/news/23'),
        },
        {
          title: this.$t('home.block_11[2].title'),
          text: this.$t('home.block_11[2].text'),
          date: this.$t('home.block_11[2].date'),
          button: this.$t('home.block_11[2].button'),
          img: require('@/assets/img/banner_bg_3.png'),
          link: this.localePath('/news/25'),
        },
        {
          title: this.$t('home.block_11[3].title'),
          text: this.$t('home.block_11[3].text'),
          date: this.$t('home.block_11[3].date'),
          button: this.$t('home.block_11[3].button'),
          img: require('@/assets/img/banner_bg_4.png'),
          link: this.localePath('/news/26'),
        },
      ],
      options: {
        pagination: '.steps span',
        loop: true,
        interval: 50000000,
        slidesPerView: 1,
        id: 'main-slider-a1',
        slide: this.slideTo,
      },
    }
  },
  methods: {
    slideTo() {},
    nav() {},
  },
}
</script>

<template>
  <div class="slider-cont container">
    <OrganismsSlider class="my-slider" :options="options">
      <MoleculesSlide v-for="(slide, slide_index) in slides" :key="slide_index">
        <div class="double-block tco__partners">
          <div class="tco__partners-wrapper">
            <p class="tco__partners-date" v-text="slide.date"></p>
            <h3 class="tco__partners-title" v-text="slide.title"></h3>
            <p class="tco__partners-text" v-text="slide.text"></p>
            <div class="tco__partners-footer">
              <nuxt-link class="slide__link" :to="slide.link" target="_blank">
                <span>{{ slide.button }}</span>
                <img src="@/assets/img/right-Arrow.png" />
              </nuxt-link>
              <div class="steps">
                <span v-for="line in 4" :key="line"></span>
              </div>
            </div>
          </div>
          <div class="tco__partners-image">
            <img :src="slide.img" alt="kazmunaylogo" />
          </div>
        </div>
      </MoleculesSlide>
    </OrganismsSlider>
  </div>
</template>

<style scoped lang="scss">
.tco {
  &__partners {
    justify-content: space-between;
    align-items: flex-start;
    @include wide-tablet {
      flex-direction: column-reverse;
    }
    &-image {
      max-height: 700px;
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
      @include wide-tablet {
        width: 100%;
      }
    }
    &-wrapper {
      padding: 0px 40px 0px 0;
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 25px;
      text-align: left;
      width: 50%;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      @include wide-tablet {
        max-width: 100%;
        padding-top: 0;
        gap: 10px;
        width: 100%;
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
        margin-bottom: 20px;
        @media (orientation: portrait) {
          margin: 0px;
          font-size: 18px;
        }
      }
    }
    &-date {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #8c9fa6;
    }
    &-title {
      font-family: 'Montserrat', sans-serif !important;
      font-weight: 700 !important;
      font-size: 36px;
      min-height: 136px;
      margin: 20px 0;
      @include phone {
        min-height: auto;
      }
    }
    &-text {
      flex-grow: 3;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      min-height: 140px;
      font-size: rem(20);
      line-height: 28px;
      color: #30454e;
    }
    &-footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include wide-tablet {
        justify-content: normal;
        gap: 30px;
      }
    }
    background: #ffffff;
  }
}
@media (orientation: portrait) {
  .double-block div {
    width: 100%;
  }
}
.slide {
  &__link {
    transform: translateY(-10px);
    display: flex;
    align-items: center;
    background: #015467;
    box-shadow: 20px 4px 34px rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    padding: 14px 32px;
    width: max-content !important;
    cursor: pointer;
    span {
      display: inline-block;
      height: 20px;
    }
    img {
      margin-left: 12px;
      width: 20px;
      height: 20px;
    }
  }
}
.steps {
  display: flex;
  align-items: center;
  gap: 2px;
  width: auto;
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
  max-height: 100%;
}
</style>
