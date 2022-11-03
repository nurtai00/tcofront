<template>
  <footer>
    <div class="container">
      <img src="@/assets/img/logo.svg" alt="TCO" />
      <div class="block">
        <ul>
          <li>
            <Nuxt-Link to="/">Инвестиции в сообщество</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">Карьера</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">Поставщикам</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">Продукция</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">ПБР-ПУУД</Nuxt-Link>
          </li>
        </ul>
      </div>
      <div class="block">
        <ul>
          <li>
            <Nuxt-Link to="/">Главная</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">О нас</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">Производственная безопасность</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">Казахстанское содержание</Nuxt-Link>
          </li>
        </ul>
        <div class="socials">
          <Nuxt-link to="/">
            <img src="@/assets/img/facebook.svg" />
          </Nuxt-link>
          <Nuxt-link to="/">
            <img src="@/assets/img/instagram.svg" />
          </Nuxt-link>
          <Nuxt-link to="/">
            <img src="@/assets/img/linked.svg" />
          </Nuxt-link>
          <Nuxt-link to="/">
            <img src="@/assets/img/youtube.svg" />
          </Nuxt-link>
        </div>
      </div>
      <div class="block">
        <span>Контакты</span>
        <ul>
          <li>
            <Nuxt-Link to="/">+7 712 227 1212</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">+7 712 302 6000</Nuxt-Link>
          </li>
          <li>
            Республика Казахстан 060011, <br />
            г.Атырау , ул. Сатпаева 3
          </li>
          <li>
            <Nuxt-Link to="/">tcoinfo@tengizchevroil.com</Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/">ПБР-Телефон доверия и другие контакты</Nuxt-Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span>Мобильное приложение</span>
        <div>
          <Nuxt-link to="/">
            <img src="@/assets/img/appstore.svg" alt="Appstore" />
          </Nuxt-link>
          <Nuxt-link to="/">
            <img src="@/assets/img/playmarket.svg" alt="Appstore" />
          </Nuxt-link>
        </div>
      </div>
      <div class="block">
        <span>© 2018 ТОО «Тенгизшевройл»</span>
      </div>
      <div class="block">
        <Nuxt-link to="">Положение о конфиденциальности</Nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TcoFrontFooter',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  background: #30454e;
  padding: 20px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 645px) {
      flex-direction: column;
    }

    .block {
      padding: 20px;
      .socials {
        img {
          padding: 0px;
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height, or 122% */

        /* white */

        color: #ffffff;
        display: block;
        margin-bottom: 15px !important;
      }

      a,
      li {
        color: white;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 15px;
        /* identical to box height, or 122% */

        /* white */

        color: #ffffff;
      }
    }

    &:first-of-type {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
