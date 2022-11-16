<template>
  <div class="projects">
    <div class="container">
      <MoleculesBreadcrumbs class="projects__breadcrumbs">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/projects">Projects</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="projects__title">Проекты</AtomsTitle>
      <div class="projects__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
    </div>
    <div class="projects__video">
      <img src="~/assets/img/projects/projects4.png" alt="" />
    </div>
    <OrganismsSectionOperationSvg class="svgs" :data="sideSvg[0]">
      <template #description>
        <p class="mb20">
          Тенгизшевройл (ТШО) – это следующее крупное расширение на нефтяном
          месторождении Тенгиз. Реализация ПБР/ПУУД оставит наследие в виде
          подготовленных квалифицированных кадров, новых производственных
          объектов, трансфера технологий на основе партнерских отношений между
          казахстанскими и международными компаниями и модернизации
          инфраструктуры в регионе.
        </p>
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          text="Документ по пбр-пууд"
          icon="pdf"
        />
      </template>
    </OrganismsSectionOperationSvg>

    <OrganismsSectionOperationSlide side :data="slide" class="slide">
      <div class="projects__slide">
        <div class="left">
          <div v-for="(item, key) in slider.left" :key="key" :class="{ active: key === activeSlide }" @click="activeSlide = key">{{ item }}</div>
        </div>
        <div class="right">
          <div v-for="(item, key) in slider.right" :key="key" :class="{ active: key === activeSlide }">{{ item }}</div>
        </div>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide2"
      class="slide"
    />
    <div class="protocols">
      <div class="container">
        <div class="projects__protocols">
          <div class="projects__protocols_header">
            <AtomsTitle class="projects__title">Протоколы</AtomsTitle>
            <nuxt-link class="more" to="/projects/protocols">Все протоколы</nuxt-link>
          </div>
          <div class="projects__protocols_body">
            <OrganismsSectionOperationCard
              v-for="(item, key) in cards"
              :key="key"
              :content="item"
            />
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :side="false" :data="slide3" class="slide">
      <p>
        Процесс обратной связи позволяет общественности быстро, легко и в
        конфиденциальной форме связаться с ТОО «Тенгизшевройл» (ТШО) по вопросам
        деятельности компании и получить своевременный ответ.
      </p>
      <br />
      <p class="mb20">
        ТШО стремится построить продуктивные и взаимовыгодные отношения с
        государственными органами, коммерческими организациями и населением.
        Одним из основополагающих элементов налаживания таких отношений является
        открытый диалог между ТШО и населением. Процесс обратной связи ТШО – это
        надёжный способ поделиться обеспокоенностью по тому или иному вопросу,
        внести предложение или замечание, и получить ответ.
      </p>
      <AtomsFile
        file="@/assets/files/statistics.pdf"
        text="Буклет о процессе управления обратной связью"
        icon="pdf"
      />
      <AtomsFile
        file="@/assets/files/statistics.pdf"
        text="Отчёты по процессу обратной связи ТШО"
        icon="pdf"
      />
    </OrganismsSectionOperationSlide>
    <OrganismsSectionCareerBlock8 class="projects__news" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0,
      tags: [
        {
          id: 1,
          text: 'ПБР-ПУУД',
        },
        {
          id: 2,
          text: 'Другие проекты',
          url: '/projects/other-projects',
        },
      ],
      sideSvg: [
        {
          title: 'ПБР-ПУУД',
          icon: 'production',
        },
      ],
      cards1: [
        {
          number: '01',
          name: 'Покупатели',
          description:
            'ТШО создал долгосрочную, разнообразную и квалифицированную клиентскую базу, которая поддерживает надежную реализацию продукта в рамках срочных договоров купли-продажи.',
        },
      ],
      slide: {
        image: 'projects/projects1.png',
      },
      slide2: {
        title:
          'Объекты ПБР-ПУУД построены из модулей, изготовление которых осуществлялось в Республике Казахстан, Южной Корее и Италии',
        description: [
          'Модули ПБР-ПУУД, каждый весом от 500 до 1800 тонн, были доставлены по системе внутренних водных путей России (ВВПР) в пункт разгрузки грузов на полуострове Прорва Каспийского моря. Общий вес модульного груза составил почти 280,000 метрических тонн.',
        ],
        image: 'projects/projects2.png',
        link: () => {
          this.$store.commit('side/open', {
            html: `<p>Казахстанские компании, такие как Ersai и KCOI, подтвердили свою техническую мощность и профессиональную подготовку, завершив производство 75 сборных модульных эстакад и 10 удаленных блоков контроля, созданных по международным стандартам в Мангистауской области Республики Казахстан. На пике работ в эксплуатации находилось более 126 судов, 40 из которых были вновь построены или значительно модифицированы специально для данного проекта. Казахстанская компания «КазМорТрансФлот» оперировала морскими перевозками в Каспийском море. В общей сложности суда преодолели более 140 000 км между Казахстаном и другими пунктами. Еще одно наследие ПБР-ПУУД - новый Маршрут транспортировки грузов (МаТраГ), который был построен на полуострове Прорва около Тенгиза для приема и дальнейшей транспортировки модульных грузов. МаТраГ включает в себя морской подъездной канал протяженностью 71 км, сооружения для разгрузки и хранения грузов и подъездную дорогу.</p>
<img src="${require('@/assets/img/projects/projects-process1.png')}">
<img src="${require('@/assets/img/projects/projects-process2.png')}">
<p>С начала реализации ПБР-ПУУД ТШО потратил более 13,6 миллиардов долларов США на закупки казахстанских товаров и услуг. Около 91% казахстанцев работают на проекте. ТШО привлекает казахстанские компании для оказания инжиниринговых, материально-технических и производственных услуг. Более 2350 казахстанских компаний были предварительно отобраны для участия в проекте ПБР-ПУУД, и заключено 1250 контрактов с почти 600 казахстанскими компаниями.</p>
<img src="${require('@/assets/img/projects/projects-process3.png')}">
<p>4 нобря 2021 года ТШО благополучно достиг добычи ранней нефти с новой замерной установки в рамках реализации ПБР-ПУУД. Новая замерная установка стала третьей из четырех установок, которые связаны с соответствующими группами скважин, как часть системы сбора нефти, построенной в рамках ПБР-ПУУД. Все три введенные в эксплуатацию замерные установки уже производят более 13 000 тонн или 100 000 баррелей дополнительной сырой нефти в сутки, которые направлены на поддержание мощности существующих производственных обьетов, а также на восстановление нефтеотдачи. Запуск замерной установки позволил создать новые рабочие места для казахстанцев, а также привлек ряд казахстанских компаний к проектированию, строительству и обслуживанию нового объекта.</p>
<img src="${require('@/assets/img/projects/projects-process4.png')}">
<img src="${require('@/assets/img/projects/projects-process5.png')}">
<p>3 июня 2022 года на Тенгизе запущен Объединенный центр управления производством (ОЦУП). Сверхсовременный ОЦУП использует новейшие цифровые технологии и является единственным в своем роде объектом в нефтегазовой отрасли Казахстана. Он объединит управление всеми заводами ТШО в единую операционную модель в одном центре управления. ОЦУП расположен в 20 км от производственных объектов ТШО. В нем также находится центральный диспетчерский пульт площадью 2200 кв. м, который поможет операторам Тенгизского месторождения гибко находить пути к принятию наилучших решений, повышению надежности и оптимизации производственных показателей. Более 30 казахстанских компаний и более 600 местных сотрудников внесли свой вклад в строительство и ввод в эксплуатацию такого объекта мирового уровня, как ОЦУП. Работая над вводом в эксплуатацию, местные работники также улучшили свои знания и навыки путем всестороннего обучения и  приобретения уникального опыта.</p>
`,
          })
        },
      },
      slide3: {
        title: 'Процесс управления обратной связью',
        image: 'projects/projects3.png',
        link: () => {
          this.$store.commit('side/open', {
            name: 'Процесс управления обратной связью',
            html: `<p>Процесс обратной связи позволяет общественности быстро, легко и в конфиденциальной форме связаться с ТОО «Тенгизшевройл» (ТШО) по вопросам деятельности компании и получить своевременный ответ.</p>
<p>ТШО стремится построить продуктивные и взаимовыгодные отношения с государственными органами, коммерческими организациями и населением. Одним из основополагающих элементов налаживания таких отношений является открытый диалог между ТШО и населением. Процесс обратной связи ТШО – это надёжный способ поделиться обеспокоенностью по тому или иному вопросу, внести предложение или замечание, и получить ответ.</p>
<p>После предоставления замечания/предложения, ТШО официально подтвердит получение в течение 5 рабочих дней. ТШО планирует предоставлять ответы на полученные замечания/предложения в течение 20 рабочих дней.</p>
<p>ТШО не раскрывает информацию, полученную в процессе рассмотрения замечаний/предложений, за пределы компании. Ваши отзывы позволят нам ответить на вопросы, вызывающие вашу озабоченность, и рассмотреть ваши предложения, что делает ТШО более открытым к взаимодействию с местной общественностью.</p>
<p>Процесс является конфиденциальным. При обращении к нам просим оставлять вашу контактную информацию, чтобы мы смогли предоставить вам ответ напрямую.</p>
<p>ТШО предлагает множество различных вариантов, облегчающих процесс предоставления замечаний/предложений. Представители общественности могут заполнить формы обратной связи в местах, где расположены ящики для сбора замечаний и предложений в г. Атырау, г. Актау, г. Кульсары и на Тенгизе по следующим адресам:</p>
<ul>
<li>Головной офис ТШО, г. Атырау;</li>
<li>Офис ПБР-ПУУД в здании компании «Уорли Парсонс», г. Атырау;</li>
<li>Офис компании PSN, г. Атырау;</li>
<li>Атырауская областная универсальная научная библиотека им. Г. Сланова, г. Атырау;</li>
<li>Поселок «Шанырак», дом 1, м/р Тенгиз;</li>
<li>Поселок «Шанырак», зал перевахтовки, м/р Тенгиз;</li>
<li>Столовая ПТШО, м/р Тенгиз;</li>
<li>Здание администрации акимата Жылыойского района, вахтовый поселок, м/р Тенгиз;</li>
<li>Магазин «Избаскан», вахтовый поселок, м/р Тенгиз;</li>
<li>Центр занятости Жылыойского района, г. Кульсары;</li>
<li>Здание управления координации занятости и социальных программ, г. Кульсары;</li>
<li>Гостиница «Шанырак», г. Кульсары;</li>
<li>Клиника «Интертич», г. Кульсары;</li>
<li>Офис ПБР-ПУУД, г. Актау;</li>
<li>Здание акимата села Баутино, Тупкараганский район, Мангистауская область.</li>
</ul>

<p>Также отзывы и замечания можно предоставлять по электронной почте <a href="mailto:tcofp@tengizchevroil.com">tcofp@tengizchevroil.com</a> и бесплатной телефонной линии по номеру 8-800-080-84-88</p>
`,
          })
        },
      },
      cards: [
        {
          number: 2018,
          name: 'Протокол консультационной встречи по ПБР-ПУУД в п. Шокпартогай - 8 ноября 2016',
        },
        {
          number: 2018,
          name: 'Протокол консультационной встречи по ПБР-ПУУД в п. Шокпартогай - 8 ноября 2016',
        },
        {
          number: 2018,
          name: 'Протокол консультационной встречи по ПБР-ПУУД в п. Шокпартогай - 8 ноября 2016',
        },
      ],
      slider: {
        left: [
          '13,6 млрд долларов США',
          '53 000',
          '12 000 000 тонн в год'
        ],
        right: [
          'Затраты на казахстанские товары и услуги',
          'Число казахстанских работников на проекте',
          'Ожидаемый рост добычи'
        ]
      }
    }
  },
  methods: {
    onTag() {
      console.log('works')
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__video {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__description {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    color: $c-tco3;

    @include phone {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .slide::v-deep {
    .slide__content.container {
      background-color: white;
    }
  }

  .protocols {
    background-color: #f2f6f7;
  }

  &__protocols {
    padding: 80px 0;

    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    &_body {
      display: flex;
      flex-wrap: wrap;

      & > * {
        width: calc((100% - 48px) / 3);
        margin-bottom: 24px;
        height: 300px;

        @media screen and (min-width: 1025px) {
          &:not(:nth-child(3n)) {
            margin-right: 24px;
          }
        }
      }

      @include wide-tablet {
        flex-wrap: wrap;

        & > * {
          margin-bottom: 24px;
          width: calc((100% - 24px) / 2);

          @media screen and (min-width: 560px) {
            &:not(:nth-child(2n)) {
              margin-right: 24px;
            }
          }
        }
      }

      @include phone {
        & > * {
          margin-bottom: 8px;
          width: calc((100% - 9px) / 2);
          &:not(:nth-child(2n)) {
            margin-right: 9px;
          }
          word-break: break-word;
        }
      }
    }
  }

  &__slide {
    display: flex;
    overflow: hidden;
    gap: 20px;

    & > * {
      width: 50%;
    }

    .left {
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;

      & > div {
        margin-bottom: 46px;
        cursor: pointer;
        transition: .2s ease-in-out;

        &:not(.active) {
          color: #30454e;
          opacity: 0.1;
        }
      }

      .active {
        color: #0282a0;
      }
    }

    .right {
      text-align: right;

      & > div {
        display: none;
      }

      .active {
        display: block;
      }
    }
  }

  &__title {
    margin-bottom: 36px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  &__production-security.block {
    padding: 80px 0;

    @include tablet {
      padding: 20px 40px;
    }

    @include phone {
      padding: 20px 0;
    }
  }

  .chesm {
    background: white;
  }

  .grey {
    background-color: $c-tco33;
  }

  .svgs {
    &::v-deep .block__icon i {
      font-size: 260px;
    }
  }

  &__news {
    background: #f2f6f7;
  }

  &__list {
    padding-left: 22px;

    &:not(&_num) {
      li {
        margin-bottom: 20px;
        list-style-type: disc;

        &::marker {
          color: $c-tco5;
          font-size: 24px;
        }
      }
    }

    &_num {
      margin-bottom: 20px;
      color: $c-tco1;
      padding-left: 22px;

      li {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 20px;
        list-style-type: decimal;

        @include phone {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .slide::v-deep {
    .slide_text {
      margin-top: 20px;

      a {
        color: $c-tco5;
      }
    }

    .slide__content {
      background-color: $c-tco33;
    }
  }

  .more {
    font-size: 18px;
    text-decoration: underline;
    color: #0da9d7;
  }
}
</style>
