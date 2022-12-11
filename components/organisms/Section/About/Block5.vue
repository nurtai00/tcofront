<template>
  <section>
    <div class="container">
      <AtomsTitle class="mb20 mt40" small :point="false">
        {{ $t('company.block_3.title') }}
      </AtomsTitle>
    </div>
    <div class="double-block tco__partners" style="justify-content: center">
      <div class="tco__barrels-item">
        <div class="tco__barrels-wrapper" style="width: 100%">
          <img src="@/assets/img/fees.png" />
          <div>
            <h4>{{ $t('company.block_3.items[0].title') }}</h4>
            <span>{{ $t('company.block_3.items[0].p_1') }}</span>
            <p>{{ $t('company.block_3.items[0].p_2') }}</p>
          </div>
        </div>
      </div>
      <div class="tco__barrels-item">
        <div class="tco__barrels-wrapper" style="width: 100%">
          <img src="@/assets/img/fees2.png" />
          <div>
            <h4>{{ $t('company.block_3.items[1].title') }}</h4>
            <span>{{ $t('company.block_3.items[1].p_1') }}</span>
            <p>{{ $t('company.block_3.items[1].p_2') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container main_b_5 mt40 mb40">
      <p>
        {{ $t('company.block_3.text') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock5',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" v-deep scoped>
.tco {
  &__partners {
    &-wrapper {
      padding: 40px 40px 40px 0;
      max-width: 572px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 25px;
      text-align: left;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      .line {
        display: block;
        position: relative;
        width: 80vw;
        border: 1px solid #8c9fa6;
      }
      h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 46px;
        color: #015467;
        @media (max-width: 385px) {
          font-size: 20px;
          line-height: 26px;
        }
      }
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        color: #015467;
      }
    }
    background: #f2f6f7;
  }
  &__barrels {
    &-item {
      display: flex;
      justify-content: center;
      padding: 40px 0 40px 40px;
      background: rgba(1, 84, 103, 0.1);
      @media (max-width: 450px) {
        padding: 15px !important;
        flex-direction: column;
      }
      &:last-of-type {
        padding: 40px 40px 40px 0;
        background: inherit;
      }
    }
    &-wrapper {
      max-width: 572px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 450px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 160px;
        height: auto;
        @media (orientation: portrait) {
          width: 74px;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        @media (orientation: portrait) {
          gap: 4px;
          margin-left: 10px;
        }
        h4 {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color: #30454e;
          @media (orientation: portrait) {
            font-size: 16px;
            line-height: 22px;
          }
        }
        span {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 32px;
          text-align: justify;
          color: #30454e;
          @media (orientation: portrait) {
            font-size: 20px;
            line-height: 26px;
          }
        }
        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 28px;
          text-align: justify;
          color: #8c9fa6;
          @media (orientation: portrait) {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
    background: #f2f6f7;
  }
}
.main_b_5 {
  p {
    text-decoration-line: underline;
    @media (orientation: portrait) {
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
    }
  }
}
</style>
