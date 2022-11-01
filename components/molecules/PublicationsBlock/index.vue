<template>
  <div class="p_block">
    <div class="p_block_title">
      <h1>Публикации</h1>
      <nuxt-link to="/news/publications">Все публикации</nuxt-link>
    </div>
    <div class="p_block_list">
      <AtomsPublicationCard v-for="item in 4" :key="item" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p_block {
  padding: 50px 0 80px 0;
  @media (orientation: portrait) {
    padding: 40px 0;
  }
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 38px;
      line-height: 46px;
      color: #015467;
      margin: 20px 0;
      position: relative;
      padding-left: 24px;
      @media (orientation: portrait) {
        font-size: 20px;
        line-height: 26px;
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
    a {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      text-decoration-line: underline;
      color: #00b0f0;
      @media (orientation: portrait) {
        display: none;
      }
    }
  }
  &_list {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 18px));
    grid-gap: 24px;
    margin-top: 80px;
    @media (orientation: portrait) {
      grid-template-columns: repeat(2, calc(50% - 7px));
      grid-gap: 13px;
      margin-top: 00px;
    }
  }
}
</style>
