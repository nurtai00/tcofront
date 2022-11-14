<template>
  <section class="section--blue">
    <div class="container">
      <AtomsTitle small :point="false"> Ключевые цифры за 2022 г.: </AtomsTitle>
      <div class="tco__files">
        <a class="item" href="">
          <img src="@/assets/img/pdf.svg" />
          1 Квартал 2022
        </a>
        <a class="item" href="">
          <img src="@/assets/img/pdf.svg" />
          Все цифры и факты
        </a>
        <a class="item" href="">
          <img src="@/assets/img/pdf.svg" />
          Отчет о корпоративной ответственности за 2019-2020 гг
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock6',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" v-deep scoped>
.tco {
  &__files {
    display: flex;
    gap: 70px;
    padding: 25px 0;
    @media (max-width: 682px) {
      flex-direction: row;
      align-items: flex-start;
      overflow-x: scroll;
      height: 150px;
      overflow-y: hidden;
      width: calc(100vw - 32px);
    }
    @media (orientation: portrait) {
      height: 100%;
    }
    .item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 15px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      max-width: 178px;
      text-decoration-line: underline;
      @media (max-width: 682px) {
        flex-direction: column;
        align-items: center;
      }
      @media (orientation: portrait) {
        flex-direction: column;
        align-items: flex-start;
        max-width: calc(50vw - 16px);
      }
      color: #00b0f0;
      img {
        width: 176px;
        height: 164px;
        @media (orientation: portrait) {
          width: 50px;
          height: 66px;
        }
      }
    }
  }
}
</style>
