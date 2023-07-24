<script>
import jsonData from '~/components/templates/News/json_data.json'
const data = jsonData[2]
const data2 = jsonData[3]
const data3 = jsonData[6]
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default: () => {},
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      news: [
        {
          id: 2,
          // img: require('@/assets/img/new/new_123.JPG'),
          img: require('@/assets/img/new/' + data[this.$i18n.locale].img),
          tag: {
            text: this.$t('home.tags[3]'),
            color: '#d96f28',
          },
          date: data[this.$i18n.locale].date,
          title: data[this.$i18n.locale].title,
          text: data[this.$i18n.locale].body[0].text,
        },
        {
          id: 3,
          // img: require('@/assets/img/new/new_120.JPG'),
          img: require('@/assets/img/new/' + data2[this.$i18n.locale].img),
          tag: {
            text: this.$t('home.tags[4]'),
            color: '#00B0F0',
          },
          date: data2[this.$i18n.locale].date,
          title: data2[this.$i18n.locale].title,
          text: data2[this.$i18n.locale].body[0].text,
        },
        {
          id: 6,
          // img: require('@/assets/img/new/new_109.JPG'),
          img: require('@/assets/img/new/' + data3[this.$i18n.locale].img),
          tag: {
            text: this.$t('home.tags[0]'),
            color: '#D92D20',
          },
          date: data3[this.$i18n.locale].date,
          title: data3[this.$i18n.locale].title,
          text: data3[this.$i18n.locale].body[0].text,
        },
      ],
    }
  },
  computed: {
    mappedNews() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.news
    },
    lang() {
      return this.$i18n.locale
    },
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
            v-for="(item, idx) in mappedNews"
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  grid-gap: 24px;
  &_item {
    width: 100%;
  }
}
</style>
