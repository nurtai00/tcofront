<template>
  <div class="news_career">
    <div class="container">
      <div class="news_title">
        <AtomsTitle class="atoms_title" small> Новости ТШО </AtomsTitle>
        <nuxt-link :to="localePath('/news')">Все Новости ТШО</nuxt-link>
      </div>
      <AtomsTag
        :tag="{
          text: 'Sustainability',
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
          img: require('@/assets/img/career/news1.png'),
          tag: {
            text: '#Экономика',
            color: '#D01D12',
          },
          date: '03/05/2022',
          title: 'Тенгизшевройл объявляет о Хакатоне',
          text: 'ТОО «Тенгизшевройл»  в поисках лучшего цифрового продукта объявляет о Хакатоне, который состоится...',
        },
        {
          img: require('@/assets/img/career/news2.png'),
          tag: {
            text: '#Технология',
            color: '#0DA9D7',
          },
          date: '03/05/2022',
          title: 'Вниманию пользователей Интернет',
          text: 'Тенгизшевройл (ТШО) стало известно о распространяемой в социальных сетях ложной инфор...',
        },
        {
          img: require('@/assets/img/career/news3.png'),
          tag: {
            text: '#Окружающая среда',
            color: '#EDA210',
          },
          date: '03/05/2022',
          title: 'Тенгизшевройл продолжит оказывать ...',
          text: 'Генеральный директор ТОО «Тенгизшевройл» (ТШО) Кевин Лайон и Аким Жылыойского района Атырауско...',
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
