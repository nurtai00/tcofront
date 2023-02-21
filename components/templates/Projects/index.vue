<template>
  <div class="projects">
    <div class="container">
      <MoleculesBreadcrumbs class="projects__breadcrumbs">
        <AtomsBreadOption to="/">
          {{ $t('project.breadcrumbs_1[0]') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/projects">
          {{ $t('project.breadcrumbs_1[1]') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="projects__title">
        {{ $t('project.breadcrumbs_1[1]') }}
      </AtomsTitle>
      <div class="projects__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag(tag.offsetTop)"
        />
      </div>
    </div>
    <div class="projects__video">
      <img src="~/assets/img/projects/projects4.png" alt="" />
    </div>
    <OrganismsSectionOperationSvg ref="pbr" class="svgs" :data="sideSvg[0]">
      <template #description>
        <p class="mb20" v-text="$t('project.block_1.text')"></p>
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          :text="$t('project.block_1.pdf')"
          class="file"
          icon="pdf"
        />
      </template>
    </OrganismsSectionOperationSvg>
    <OrganismsSectionOperationSlide
      id="projectSlide"
      side
      style="padding-bottom: 20px"
      :data="slide"
      class="slide slide1"
    >
      <template #description>
        <div
          class="projects__slide desktop"
          style="width: 600px; max-width: 600px"
        >
          <div class="left">
            <div
              v-for="(item, key) in slider.left"
              :key="key"
              :class="{
                active: key === animationProgress,
                inactive: key < animationProgress,
              }"
              @click="animationProgress = key"
            >
              {{ item }}
            </div>
          </div>
          <div class="right">
            <div
              v-for="(item, key) in slider.right"
              :key="key"
              :class="{ active: key === animationProgress }"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div
          class="projects__slide mobile"
          style="width: 600px; max-width: 600px"
        >
          <div :ref="swiper" class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="item of slider.mobile"
                :key="item.title"
                class="swiper-slide"
              >
                <h3>{{ item.title }}</h3>
                <span>{{ item.description }}</span>
              </div>
            </div>
            <div class="main_b4_actions">
              <img
                class="main_b4_actions_prev"
                src="~/assets/icons/small-chevron-left.png"
                alt="small-chevron-left"
                @click="prevEl"
              />
              <img
                class="main_b4_actions_next"
                src="~/assets/icons/small-chevron-right.png"
                alt="small-chevron-right"
                @click="nextEl"
              />
            </div>
          </div>
        </div>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide2"
      class="slide last"
    >
      <template #description="{ description }">
        <p>{{ description }}</p>
        <!--        <button class="operations__button-more" @click="slide2.link()">-->
        <!--          Читать дальше-->
        <!--        </button>-->
      </template>
    </OrganismsSectionOperationSlide>
    <div class="protocols">
      <div class="container">
        <div class="projects__protocols">
          <div class="projects__protocols_header">
            <AtomsTitle class="projects__title protocol" style="margin: 0">
              {{ $t('project.protocols.title') }}
            </AtomsTitle>
            <nuxt-link :to="localePath('/projects/protocols')" class="more">
              {{ $t('project.protocols.all') }}
            </nuxt-link>
          </div>
          <div class="projects__protocols_body">
            <OrganismsSectionProtocolCard
              v-for="(item, key) in lastProtocols"
              :key="key"
              :content="item"
              @click="onProtocolCardClick"
            />
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide3"
      class="slide slide__last"
    >
      <template #description="{ description, showLinkButton, openPopup }">
        <p>{{ description }}</p>
        <button
          v-if="showLinkButton"
          class="operations__button-more"
          @click="openPopup"
        >
          Читать дальше
        </button>
        <AtomsFile
          :file="docPubr"
          :text="$t('project.block_4.pdf_1')"
          icon="pdf"
        />
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          :text="$t('project.block_4.pdf_2')"
          icon="pdf"
        />
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationHistory />
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'
export default {
  data() {
    return {
      swiper: null,
      animationProgress: 0,
      isMobile: false,
      tags: [
        {
          id: 1,
          text: this.$t('project.tags_1[0]'),
          offsetTop: null,
        },
        {
          id: 2,
          text: this.$t('project.tags_1[1]'),
          url: '/projects/other-projects',
        },
      ],
      sideSvg: [
        {
          title: this.$t('project.block_1.title'),
          icon: require('@/assets/icons/production.png'),
        },
      ],
      cards1: [
        {
          number: '01',
          name: 'Покупатели',
          description:
            'ТШО создал долгосрочную, разнообразную и квалифицированную клиентскую базу, которая поддерживает надежную реализацию продукта в рамках срочных договоров купли-продажи.',
        },
      ],
      slide: {
        image: 'projects/projects1.png',
      },
      slide2: {
        title: this.$t('project.block_3.title'),
        description: this.$t('project.block_3.text'),
        image: 'projects/projects2.png',
        link: () => {
          this.$store.commit('side/open', {
            html: `<p>${this.$t('project.block_3.texts[0]')}</p>
<img src="${require('@/assets/img/projects/projects-process1.png')}">
<img src="${require('@/assets/img/projects/projects-process2.png')}">
<p>${this.$t('project.block_3.texts[1]')}</p>
<img src="${require('@/assets/img/projects/projects-process3.png')}">
<p>${this.$t('project.block_3.texts[2]')}</p>
<img src="${require('@/assets/img/projects/projects-process4.png')}">
<img src="${require('@/assets/img/projects/projects-process5.png')}">
<p>${this.$t('project.block_3.texts[3]')}</p>
`,
          })
        },
      },
      slide3: {
        title: this.$t('project.block_4.title'),
        image: 'projects/projects3.png',
        description: this.$t('project.block_4.text'),
        link: () => {
          this.$store.commit('side/open', {
            name: this.$t('project.block_4.title'),
            html: `<p>${this.$t('project.block_4.big_text')}</p>
            <ul>
              <li>${this.$t('project.block_4.li_1')}</li>
              <li>${this.$t('project.block_4.li_2')}</li>
              <li>${this.$t('project.block_4.li_3')}</li>
              <li>${this.$t('project.block_4.li_4')}</li>
              <li>${this.$t('project.block_4.li_5')}</li>
              <li>${this.$t('project.block_4.li_6')}</li>
              <li>${this.$t('project.block_4.li_7')}</li>
              <li>${this.$t('project.block_4.li_8')}</li>
              <li>${this.$t('project.block_4.li_9')}</li>
              <li>${this.$t('project.block_4.li_10')}</li>
              <li>${this.$t('project.block_4.li_11')}</li>
              <li>${this.$t('project.block_4.li_12')}</li>
              <li>${this.$t('project.block_4.li_13')}</li>
              <li>${this.$t('project.block_4.li_14')}</li>
              <li>${this.$t('project.block_4.li_15')}</li>
            </ul>

            <p>${this.$t('project.block_4.last_text')}</p>
`,
          })
        },
      },
      cards: [
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
        },
      ],
      slider: {
        style: 'width:50vw;max-width:50vw',
        left: [
          this.$t('project.block_2[0].title'),
          this.$t('project.block_2[1].title'),
          this.$t('project.block_2[2].title'),
        ],
        right: [
          this.$t('project.block_2[0].text'),
          this.$t('project.block_2[1].text'),
          this.$t('project.block_2[2].text'),
        ],
        mobile: [
          {
            title: this.$t('project.block_2[0].title'),
            description: this.$t('project.block_2[0].text'),
          },
          {
            title: this.$t('project.block_2[1].title'),
            description: this.$t('project.block_2[1].text'),
          },
          {
            title: this.$t('project.block_2[2].title'),
            description: this.$t('project.block_2[2].text'),
          },
        ],
      },
    }
  },
  computed: {
    lastProtocols() {
      const protocols = this.$t('project.protocols.items')
      return protocols
        .filter((protocol) => +protocol.year === 2018)
        .slice(0, this.isMobile ? 2 : 3)
    },
    docPubr() {
      const mapOfFileLink = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/projects-page/ru/feedback-management-process-flyer-(3).pdf?sfvrsn=70f1c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/projects-page/en/feedback-management-process-flyer-(3).pdf?sfvrsn=a6f6c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/projects-page/kk/feedback-management-process-flyer-(3).pdf?sfvrsn=5bf1c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
  },
  async mounted() {
    await this.$nextTick()
    // eslint-disable-next-line no-new
    this.isMobile = window.matchMedia('(max-width: 600px)').matches
    this.swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.main_b4_actions_next',
        prevEl: '.main_b4_actions_prev',
      },
      slidesPerView: 1,
    })
    console.log(this.swiper)
    this.tags[0].offsetTop = this.$refs?.pbr?.$el?.offsetTop
  },
  methods: {
    nextEl() {
      this.swiper.slideNext()
    },
    prevEl() {
      this.swiper.slidePrev()
    },
    onProtocolCardClick(link) {
      window.open(link, '_blank')
    },
    onTag(offsetTop) {
      if (offsetTop) {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.operations__button-more {
  cursor: pointer;
  margin-top: 20px;
  width: max-content;
  color: #00b0f0;
  text-decoration: underline;
  border: none;
  background-color: transparent;
}
.projects {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__video {
    width: 100%;

    img {
      width: 100%;
      max-height: 600px;
      object-fit: cover;
    }
  }

  &__description {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    color: $c-tco3;

    @include phone {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .slide::v-deep {
    .slide__content.container {
      background-color: white;
    }
  }

  .protocols {
    background-color: #f2f6f7;
  }

  &__protocols {
    padding: 80px 0;

    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    &_body {
      display: flex;
      flex-wrap: wrap;

      & > * {
        width: calc((100% - 48px) / 3);
        margin-bottom: 24px;
        height: 300px;

        @media screen and (min-width: 1025px) {
          &:not(:nth-child(3n)) {
            margin-right: 24px;
          }
        }
      }

      @include wide-tablet {
        flex-wrap: wrap;

        & > * {
          margin-bottom: 24px;
          width: calc((100% - 24px) / 2);

          @media screen and (min-width: 560px) {
            &:not(:nth-child(2n)) {
              margin-right: 24px;
            }
          }
        }
      }

      @include phone {
        & > * {
          margin-bottom: 8px;
          width: calc((100% - 9px) / 2);
          &:not(:nth-child(2n)) {
            margin-right: 9px;
          }
          word-break: break-word;
        }
      }
    }
  }

  &__slide {
    display: flex;
    &.desktop {
      @include phone {
        display: none;
      }
    }
    &.mobile {
      display: none;
      @include phone {
        display: flex;
        position: absolute;
        top: 20px;
        z-index: 20;
        overflow: hidden;
        .swiper {
          height: 370px;
        }
        h3 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          color: #ffffff;
        }
        span {
          font-family: 'Roboto';
          color: #ffffff;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
    .left {
      width: 270px;
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;

      & > div {
        margin-bottom: 46px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:not(.active) {
          color: #30454e;
          opacity: 0.1;
        }

        &.inactive {
        }
      }

      .active {
        color: #0282a0;
      }

      @include phone {
        & > div {
          font-size: 24px;
          margin-bottom: 22px;
          line-height: 110%;
        }
      }
    }

    .right {
      padding-top: 3px;
      flex: 1;
      text-align: right;

      & > div {
        display: none;
      }

      .active {
        display: block;
        font-size: 20px;
        color: $c-tco1;
        margin-left: 37px;
      }
    }
  }

  &__title {
    margin-bottom: 36px;
    &.protocol::v-deep {
      align-items: center;

      .main {
        color: $c-tco1;
      }

      svg {
        margin-top: 0;
      }
    }
  }

  &__tags {
    margin-bottom: 40px;
  }

  &__production-security.block {
    padding: 80px 0;

    @include tablet {
      padding: 20px 40px;
    }

    @include phone {
      padding: 20px 0;
    }
  }

  .chesm {
    background: white;
  }

  .grey {
    background-color: $c-tco33;
  }

  .svgs {
    &::v-deep .block__icon {
      max-height: 350px;
      img {
        height: 100%;
      }
    }

    .file::v-deep a {
      color: #00b0f0;
    }
  }

  &__news {
    background: #f2f6f7;
  }

  &__list {
    padding-left: 22px;

    &:not(&_num) {
      li {
        margin-bottom: 20px;
        list-style-type: disc;

        &::marker {
          color: $c-tco5;
          font-size: 24px;
        }
      }
    }

    &_num {
      margin-bottom: 20px;
      color: $c-tco1;
      padding-left: 22px;

      li {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 20px;
        list-style-type: decimal;

        @include phone {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .slide::v-deep {
    background-color: $c-tco33;
    .slide_text {
      margin-top: 20px;

      a {
        color: $c-tco5;
      }
    }

    .slide__content {
      .slide__title {
        color: $c-tco3;
      }
    }
  }

  .more {
    font-size: 18px;
    text-decoration: underline;
    color: #0da9d7;
  }
}

.slide::v-deep {
  .slide__wrapper {
    height: auto;
  }
  .slide__content-wrapper {
    padding-top: 0;
  }
}

.last::v-deep {
  .slide__content-wrapper {
    padding-top: 60px;
    @include phone {
      padding-top: 20px;
    }
  }
  .slide__wrapper {
    padding: 30px 0 0 0;
    //max-height: 700px;
    align-items: start;
  }
  .slide__image {
    @include phone {
      img {
        filter: brightness(0.6);
      }
      h3 {
        z-index: 20;
      }
    }
  }
}
.slide1 {
  overflow: hidden;
}
.slide1::v-deep {
  .slide__left {
    position: relative;
    .slide__content-wrapper {
      padding-top: 0px;
    }
  }
}
.main_b4_actions {
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  //position: relative;
  //left: 100px;
  //top: -160px;
  z-index: 60;
  @media (orientation: portrait) {
    position: absolute;
    bottom: 0;
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
