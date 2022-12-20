<template>
  <div class="news_career">
    <div class="container">
      <div class="news_title">
        <AtomsTitle class="atoms_title" small> {{ $t('career.news') }} </AtomsTitle>
        <nuxt-link :to="localePath('/news')">{{ $t('career.all-news') }}</nuxt-link>
      </div>
      <AtomsTag
        :tag="{
          text: $t('career.career'),
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          img: require('@/assets/img/career/news1.png'),
          tag: {
            text: `#${this.$t('career.economic')}`,
            color: '#D01D12',
          },
          date: '03/05/2022',
          title: this.$t('career.news_list')[0][0],
          text: this.$t('career.news_list')[0][1],
        },
        {
          id: 2,
          img: require('@/assets/img/career/news2.png'),
          tag: {
            text: `#${this.$t('career.techonolgy')}`,
            color: '#0DA9D7',
          },
          date: '03/05/2022',
          title: this.$t('career.news_list')[1][0],
          text: this.$t('career.news_list')[1][1],
        },
        {
          id: 3,
          img: require('@/assets/img/career/news3.png'),
          tag: {
            text: `#${this.$t('career.area')}`,
            color: '#EDA210',
          },
          date: '03/05/2022',
          title: this.$t('career.news_list')[2][0],
          text: this.$t('career.news_list')[2][1],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.news_career {
  width: 100%;
  padding: 80px 0;
  background: #f2f6f7;
  @include tablet() {
    padding: 40px 0;
  }
}
.news_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  @include tablet() {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 330px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      margin-top: 10px;
    }
  }
  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #00b0f0;
    @include tablet() {
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
  @include phone() {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
    grid-gap: 12px;
  }
}
</style>
