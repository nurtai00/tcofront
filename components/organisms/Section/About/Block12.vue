<template>
  <section>
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
        <h2>Новости ТШО</h2>
      </div>
    </div>
    <div class="container">
      <div class="tco__news-tags">
        <span>Производство</span>
        <span>Экология</span>
        <span>Соцпроекты</span>
        <span>Казсодержание</span>
        <span>Карьера</span>
        <span>ПБР-ПУУД</span>
      </div>
      <div class="tco__news">
        <div class="card">
          <img src="@/assets/img/news1.png" />
          <div class="info">
            <span>#Карьера </span>
            <span> 14/07/2022</span>
          </div>
          <h4>Камшат Байжанова: быть конкурентным ...</h4>
          <p>
            Выстраивание ценностей и открытая корпоративная среда, в которой
            каждый работник может понять свои...
          </p>
        </div>
        <div class="card">
          <img src="@/assets/img/news3.png" />
          <div class="info">
            <span>#Видео </span>
            <span> 03/05/2022</span>
          </div>
          <h4>Тенгизшевройл продолжит оказывать ...</h4>
          <p>
            Генеральный директор ТОО «Тенгизшевройл» (ТШО) Кевин Лайон и Аким
            Жылыойского района Атырауско...
          </p>
        </div>
        <div class="card">
          <img src="@/assets/img/news2.png" />
          <div class="info">
            <span>#Карьера </span>
            <span> 09/06/2022</span>
          </div>
          <h4>Тенгизшевройл изучает возможности оте..</h4>
          <p>
            В Алматы прошел Форум «Цифровой Тенгизшевройл – 2022» (Форум), цель
            которого изучить возможности ...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock12',

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
        /* or 121% */

        /* tco 3 */

        color: #015467;

        @media (max-width: 385px) {
          font-size: 32px;
        }
      }

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        /* identical to box height, or 111% */

        /* tco 3 */

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
            /* identical to box height, or 114% */

            /* black background */

            color: #30454e;
          }

          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height, or 125% */

            /* grey */

            color: #8c9fa6;
          }
        }
      }

      .years {
        width: 80%;

        @media (max-width: 886px) {
          width: 100%;
          max-width: inherit;
          margin: auto;
        }
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 160px;
        height: auto;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 15px;

        h4 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          /* identical to box height, or 117% */

          /* tco 1 */

          color: #30454e;
        }

        span {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 32px;
          /* identical to box height, or 114% */

          text-align: justify;

          /* tco 1 */

          color: #30454e;
        }

        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 28px;
          /* identical to box height, or 140% */

          text-align: justify;

          /* grey */

          color: #8c9fa6;
        }
      }
    }
    background: #f2f6f7;
  }

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
      /* 3 */
      width: 40%;
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
        /* identical to box height, or 117% */

        /* tco 1 */

        color: #30454e;
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        /* or 122% */

        /* black background */

        color: #30454e;
      }
    }
  }

  &__files {
    display: flex;
    gap: 70px;
    padding: 25px 0;

    @media (max-width: 682px) {
      flex-direction: column;
      align-items: center;
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
      /* identical to box height, or 122% */

      text-decoration-line: underline;

      @media (max-width: 682px) {
        flex-direction: column;
        align-items: center;
      }

      /* tco 5 */

      color: #00b0f0;

      img {
        width: 176px;
        height: 164px;
      }
    }
  }

  &__story {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 40px 40px 0;
    max-width: 572px;

    @media (max-width: 886px) {
      width: 100%;
      max-width: inherit;
      padding: 15px;
    }

    h4 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      /* identical to box height, or 114% */
      width: 100%;
      /* black background */

      color: #30454e;
    }
    img {
      width: 550px;
      @media (max-width: 886px) {
        width: 100%;
        max-width: inherit;
      }
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      /* or 140% */

      /* black background */

      color: #30454e;
    }
  }

  &__news {
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 775px) {
      flex-wrap: wrap;
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        height: 260px;
        width: 100%;
      }

      .info {
        width: 100%;
        display: flex;
        justify-content: space-between;

        span {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
          /* identical to box height, or 129% */

          color: #d01d12;

          &:last-of-type {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 18px;
            /* identical to box height, or 129% */

            text-align: right;

            /* grey */

            color: #8c9fa6;
          }
        }
      }

      h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height, or 122% */

        /* black 92% */

        color: #30454e;
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        /* or 129% */

        /* grey */

        color: #8c9fa6;
      }
    }

    &-tags {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      span {
        /* black 92% */

        border: 1px solid #30454e;
        border-radius: 4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height, or 129% */
        padding: 5px;

        /* black 92% */

        color: #30454e;
      }
    }
  }

  &__publications {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 40px 0;

    @media (max-width: 1115px) {
      padding: 15px;
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      gap: 15p;
    }

    @media (max-width: 395px) {
      flex-direction: column;
      gap: 15px;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 100%;
      width: 24%;

      @media (max-width: 700px) {
        width: 49%;
      }

      @media (max-width: 395px) {
        width: 100%;
      }

      div {
        img {
          width: 15px;
          height: auto;
        }
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        /* or 122% */

        /* black 92% */

        color: #30454e;
      }
    }
  }
}
</style>
