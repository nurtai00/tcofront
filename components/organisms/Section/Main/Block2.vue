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
          id: 0,
          img: require('@/assets/img/new/new_1.jpeg'),
          tag: {
            text: this.$t('home.block_2.items[1].tag'), // '#Экономика',
            color: '#D01D12',
          },
          date: this.$t('news.new_1.date'),
          title: this.$t('news.new_1.title'),
          text: this.$t('news.new_1.text'),
        },
        {
          id: 1,
          img: require('@/assets/img/new/new_2.jpeg'),
          tag: {
            text: this.$t('home.block_2.items[0].tag'),
            color: '#0DA9D7',
          },
          date: this.$t('news.new_2.date'),
          title: this.$t('news.new_2.title'),
          text: this.$t('news.new_2.text'),
        },
        {
          id: 2,
          img: require('@/assets/img/new/new_3.jpeg'),
          tag: {
            text: this.$t('home.block_2.items[2].tag'),
            color: '#EDA210',
          },
          date: this.$t('news.new_3.date'),
          title: this.$t('news.new_3.title'),
          text: this.$t('news.new_3.text'),
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
          <AtomsTitle class="atoms_title" small>
            {{ $t('home.block_2.title') }}
          </AtomsTitle>
          <nuxt-link :to="localePath('/news')">
            {{ $t('home.block_2.all_title') }}
          </nuxt-link>
        </div>
        <AtomsTag
          :tag="{
            text: $t('home.block_2.tag_1'),
            selected: false,
          }"
          class="atoms_tag"
        />
        <div class="news_cards">
          <MoleculesCardNews
            v-for="(item, idx) in news"
            :key="idx"
            :news="item"
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
