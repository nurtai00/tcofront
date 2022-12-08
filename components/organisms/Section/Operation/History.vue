<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      news: [
        {
          img: require('@/assets/img/career/news1.png'),
          tag: {
            text: this.$t('project.block_5.items[0].tag'), // '#Экономика',
            color: '#D01D12',
          },
          date: this.$t('project.block_5.items[0].date'),
          title: this.$t('project.block_5.items[0].title'),
          text: this.$t('project.block_5.items[0].text'),
        },
        {
          img: require('@/assets/img/career/news2.png'),
          tag: {
            text: this.$t('project.block_5.items[1].tag'),
            color: '#0DA9D7',
          },
          date: this.$t('project.block_5.items[1].date'),
          title: this.$t('project.block_5.items[1].title'),
          text: this.$t('project.block_5.items[1].text'),
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <section :class="white ? 'section' : 'section--blue'">
      <div class="container">
        <div class="news_title">
          <AtomsTitle class="atoms_title" small>{{
            $t('project.block_5.title')
          }}</AtomsTitle>
          <nuxt-link :to="localePath('/projects/other-projects')">{{
            $t('project.block_5.all')
          }}</nuxt-link>
        </div>
        <!-- <AtomsTag
          :tag="{
            text: $t('project.block_5.tag_1'),
            selected: false,
          }"
          class="atoms_tag"
        /> -->
        <div class="news_cards">
          <MoleculesCardNews
            v-for="(item, idx) in news"
            :key="idx"
            :news="item"
            :isNew="false"
            class="news_cards_item"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.news_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #00b0f0;
    @media (orientation: portrait) {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
.atoms_tag {
  margin-bottom: 20px;
}
.news_cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 24px;
  &_item {
    width: 100%;
    max-width: 376px;
  }
}
</style>
