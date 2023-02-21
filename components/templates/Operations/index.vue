<template>
  <div class="operations">
    <div class="container">
      <MoleculesBreadcrumbs class="operations__breadcrumbs">
        <AtomsBreadOption to="/">{{ $t('operation.home') }}</AtomsBreadOption>
        <AtomsBreadOption to="/operations">
          {{ $t('operation.operatinos') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="operations__title">
        {{ $t('operation.operatinos') }}
      </AtomsTitle>
      <div class="operations__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag(tag.id)"
        />
      </div>
    </div>
    <OrganismsSectionOperationSvg :data="sideSvg[0]" class="svg1" />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide"
      :key="key"
      :ref="!!item.ref ? item.ref : ''"
      :side="!!(key % 2)"
      :data="item"
      :class="`slide slide${key}`"
      @on-title-click="onTitleClick"
    >
      <template #description="{ description }">
        <p>{{ description }}</p>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSvg
      ref="security"
      class="operations__production-security"
      :data="sideSvg[1]"
    >
      <template #description="{ description }">
        <p>{{ description }}</p>
      </template>
    </OrganismsSectionOperationSvg>
    <OrganismsSectionOperationChart />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide2"
      :key="'second' + key"
      :side="!(key % 2)"
      :data="item"
      :class="`slide slide2${key}`"
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
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSvg
      class="operations__production-security chesm"
      :data="sideSvg[2]"
    >
      <template #description>
        <AtomsFile :file="chesmLink" :text="$t('operation.file1')" icon="xls" />
        <AtomsFile
          :file="tbStatisticLink"
          :text="$t('operation.file2')"
          icon="pdf"
        />
      </template>
      <template #footer>
        <div class="cards">
          <OrganismsSectionOperationCard
            v-for="(item, key) in cards"
            :key="key"
            :class="`slide-grey-${key}`"
            :content="item"
          />
        </div>
      </template>
    </OrganismsSectionOperationSvg>
    <OrganismsSectionMainBlock2 class="operations__news" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: this.$t('operation.products'),
        },
        {
          id: 2,
          text: this.$t('operation.production_safety'),
        },
      ],
      cards: [
        {
          number: '01',
          name: this.$t('operation.cards')[0].name,
          description: this.$t('operation.cards')[0].description,
        },
        {
          number: '02',
          name: this.$t('operation.cards')[1].name,
          description: this.$t('operation.cards')[1].description,
        },
        {
          number: '03',
          name: this.$t('operation.cards')[2].name,
          description: this.$t('operation.cards')[2].description,
        },
        {
          number: '04',
          name: this.$t('operation.cards')[3].name,
          description: this.$t('operation.cards')[3].description,
        },
      ],
      sideSvg: [
        {
          title: this.$t('operation.sideSvg')[0].name,
          description: this.$t('operation.sideSvg')[0].description,
          icon: require('@/assets/icons/production.png'),
        },
        {
          title: this.$t('operation.sideSvg')[1].name,
          description: this.$t('operation.sideSvg')[1].description,
          icon: require('@/assets/icons/production_security.png'),
        },
        {
          title: this.$t('operation.sideSvg')[2].name,
          icon: require('@/assets/icons/process-control.png'),
        },
      ],
      textSlide: [
        {
          title: this.$t('operation.textSlide')[0].title,
          description: this.$t('operation.textSlide')[0].description,
          image: 'operation/operations1.png',
        },
        {
          title: this.$t('operation.textSlide')[1].title,
          description: this.$t('operation.textSlide')[1].description,
          image: 'operation/operations2.png',
        },
        {
          title: this.$t('operation.textSlide')[2].title,
          description: this.$t('operation.textSlide')[2].description,
          image: 'operation/operations3.png',
        },
        {
          title: this.$t('operation.textSlide')[3].title,
          description: this.$t('operation.textSlide')[3].description,
          image: 'operation/operations4.png',
          ref: 'production',
          url: this.localePath('/products'),
        },
      ],
      textSlide2: [
        {
          title: this.$t('operation.textSlide2')[0].title,
          description: this.$t('operation.textSlide2')[0].description,
          image: 'operation/operations5.png',
          link: () => {
            this.$store.commit('side/open', {
              description: this.$t('operation.textSlide2')[0].link,
            })
          },
        },
        {
          title: this.$t('operation.textSlide2')[1].title,
          description: this.$t('operation.textSlide2')[1].description,
          image: 'operation/operations6.png',
        },
        {
          title: this.$t('operation.textSlide2')[2].title,
          description: this.$t('operation.textSlide2')[2].description,
          image: 'operation/operations7.png',
        },
      ],
    }
  },
  computed: {
    chesmLink() {
      const mapOfFileLink = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/ru/chesm-qualification-questionnaire.xls?sfvrsn=34f2c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/en/chesm-qualification-questionnaire-(5).xls?sfvrsn=a1f3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/kk/chesm-qualification-questionnaire-(4).xls?sfvrsn=7bf2c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    tbStatisticLink() {
      const mapOfFileLink = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/ru/rates-and-definitions.pdf?sfvrsn=35f2c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/en/safety-statistics-definitions-and-rates_eng.pdf?sfvrsn=a0f3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/operations-page/kk/rates-and-definitions-(1).pdf?sfvrsn=7af2c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
  },
  methods: {
    onTitleClick(url) {
      const targetUrl = `${window.location.origin}${
        window.location.pathname
      }#${url.slice(1)}`
      window.open(targetUrl, '_blank')
    },
    onTag(id) {
      const mapOfScrollsTo = {
        1: () =>
          window.scrollTo({
            top: this.$refs.production[0].$el.offsetTop,
            behavior: 'smooth',
          }),
        2: () =>
          window.scrollTo({
            top: this.$refs.security.$el.offsetTop,
            behavior: 'smooth',
          }),
      }
      mapOfScrollsTo[id]()
    },
  },
}
</script>

<style lang="scss" scoped>
.operations {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  &__breadcrumbs {
    margin: 40px 0 20px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__tags {
    margin-bottom: 32px;
  }
  .svg1::v-deep {
    .block__icon {
      img {
        max-width: 137px;
        height: auto;
      }
    }
    @include tablet() {
      img {
        max-width: 200px;
        height: auto;
      }
    }
    .block__description {
      max-width: 776px;
    }
    .block__content {
      padding-right: 202px;
      @include tablet() {
        padding: 0;
      }
      @include phone {
        width: 100% !important;
      }
    }
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

  &__news {
    padding: 40px 0;
    background: #f2f6f7;
    @include tablet() {
      padding: 0;
    }
  }
}

.cards {
  display: flex;
  justify-content: space-between;

  & > * {
    width: calc((100% - 72px) / 4);
  }

  @include wide-tablet {
    flex-wrap: wrap;

    & > * {
      margin-bottom: 24px;
      width: calc((100% - 24px) / 2);
    }
  }

  @include phone {
    & > * {
      margin-bottom: 8px;
      width: calc((100% - 9px) / 2);
    }
  }
}
.slide::v-deep {
  .slide__wrapper {
    height: 400px;
  }
}
.slide-grey-0 {
  background: #f2f6f7;
}
.slide20::v-deep {
  background: #f2f6f7;
}
.slide22 {
  background: #f2f6f7;
}
</style>
