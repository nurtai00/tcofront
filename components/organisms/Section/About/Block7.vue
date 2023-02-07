<template>
  <div id="wrapper">
    <section id="company_year" class="company_year">
      <div class="container">
        <AtomsTitle small :point="false">
          {{ $t('company.slider_3_title') }}
        </AtomsTitle>
      </div>
      <div class="tco__yearcircle"></div>
      <div class="double-block">
        <div class="tco__year">
          <h2
            v-for="(year, year_index) in year_list"
            :id="'year' + year.id"
            :key="year.text + ' ' + year_index"
            :class="{ active: active === year.text, small: year.small }"
            v-text="year.text"
          ></h2>
        </div>
        <div class="tco__year-text">
          <div
            v-for="(text, text_index) in text_list"
            :id="'text' + text.id"
            :key="text_index"
            class="tco__story"
          >
            <h4 v-text="text.title"></h4>
            <img v-if="text.image" :src="text.image" alt="image1" />
            <p v-text="text.text"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TcoFrontBlock7',
  data() {
    return {
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
      ],
      touchstartX: 0,
      scrolledIndex: 0,
    }
  },
  mounted() {
    // eslint-disable-next-line no-extend-native
    Array.prototype.hasMin = function (attrib) {
      return (
        (this.length &&
          this.reduce(function (prev, curr) {
            return prev[attrib] < curr[attrib] ? prev : curr
          })) ||
        null
      )
    }
    if (window.innerWidth < 550) {
      this.$nextTick(() => {
        document
          .querySelector('#company_year .double-block')
          .addEventListener('touchstart', this.touchStartHandler)
        document
          .querySelector('#company_year .double-block')
          .addEventListener('touchend', this.touchEndHandler)
      })
    } else {
      document.body
        .querySelector('#wrapper')
        .addEventListener('scroll', this.scrollHandler)
    }
  },
  beforeDestroy() {
    if (window.innerWidth < 550) {
      document
        .querySelector('#company_year .double-block')
        .removeEventListener('touchstart', this.touchStartHandler)
      document
        .querySelector('#company_year .double-block')
        .removeEventListener('touchend', this.touchEndHandler)
    } else {
      document.body
        .querySelector('#wrapper')
        .removeEventListener('scroll', this.scrollHandler)
    }
  },
  methods: {
    touchEndHandler(event) {
      console.log({ touchend: event })
      if (Math.abs(this.touchstartX - event.changedTouches[0].pageX) > 80) {
        console.log(
          'scrolled',
          this.touchstartX - event.changedTouches[0].pageX
        )
        if (this.touchstartX - event.changedTouches[0].pageX > 0) {
          this.scrolledIndex++
        } else if (
          this.touchstartX - event.changedTouches[0].pageX < 0 &&
          this.scrolledIndex
        ) {
          this.scrolledIndex--
        }
        if (this.scrolledIndex === 23) {
          this.scrolledIndex = 22
        }
        document.querySelector('.tco__year').style.left = `-${
          this.scrolledIndex * 53.6
        }vw`
        document.querySelector('.tco__year').style.width = `calc(100vw + ${
          this.scrolledIndex * 53.6
        }vw)`
        document
          .querySelectorAll('.tco__year h2')
          .forEach((h_element, h_index) => {
            if (h_index === this.scrolledIndex) {
              h_element.classList.add('active')
            } else {
              h_element.classList.remove('active')
            }
          })
        document.querySelector('.tco__year-text').style.left = `calc(-${
          this.scrolledIndex * 83
        }vw + ${34 * this.scrolledIndex}px)`
        document.querySelector('.tco__year-text').style.width = `calc(100vw + ${
          this.scrolledIndex * 83
        }vw - ${34 * this.scrolledIndex}px)`

        event.preventDefault()
      }
    },
    touchStartHandler(event) {
      console.log({ touchstart: event })
      this.touchstartX = event.touches[0].pageX
    },
    scrollHandler() {
      const year_list = []
      this.year_list.forEach((year) => {
        if (document.querySelector(`#text${year.id}`)) {
          year_list.push({
            id: year.id,
            positionY: Math.abs(
              document.querySelector(`#text${year.id}`).getBoundingClientRect()
                .y
            ),
          })
        }
      })
      const active_year = year_list.hasMin('positionY')
      if (
        document.querySelector('#company_year .main').getBoundingClientRect()
          .y < -200
      ) {
        document
          .querySelector('.tco__yearcircle')
          .classList.add('tco__yearcircle-fixed')
      } else {
        document
          .querySelector('.tco__yearcircle')
          .classList.remove('tco__yearcircle-fixed')
      }
      if (active_year.positionY > 300) {
        return
      }
      let active_index = 0
      document
        .querySelectorAll('.tco__year h2')
        .forEach((year_element, year_index) => {
          if (year_element.id === `year${active_year.id}`) {
            active_index = year_index
          }
        })
      document
        .querySelectorAll('.tco__year h2')
        .forEach((year_element, year_index) => {
          if (active_index === year_index) {
            year_element.classList.add('active')
          } else {
            year_element.classList.remove('active')
          }
          year_element.style.top = `-${(active_index - 1) * 24.83}vh`
        })
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
            color: #30454e;
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
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
  &__story {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 40px 40px 0;
    max-width: 572px;
    border-bottom: 1px solid #8c9fa6;

    @media (max-width: 886px) {
      width: 100%;
      max-width: inherit;
      padding: 15px;
    }
    @media (orientation: portrait) {
      width: 75vw;
      max-width: inherit;
      min-width: 75vw;
      padding: 0;
      padding-right: 8vw;
      padding-left: 16px;
      border-bottom: 0px solid #8c9fa6;
      border-right: 1px solid #8c9fa6;
    }

    h4 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      width: 100%;
      color: #30454e;
      @media (orientation: portrait) {
        font-size: 4.8vw; // 18px;
        line-height: 6.4vw; // 24px;
      }
    }
    img {
      width: 450px;
      @media (max-width: 886px) {
        width: 100%;
        max-width: inherit;
      }
      @media (orientation: portrait) {
        width: 75%;
      }
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
      @media (orientation: portrait) {
        font-size: 4.2vw; // 16px;
        line-height: 5.8vw; // 22px;
      }
    }
  }
  &__year {
    padding: 40px 2.7vw 40px 0;
    max-width: 50vw;
    overflow-y: hidden;
    position: sticky;
    top: 6.5vh;
    height: 100vh;
    @media (orientation: portrait) {
      position: relative !important;
      top: 0px;
      height: auto;
      width: 100vw;
      display: flex;
      max-width: inherit;
      padding: 0;
      padding: 28px 0;
      padding-left: 13.6vw;
      left: 0px;
      overflow-x: hidden;
      transition: 0.5s all ease;
    }
    h2 {
      position: relative;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 186px; // 12.91vw; // 186px;
      line-height: 224px; // 15.55vw; // 224px;
      color: #015467;
      opacity: 0.08;
      transition: 0.5s all ease;
      text-align: right;
      padding-right: 3.2vw;
      top: rem(200px);
      @media (orientation: portrait) {
        font-size: 22vw; // 86px;
        line-height: 24vw; // 90px;
        top: 0px !important;
      }
    }
    .active {
      opacity: 1;
    }
    .small {
      font-size: 112px; // 7.77vw; // 112px;
      line-height: 224px; // 15.55vw; // 224px;
      @media (orientation: portrait) {
        font-size: 13.23vw; // 51px
        line-height: 24vw; // 90px;
      }
    }
    &-text {
      padding-bottom: 0px; // 50vw;
      @media (orientation: portrait) {
        padding-bottom: 0px;
        padding-top: 40px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        width: 100vw;
        overflow-x: hidden;
        transition: 0.5s all ease;
        position: relative;
      }
    }
  }
  &__yearcircle {
    position: absolute;
    left: 50px;
    top: 32vh;
    width: 32.6vh; // 20vw;
    height: 32.6vh; // 20vw;
    background: #ffffff;
    opacity: 0.4;
    border: 3px solid #015467;
    box-shadow: 3px 3px 50px rgba(0, 176, 240, 0.1);
    border-radius: 50%;
    transition: 0.5s all ease;
    opacity: 0;
    @media (orientation: portrait) {
      width: 39vw;
      height: 39vw;
      left: 30vw;
      top: calc(66px + 28px);
      opacity: 0.4;
    }
  }
  &__yearcircle-fixed {
    position: sticky;
    width: 240px;
    height: 240px;
    left: 260px;
    top: 40%;
    opacity: 0.4;
  }
}
.company_year {
  position: relative;
}
#wrapper {
  height: 800px;
  overflow: auto;
  max-width: 1200px;
  margin: 0 auto;
  @include phone {
    height: 800px;
  }
}
</style>
