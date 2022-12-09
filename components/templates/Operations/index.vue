<template>
  <div class="operations">
    <div class="container">
      <MoleculesBreadcrumbs class="operations__breadcrumbs">
        <AtomsBreadOption to="/">{{ $t('operation.home') }}</AtomsBreadOption>
        <AtomsBreadOption to="/operations">{{
          $t('operation.operatinos')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="operations__title">{{
        $t('operation.operatinos')
      }}</AtomsTitle>
      <div class="operations__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
    </div>
    <OrganismsSectionOperationSvg :data="sideSvg[0]" />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide"
      :key="key"
      :side="!!(key % 2)"
      :data="item"
    />
    <OrganismsSectionOperationSvg
      class="operations__production-security"
      :data="sideSvg[1]"
    />
    <OrganismsSectionOperationChart />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide2"
      :key="'second' + key"
      :side="!(key % 2)"
      :data="item"
    />
    <OrganismsSectionOperationSvg
      class="operations__production-security chesm"
      :data="sideSvg[2]"
    >
      <template #description>
        <AtomsFile
          file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
          :text="$t('operation.file1')"
          icon="xls"
        />
        <AtomsFile
          file="@/assets/files/statistics.pdf"
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
    <OrganismsSectionAboutBlock12 class="operations__news" />
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
        },
        {
          title: this.$t('operation.textSlide')[1].title,
          description: [
            this.$t('operation.textSlide')[1].description[0],
            this.$t('operation.textSlide')[1].description[1],
          ],
          image: 'operation/operations2.png',
        },
        {
          title: this.$t('operation.textSlide')[2].title,
          description: [this.$t('operation.textSlide')[2].description],
          image: 'operation/operations3.png',
        },
        {
          title: this.$t('operation.textSlide')[3].title,
          description: [this.$t('operation.textSlide')[3].description],
          image: 'operation/operations4.png',
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
        },
        {
          title: this.$t('operation.textSlide2')[1].title,
          description: [this.$t('operation.textSlide2')[1].description],
          image: 'operation/operations6.png',
        },
        {
          title: this.$t('operation.textSlide2')[2].title,
          description: [this.$t('operation.textSlide2')[2].description],
          image: 'operation/operations7.png',
          background: true,
        },
      ],
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
.operations {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 20px;
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

  &__news {
    background: #f2f6f7;
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
