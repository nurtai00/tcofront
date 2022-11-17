<template>
  <div class="p_block">
    <div class="p_block_title">
      <AtomsTitle small> Публикации </AtomsTitle>
      <nuxt-link to="/news/publications">Все публикации</nuxt-link>
    </div>
    <div class="p_block_list">
      <MoleculesCardPublicationCard v-for="item in 4" :key="item" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p_block {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tablet() {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      text-decoration-line: underline;
      color: #00b0f0;
      @include tablet() {
        display: none;
      }
    }
  }
  &_list {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 18px));
    grid-gap: 24px;
    margin-top: 92px;
    @include tablet() {
      grid-template-columns: repeat(2, calc(50% - 7px));
      grid-gap: 13px;
      margin-top: 20px;
    }
  }
}
</style>
