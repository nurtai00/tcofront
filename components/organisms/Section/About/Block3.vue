<template>
  <section class="section--blue">
    <div class="container">
      <AtomsTitle small>{{ $t('company.block_2.title') }}</AtomsTitle>
      <div class="tco__items">
        <div class="item">
          <img src="@/assets/img/item1.svg" />
          <span>{{ $t('company.block_2.items[0].title') }}</span>
          <p>
            {{ $t('company.block_2.items[0].p_1') }} <br />{{
              $t('company.block_2.items[0].p_2')
            }}
          </p>
        </div>
        <div class="item">
          <img src="@/assets/img/item2.svg" />
          <span>{{ $t('company.block_2.items[1].title') }}</span>
          <p>
            {{ $t('company.block_2.items[1].p_1') }} <br />{{
              $t('company.block_2.items[1].p_2')
            }}
          </p>
        </div>
        <div class="item">
          <img src="@/assets/img/item3.svg" />
          <span>{{ $t('company.block_2.items[2].title') }}</span>
          <p>
            {{ $t('company.block_2.items[2].p_1') }} <br />{{
              $t('company.block_2.items[2].p_2')
            }}
          </p>
        </div>
        <div class="item">
          <img src="@/assets/img/item4.svg" />
          <span>{{ $t('company.block_2.items[3].title') }}</span>
          <p>
            {{ $t('company.block_2.items[3].p_1') }} <br />{{
              $t('company.block_2.items[3].p_2')
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock3',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" v-deep scoped>
.tco {
  &__items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 25px 0;
    gap: 25px;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    .item {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: #ffffff;
      width: 22%;
      box-shadow: 0px 6px 30px rgba(48, 69, 78, 0.1);
      border-radius: 4px;
      padding: 30px;
      @media (max-width: 650px) {
        width: 90%;
      }
      img {
        width: 80px;
        height: 80px;
      }
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #30454e;
      }
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
        color: #30454e;
      }
    }
  }
}
</style>
