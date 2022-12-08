<script>
export default {
  methods: {
    nav() {
      this.$router.push(this.localePath('/kazakhstani-content'))
    },
  },
}
</script>

<template>
  <div>
    <section class="section--blue">
      <div class="container">
        <AtomsTitle small>{{ $t('home.block_4.title') }}</AtomsTitle>
      </div>
      <div class="double-block">
        <div class="tco__partners-wrapper tco__maintenance">
          <img src="@/assets/img/video_screen.png" alt="" />
        </div>
        <div class="tco__partners-wrapper tco__maintenance">
          <h2>
            {{ $t('home.block_4.subtitle') }}
          </h2>
          <p>
            {{ $t('home.block_4.text') }}
          </p>
          <AtomsButton @click="nav">
            {{ $t('home.block_4.button') }}
            <img
              src="@/assets/icons/chevron-right.svg"
              alt="chevron-right"
              width="14"
              height="14"
            />
          </AtomsButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
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
      @media (max-width: 1160px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: none;
      }
      .underline {
        display: block;
        position: relative;
        width: 80%;
        border: 1px solid #8c9fa6;
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
      }
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 42px;
        color: #015467;
      }
      .steps {
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: 2px;
        span {
          display: block;
          width: 40px;
          height: 4px;
          background: rgba(1, 84, 103, 0.1);
          border-radius: 4px;
        }
        .done {
          background: #5e8698;
        }
      }
      .amount {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        .item {
          background: #e8f8fe;
          border-radius: 4px;
          padding: 20px;
          width: 100%;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            color: #30454e;
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #8c9fa6;
          }
        }
      }
      .years {
        width: 80%;
      }
    }
    background: #f2f6f7;
  }
  &__maintenance {
    h2 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      color: #30454e;
    }
    img {
      width: 100%;
      height: 100%;
    }
    button img {
      margin-left: 8px;
      width: 14px;
      height: 14px;
    }
  }
}
</style>
