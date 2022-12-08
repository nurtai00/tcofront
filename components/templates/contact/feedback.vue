<template>
  <div class="feedback">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Главная</AtomsBreadOption>
        <AtomsBreadOption to="/contact">Контактная информация</AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback">
          Обратная связь
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20">Обратная свзяь</AtomsTitle>
      <div class="feedback__content">
        <p>
          Процесс обратной связи позволяет общественности быстро, легко и в
          конфиденциальной форме связаться с ТОО «Тенгизшевройл» (ТШО) по
          вопросам деятельности компании и получить своевременный ответ.
        </p>
        <p>
          ТШО стремится построить продуктивные и взаимовыгодные отношения с
          государственными органами, коммерческими организациями и населением.
          Одним из основополагающих элементов налаживания таких отношений
          является открытый диалог между ТШО и населением. Процесс обратной
          связи ТШО – это надёжный способ поделиться обеспокоенностью по тому
          или иному вопросу, внести предложение или замечание, и получить ответ.
        </p>
        <p>
          После предоставления замечания/предложения, ТШО официально подтвердит
          получение в течение 5 рабочих дней. ТШО планирует предоставлять ответы
          на полученные замечания/предложения в течение 20 рабочих дней.
        </p>
        <p>
          ТШО не раскрывает информацию, полученную в процессе рассмотрения
          замечаний/предложений, за пределы компании. Ваши отзывы позволят нам
          ответить на вопросы, вызывающие вашу озабоченность, и рассмотреть ваши
          предложения, что делает ТШО более открытым к взаимодействию с местной
          общественностью.
        </p>
        <p>
          Процесс является конфиденциальным. При обращении к нам просим
          оставлять вашу контактную информацию, чтобы мы смогли предоставить вам
          ответ напрямую.
        </p>
        <p>
          ТШО предлагает множество различных вариантов, облегчающих процесс
          предоставления замечаний/предложений. Представители общественности
          могут заполнить формы обратной связи в местах, где расположены ящики
          для сбора замечаний и предложений в г. Атырау, г. Кульсары и на
          Тенгизе по следующим адресам:
        </p>
        <ul>
          <li>
            Aтырауская областная универсальная научная библиотека им. Г.
            Сланова, г. Атырау
          </li>
          <li>Поселок «Шанырак», Дом 1, м/р Тенгиз</li>
          <li>Поселок «Шанырак», зал перевахтовки, м/р Тенгиз</li>
          <li>Столовая ПТШО, м/р Тенгиз</li>
          <li>
            Здание администрации акимата Жылыойского района, вахтовый поселок,
            м/р Тенги
          </li>
          <li>Магазин «Избаскан», вахтовый поселок, м/р Тенгиз</li>
          <li>Гостиница «Шанырак», г. Кульсары</li>
        </ul>
      </div>
    </div>
    <div class="feedback__callback">
      <div class="container">
        <p>
          Также отзывы и замечания можно предоставлять по электронной почте
          <a href="mailto:tcofp@tengizchevroil.com" type="mail">
            tcofp@tengizchevroil.com</a
          >
          и бесплатной телефонной линии по номеру
          <a href="tel:8-800-080-84-88">8-800-080-84-88</a>
        </p>
      </div>
    </div>
    <div class="container">
      <AtomsHeading class="document-title" type="h3">
        Документы по процессу обратной связи
      </AtomsHeading>
      <div class="links">
        <a href="#">Буклет о процессе управления обратной связью (pdf)</a>
        <nuxt-link :to="localePath('/contact/feedback/reports')">
          Отчёты по процессу обратной связи ТШО
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.document-title {
  @include phone() {
    font-size: 24px;
    line-height: 28px;
  }
}
.links {
  margin-top: 40px;
  width: 600px;
  display: flex;
  gap: 24px;
  padding-bottom: 80px;
  @include phone() {
    width: 100%;
    font-size: 16px;
    flex-direction: column;
    align-items: center;
  }
  a {
    width: 280px;
    color: #00b0f0;
    text-decoration: underline;
  }
}
.feedback {
  &__content {
    ul {
      margin-top: 15px;
      margin-left: 40px;
      li {
        margin-top: 5px;
        list-style: disc;
        color: black;
        font-weight: 500;
      }
    }
    p {
      font-family: Roboto, sans-serif;
      font-size: 20px;
      color: $c-text !important;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
  &__callback {
    margin: 35px 0px 40px 0;
    padding: 40px 0;
    background-color: #ecfafe;
    p {
      font-size: 20px;
      line-height: 28px;
      a {
        color: #00b0f0;
      }
    }
  }
}
</style>
