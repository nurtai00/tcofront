<script>
export default {}
</script>

<template>
  <div>
    <section style="padding: 0">
      <div class="double-block" style="justify-content: flex-end">
        <div class="tco__partners-wrapper">
          <time>16 февраля 2020</time>
          <h1>В Атырау открыл двери новый детский сад на 280 места</h1>
          <p>
            В селе Ракуша близ города Атырау введен в эксплуатацию новый детский
            сад на 280 мест, построенный ТОО «Тенгизшевройл» в рамках своей
            добровольной программы социальных инфраструктурных проектов
            «Игилик».
          </p>
          <div class="steps">
            <span class="done"></span>
            <span class="done"></span>
            <span class="done"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <img src="@/assets/img/banner_bg.png" />
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
}
</style>
