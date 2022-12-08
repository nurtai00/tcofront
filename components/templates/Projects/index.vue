<template>
  <div class="projects">
    <div class="container">
      <MoleculesBreadcrumbs class="projects__breadcrumbs">
        <AtomsBreadOption to="/">{{
          $t('project.breadcrumbs_1[0]')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/projects">{{
          $t('project.breadcrumbs_1[1]')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="projects__title">{{
        $t('project.breadcrumbs_1[1]')
      }}</AtomsTitle>
      <div class="projects__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
    </div>
    <div class="projects__video">
      <img src="~/assets/img/projects/projects4.png" alt="" />
    </div>
    <OrganismsSectionOperationSvg class="svgs" :data="sideSvg[0]">
      <template #description>
        <p class="mb20" v-text="$t('project.block_1.text')"></p>
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          :text="$t('project.block_1.pdf')"
          icon="pdf"
        />
      </template>
    </OrganismsSectionOperationSvg>

    <OrganismsSectionOperationSlide side :data="slide" class="slide">
      <div class="projects__slide">
        <div class="left">
          <div
            v-for="(item, key) in slider.left"
            :key="key"
            :class="{ active: key === activeSlide }"
            @click="activeSlide = key"
          >
            {{ item }}
          </div>
        </div>
        <div class="right">
          <div
            v-for="(item, key) in slider.right"
            :key="key"
            :class="{ active: key === activeSlide }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide2"
      class="slide"
    />
    <div class="protocols">
      <div class="container">
        <div class="projects__protocols">
          <div class="projects__protocols_header">
            <AtomsTitle class="projects__title">{{
              $t('project.protocols.title')
            }}</AtomsTitle>
            <nuxt-link :to="localePath('/projects/protocols')" class="more">
              {{ $t('project.protocols.all') }}
            </nuxt-link>
          </div>
          <div class="projects__protocols_body">
            <OrganismsSectionOperationCard
              v-for="(item, key) in cards"
              :key="key"
              :content="item"
            />
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :side="false" :data="slide3" class="slide">
      <p class="mb20">
        {{ $t('project.block_4.text') }}
      </p>
      <AtomsFile
        file="@/assets/files/statistics.pdf"
        :text="$t('project.block_4.pdf_1')"
        icon="pdf"
      />
      <AtomsFile
        file="@/assets/files/statistics.pdf"
        :text="$t('project.block_4.pdf_2')"
        icon="pdf"
      />
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationHistory />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0,
      tags: [
        {
          id: 1,
          text: this.$t('project.tags_1[0]'),
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
          icon: 'production',
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
      },
    }
  },
  methods: {
    onTag() {
      console.log('works')
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__video {
    width: 100%;

    img {
      width: 100%;
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
    overflow: hidden;
    gap: 20px;

    & > * {
      width: 50%;
    }

    .left {
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
      }

      .active {
        color: #0282a0;
      }
    }

    .right {
      text-align: right;

      & > div {
        display: none;
      }

      .active {
        display: block;
      }
    }
  }

  &__title {
    margin-bottom: 36px;
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
    &::v-deep .block__icon i {
      font-size: 260px;
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
    .slide_text {
      margin-top: 20px;

      a {
        color: $c-tco5;
      }
    }

    .slide__content {
      background-color: $c-tco33;
    }
  }

  .more {
    font-size: 18px;
    text-decoration: underline;
    color: #0da9d7;
  }
}
</style>
