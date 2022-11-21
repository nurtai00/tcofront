<template>
  <div class="news">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/news">TCO news</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> Новости ТШО </AtomsTitle>
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
        <AtomsButton type="submit"> Загрузить еще </AtomsButton>
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
          text: 'Производство',
          value: '',
          selected: false,
        },
        {
          text: 'Экология',
          value: '',
          selected: false,
        },
        {
          text: 'Соцпроекты',
          value: '',
          selected: false,
        },
        {
          text: 'Казсодержание',
          value: '',
          selected: false,
        },
        {
          text: 'Карьера',
          value: '',
          selected: false,
        },
        {
          text: 'ПБР-ПУУД',
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
