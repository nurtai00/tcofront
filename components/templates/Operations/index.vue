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
          @click="onTag"
        />
      </div>
    </div>
    <OrganismsSectionOperationSvg :data="sideSvg[0]" class="svg1" />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide"
      :key="key"
      :side="!!(key % 2)"
      :data="item"
      :class="`slide${key}`"
    />
    <OrganismsSectionOperationSvg
      ref="security"
      class="operations__production-security"
      :data="sideSvg[1]"
    />
    <OrganismsSectionOperationChart />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide2"
      :key="'second' + key"
      :side="!(key % 2)"
      :data="item"
      :class="`slide2${key}`"
    />
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
          url: this.localePath('/products'),
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
          description: [
            this.$t('operation.textSlide')[0].description[0],
            this.$t('operation.textSlide')[0].description[1],
          ],
          image: 'operation/operations1.png',
          style: 'width:50vw;max-width:50vw',
        },
        {
          title: this.$t('operation.textSlide')[1].title,
          description: [
            this.$t('operation.textSlide')[1].description[0],
            this.$t('operation.textSlide')[1].description[1],
          ],
          image: 'operation/operations2.png',
          style: 'width:50vw;max-width:50vw',
        },
        {
          title: this.$t('operation.textSlide')[2].title,
          description: [this.$t('operation.textSlide')[2].description],
          image: 'operation/operations3.png',
          style: 'width:50vw;max-width:50vw',
        },
        {
          title: this.$t('operation.textSlide')[3].title,
          description: [this.$t('operation.textSlide')[3].description],
          image: 'operation/operations4.png',
          style: 'width:50vw;max-width:50vw',
        },
      ],
      textSlide2: [
        {
          title: this.$t('operation.textSlide2')[0].title,
          description: [this.$t('operation.textSlide2')[0].description],
          image: 'operation/operations5.png',
          link: () => {
            this.$store.commit('side/open', {
              description: this.$t('operation.textSlide2')[0].link,
            })
          },
          background: true,
          style: 'width:50vw;max-width:50vw',
        },
        {
          title: this.$t('operation.textSlide2')[1].title,
          description: [this.$t('operation.textSlide2')[1].description],
          image: 'operation/operations6.png',
          style: 'width:50vw;max-width:50vw',
        },
        {
          title: this.$t('operation.textSlide2')[2].title,
          description: [this.$t('operation.textSlide2')[2].description],
          image: 'operation/operations7.png',
          background: true,
          style: 'width:50vw;max-width:50vw',
        },
      ],
    }
  },
  computed: {
    chesmLink() {
      const mapOfFileLink = {
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=37e24b81%2Dfb28%2D4a5b%2Db259%2D16451578adb7',
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=86125821%2Df8d4%2D442a%2Da4ff%2D3cdceda972ab',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=17dc2880%2Df4fe%2D43a4%2D95af%2D683d2d863c42',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    tbStatisticLink() {
      const mapOfFileLink = {
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=56254fd9%2Db133%2D44d2%2Dbd55%2D5262eaf49bed',
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=8a89f2c9%2D5733%2D447b%2Da28c%2D976dbaac79e7',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=882bc44e%2De528%2D4deb%2Dab4b%2D6aec461c3b8f',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
  },
  methods: {
    onTag() {
      window.scrollTo({
        top: this.$refs.security.$el.offsetTop,
        behavior: 'smooth',
      })
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
    }
  }
  .slide0::v-deep {
    h3 {
      max-width: 270px;
      margin-bottom: 0px;
    }
  }
  .slide1::v-deep {
    h3 {
      width: 565px;
      margin-bottom: 0px;
      @media (max-width: 1350px) {
        width: auto;
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

  .slide22::v-deep {
    h3 {
      margin-bottom: 0px;
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
</style>
