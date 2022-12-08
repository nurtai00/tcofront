<template>
  <div class="news">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{
          $t('news.breadcrumbs_1[0]')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/news">{{
          $t('news.breadcrumbs_1[1]')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> {{ $t('news.breadcrumbs_1[1]') }} </AtomsTitle>
      <AtomsTag
        v-for="(tag, idx) in tags"
        :key="idx"
        :tag="tag"
        @click="
          (val) => {
            val.selected = !val.selected
          }
        "
      />
    </div>
    <div class="news_all">
      <div class="container">
        <div class="news_list">
          <MoleculesCardNewsMain
            v-for="item in 7"
            :key="item"
            :index="item"
            :class="`news_card_` + item"
          />
        </div>
        <AtomsButton type="submit"> {{ this.$t('news.button'), }}</AtomsButton>
      </div>
    </div>
    <div class="news_publications">
      <OrganismsSectionNewsPublicationsBlock class="container" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          text: this.$t('news.tags[0]'),
          value: '',
          selected: false,
        },
        {
          text: this.$t('news.tags[1]'),
          value: '',
          selected: false,
        },
        {
          text: this.$t('news.tags[2]'),
          value: '',
          selected: false,
        },
        {
          text: this.$t('news.tags[3]'),
          value: '',
          selected: false,
        },
        {
          text: this.$t('news.tags[4]'),
          value: '',
          selected: false,
        },
        {
          text: this.$t('news.tags[5]'),
          value: '',
          selected: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  &_all {
    width: 100%;
    background: rgba(1, 84, 103, 0.1);
    padding: 80px 0;
    margin-top: 32px;
    @include tablet() {
      padding: 20px 0;
      margin-top: 12px;
    }
  }
  &_list {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 170px;
    @include tablet() {
      display: block;
      grid-gap: 0px;
      grid-template-columns: unset;
      grid-auto-rows: unset;
    }
  }
  &_card_1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &_card_2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &_card_3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &_card_4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  &_card_5 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  &_card_6 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
  }
  &_publications {
    width: 100%;
    background: #f2f6f7;
  }
}
.btn {
  margin: 40px auto 0;
  padding: 14px 85px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  @include tablet() {
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    padding: 12px 85px;
  }
}
</style>
