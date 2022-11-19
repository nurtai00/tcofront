<template>
  <div class="news">
    <div class="container">
      <div class="news_title">
        <AtomsTitle class="atoms_title" small> Новости ТШО </AtomsTitle>
        <nuxt-link to="/news">Все Новости ТШО</nuxt-link>
      </div>
      <AtomsTag
        :tag="{
          text: 'Производство',
          selected: true,
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
          img: require('@/assets/img/relations/news-1.jpg'),
          tag: {
            text: '#Производство',
            color: '#015467',
          },
          date: '03/05/2022',
          title: 'Камшат Байжанова: быть конкурентным ...',
          text: 'Выстраивание ценностей и открытая корпоративная среда, в которой каждый работник может понять свои...',
        },
        {
          img: require('@/assets/img/relations/news-2.jpg'),
          tag: {
            text: '#Производство',
            color: '#015467',
          },
          date: '09/06/2022',
          title: 'Тенгизшевройл изучает возможности оте..',
          text: 'В Алматы прошел Форум «Цифровой Тенгизшевройл – 2022» (Форум),  цель которого  изучить возможности ...',
        },
        {
          img: require('@/assets/img/relations/news-3.jpg'),
          tag: {
            text: '#Производство',
            color: '#015467',
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
.news {
  width: 100%;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
  }
}
.news_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
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
