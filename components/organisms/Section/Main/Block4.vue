<script>
export default {}
</script>

<template>
  <div>
    <section class="section--blue">
      <div class="container">
        <div class="section__title">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#00B0F0" />
          </svg>
          <h2>Казахстанское содержание</h2>
        </div>
      </div>
      <div class="double-block">
        <div class="tco__partners-wrapper tco__maintenance">
          <img src="@/assets/img/video_screen.png" alt="" />
        </div>
        <div class="tco__partners-wrapper tco__maintenance">
          <h2>
            В ТШО мы ищем, находим и развиваем местных поставщиков для проектов
            мирового уровня, таких как Тенгиз.
          </h2>
          <p>
            ТШО осуществляет свою деятельность на одном из самых крупных и
            технологически сложных месторождений нефти в мире. Обеспечение
            безопасности и надежности операций по разведке и добыче на Тенгизе
            являются ключевыми факторами, способствующими успешному развитию
            экономики Казахстана и удовлетворению мирового спроса на
            энергоносители.
          </p>
          <AtomsButton>
            Читать дальше
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
