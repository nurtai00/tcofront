<script>
export default {
  data() {
    return {
      tags: [
        'Производство',
        'Экология',
        'Соцпроекты',
        'Казсодержание',
        'Карьера',
        'ПБР-ПУУД',
      ],
    }
  },
}
</script>

<template>
  <div class="news container">
    <div class="news_header">
      <h1>Новости ТШО</h1>
      <AtomsTag v-for="tag in tags" :key="tag" :text="tag" />
    </div>
    <div class="news_all">
      <div class="news_list">
        <AtomsNewsCard
          v-for="item in 7"
          :key="item"
          :index="item"
          :class="`news_card_` + item"
        />
      </div>
      <div class="news_button">
        <button>Загрузить еще</button>
      </div>
    </div>
    <MoleculesPublicationsBlock class="news_publications" />
  </div>
</template>

<style scoped lang="scss">
p {
  margin: 0;
}
.news {
  p {
    margin: 0;
  }
  &_header {
    padding-bottom: 35px;
    @media (orientation: portrait) {
      padding-bottom: 20px;
    }
  }
  h1 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    color: #015467;
    margin: 20px 0;
    position: relative;
    padding-left: 24px;
    @media (orientation: portrait) {
      font-size: 24px;
      line-height: 32px;
      padding-left: 18px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 12px;
      width: 12px;
      height: 12px;
      background: #00b0f0;
      border-radius: 50%;
      @media (orientation: portrait) {
        width: 10px;
        height: 10px;
        top: 6px;
      }
    }
  }
  &_publications {
    background: #f2f6f7;
    position: relative;
    left: calc((1144px - 100vw) / 2);
    padding-left: calc((100vw - 1144px) / 2) !important;
    padding-right: calc((100vw - 1144px) / 2) !important;
    width: 100vw;
    @media (orientation: portrait) {
      left: -16px;
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }
  &_all {
    background: rgba(1, 84, 103, 0.1);
    position: relative;
    left: calc((1144px - 100vw) / 2);
    padding-left: calc((100vw - 1144px) / 2);
    padding-right: calc((100vw - 1144px) / 2);
    width: 100vw;
    padding-top: 80px;
    padding-bottom: 80px;
    @media (orientation: portrait) {
      left: -16px;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  &_list {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 170px;
    @media (orientation: portrait) {
      display: block;
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
  &_button {
    text-align: center;
    margin-top: 40px;
    button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      padding: 14px 85px;
      background: #015467;
      box-shadow: 20px 4px 34px rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      border: 0px;
      outline: none;
      cursor: pointer;
      @media (orientation: portrait) {
        padding: 12px 0;
        width: 100%;
      }
    }
  }
}
</style>
