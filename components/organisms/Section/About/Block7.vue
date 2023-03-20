<template>
  <div class="container">
    <div class="wrapper">
      <div class="yearSwiper">
        <div class="swiper-wrapper">
          <div
            v-for="year of year_list"
            :key="year.text"
            class="swiper-slide swiper-year"
          >
            <h1 class="year" :class="{ 'year-small': year.small }">
              {{ year.text }}
            </h1>
          </div>
        </div>
      </div>
      <div class="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) of text_list"
            :key="index"
            class="swiper-slide"
          >
            <div class="history">
              <h1 class="history__title">{{ slide.title }}</h1>
              <template v-if="!!slide.image && isArray(slide.image)">
                <img
                  v-for="img of slide.image"
                  :key="img"
                  class="history__img"
                  :src="img"
                  alt="photo"
                />
              </template>
              <img v-else-if="!!slide.image" :src="slide.image" alt="photo" />
              <p>{{ slide.text }}</p>
              <div class="history__divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'TcoFrontBlock7',
  data() {
    return {
      isTablet: window.matchMedia('(max-width: 768px)').matches,
      textSwiper: null,
      yearSwiper: null,
      year_list: [
        {
          text: '1979',
          id: '1979',
        },
        {
          text: '1985',
          id: '19851',
        },
        {
          text: '1985',
          id: '19852',
        },
        {
          text: '1986',
          id: '1986',
        },
        {
          text: '1991',
          id: '1991',
        },
        {
          text: '1993',
          id: '1993',
        },
        {
          text: '1993/98',
          id: '1993-1998',
          small: true,
        },
        {
          text: '1997',
          id: '1997',
        },
        {
          text: '1999',
          id: '1999',
        },
        {
          text: '2001',
          id: '2001',
        },
        {
          text: '2001/08',
          id: '2001-2008',
          small: true,
        },
        {
          text: '2006/08',
          id: '2006-2008',
          small: true,
        },
        {
          text: '2008',
          id: '2008',
        },
        {
          text: '2009',
          id: '2009',
        },
        {
          text: '2009/12',
          id: '2009-2012',
          small: true,
        },
        {
          text: '2011',
          id: '2011',
        },
        {
          text: '2012',
          id: '2012',
        },
        {
          text: '2013',
          id: '20131',
        },
        {
          text: '2013',
          id: '20132',
        },
        {
          text: '2015',
          id: '2015',
        },
        {
          text: '2016',
          id: '2016',
        },
        {
          text: '2017',
          id: '2017',
        },
        {
          text: '2018',
          id: '2018',
        },
        {
          text: '2019',
          id: '2019',
        },
        {
          text: '2019',
          id: '2019',
        },
        {
          text: '2020',
          id: '2020',
        },
        {
          text: '2020/21',
          id: '2020-2021',
          small: true,
        },
        {
          text: '2021',
          id: '2021',
        },
        {
          text: '2021',
          id: '2021',
        },
        {
          text: '2022',
          id: '2022',
        },
      ],
      active: '1979',
      text_list: [
        {
          title: this.$t('company.slider_3[0].title'),
          text: this.$t('company.slider_3[0].text'),
          image: require('@/assets/img/year/image1.png'),
          id: '1979',
        },
        {
          title: this.$t('company.slider_3[1].title'),
          text: this.$t('company.slider_3[1].text'),
          id: '19851',
        },
        {
          title: this.$t('company.slider_3[2].title'),
          text: this.$t('company.slider_3[2].text'),
          image: require('@/assets/img/year/image2.png'),
          id: '19852',
        },
        {
          title: this.$t('company.slider_3[3].title'),
          text: this.$t('company.slider_3[3].text'),
          id: '1986',
        },
        {
          title: this.$t('company.slider_3[4].title'),
          text: this.$t('company.slider_3[4].text'),
          id: '1991',
        },
        {
          title: this.$t('company.slider_3[5].title'),
          text: this.$t('company.slider_3[5].text'),
          image: require('@/assets/img/year/image3.png'),
          id: '1993',
        },
        {
          title: this.$t('company.slider_3[6].title'),
          text: this.$t('company.slider_3[6].text'),
          id: '1993-1998',
        },
        {
          title: this.$t('company.slider_3[7].title'),
          text: this.$t('company.slider_3[7].text'),
          id: '1997',
        },
        {
          title: this.$t('company.slider_3[8].title'),
          text: this.$t('company.slider_3[8].text'),
          id: '1999',
        },
        {
          title: this.$t('company.slider_3[9].title'),
          text: this.$t('company.slider_3[9].text'),
          image: require('@/assets/img/year/image4.png'),
          id: '2001',
        },
        {
          title: this.$t('company.slider_3[10].title'),
          text: this.$t('company.slider_3[10].text'),
          id: '2001-2008',
        },
        {
          title: this.$t('company.slider_3[11].title'),
          text: this.$t('company.slider_3[11].text'),
          id: '2006-2008',
        },
        {
          title: this.$t('company.slider_3[12].title'),
          text: this.$t('company.slider_3[12].text'),
          image: require('@/assets/img/year/image5.png'),
          id: '2008',
        },
        {
          title: this.$t('company.slider_3[13].title'),
          text: this.$t('company.slider_3[13].text'),
          id: '2009',
        },
        {
          title: this.$t('company.slider_3[14].title'),
          text: this.$t('company.slider_3[14].text'),
          id: '2009-2012',
        },
        {
          title: this.$t('company.slider_3[15].title'),
          text: this.$t('company.slider_3[15].text'),
          image: require('@/assets/img/year/image6.png'),
          id: '2011',
        },
        {
          title: this.$t('company.slider_3[16].title'),
          text: this.$t('company.slider_3[16].text'),
          id: '2012',
        },
        {
          title: this.$t('company.slider_3[17].title'),
          text: this.$t('company.slider_3[17].text'),
          id: '20131',
        },
        {
          title: this.$t('company.slider_3[18].title'),
          text: this.$t('company.slider_3[18].text'),
          id: '20132',
        },
        {
          title: this.$t('company.slider_3[19].title'),
          text: this.$t('company.slider_3[19].text'),
          id: '2015',
        },
        {
          title: this.$t('company.slider_3[20].title'),
          text: this.$t('company.slider_3[20].text'),
          image: require('@/assets/img/year/image7.png'),
          id: '2016',
        },
        {
          title: this.$t('company.slider_3[21].title'),
          text: this.$t('company.slider_3[21].text'),
          id: '2017',
        },
        {
          title: this.$t('company.slider_3[22].title'),
          text: this.$t('company.slider_3[22].text'),
          image: require('@/assets/img/year/image8.png'),
          id: '2018',
        },
        {
          title: this.$t('company.slider_3[23].title'),
          text: this.$t('company.slider_3[23].text'),
          id: '2019',
        },
        {
          title: this.$t('company.slider_3[24].title'),
          text: this.$t('company.slider_3[24].text'),
          id: '2019',
        },
        {
          title: this.$t('company.slider_3[25].title'),
          text: this.$t('company.slider_3[25].text'),
          image: [
            require('@/assets/img/year/image9.png'),
            require('@/assets/img/year/image10.png'),
          ],
          id: '2020',
        },
        {
          title: this.$t('company.slider_3[26].title'),
          text: this.$t('company.slider_3[26].text'),
          image: require('@/assets/img/year/image11.png'),
          id: '2020-2021',
        },
        {
          title: this.$t('company.slider_3[27].title'),
          text: this.$t('company.slider_3[27].text'),
          image: require('@/assets/img/year/image12.png'),
          id: '2021',
        },
        {
          title: this.$t('company.slider_3[28].title'),
          text: this.$t('company.slider_3[28].text'),
          image: require('@/assets/img/year/image13.png'),
          id: '2021',
        },
        {
          title: this.$t('company.slider_3[29].title'),
          text: this.$t('company.slider_3[29].text'),
          image: require('@/assets/img/year/image14.png'),
          id: '2022',
        },
      ],
    }
  },
  watch: {
    yearSwiper: {
      handler(slider) {
        if (slider.activeIndex !== this.textSwiper.activeIndex) {
          this.textSwiper.slideTo(slider.activeIndex)
        }
      },
      deep: true,
    },
    textSwiper: {
      handler(slider) {
        if (slider.activeIndex !== this.yearSwiper.activeIndex) {
          this.yearSwiper.slideTo(slider.activeIndex)
        }
      },
      deep: true,
    },
  },
  async mounted() {
    // eslint-disable-next-line no-extend-native
    await this.$nextTick()
    this.textSwiper = new Swiper('.mySwiper', {
      direction: this.isTablet ? 'horizontal' : 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      parallax: true,
      speed: 600,
      slideActiveClass: 'content-active',
      // breakpoints: {
      //   768: {
      //     direction: 'horizontal',
      //   },
      // },
    })
    this.yearSwiper = new Swiper('.yearSwiper', {
      direction: this.isTablet ? 'horizontal' : 'vertical',
      slidesPerView: this.isTablet ? 1 : 3,
      spaceBetween: 30,
      mousewheel: true,
      parallax: true,
      speed: 600,
      slideActiveClass: 'year-active',
      centeredSlides: true,
      // breakpoints: {
      //   768: {
      //     direction: 'horizontal',
      //   },
      // },
    })
  },
  beforeDestroy() {
    this.textSwiper.destroy()
  },
  methods: {
    isArray(value) {
      return Array.isArray(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.history {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  &__img {
    max-height: 200px;
    height: 100%;
  }
  &-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
  img {
    max-width: 450px;
    max-height: 300px;
  }
  &-divider {
    height: 1px;
    width: 100%;
    color: #181716;
  }
}
.swiper-slide {
  padding: 20px;
}
.swiper-year {
  width: 100%;
  @include tablet {
    height: 150px !important;
  }
}
.swiper-wrapper {
  max-height: 800px;
}
.year {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: rem(186);
  line-height: 224px;
  color: #015467;
  opacity: 0.3;
  &-small {
    font-size: 120px;
  }
  @include tablet {
    font-size: 80px;
    &-small {
      font-size: 60px;
    }
  }
  h1 {
    opacity: 0.3;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 0;
      width: 128px;
      height: 128px;
      border: 2px solid #015467;
      border-radius: 50%;
      opacity: 0;
    }
  }
  &-active {
    h1 {
      opacity: 1;
      position: relative;
      z-index: 20;
      &::before {
        position: absolute;
        content: '';
        top: -40px;
        right: -20px;
        width: 294px;
        height: 294px;
        border: 3px solid $c-tco3;
        z-index: 10px;
        background-color: rgba(#5e8698, 0.2);
        border-radius: 50%;
        opacity: 1;
        animation: fadeIn linear 0.6s;
        @include tablet {
          display: none;
        }
      }
    }
  }
}
.wrapper {
  max-height: 700px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  @include tablet {
    flex-direction: column;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
