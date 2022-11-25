<template>
  <div class="kazakhstani">
    <div class="container">
      <MoleculesBreadcrumbs class="kazakhstani__breadcrumbs">
        <AtomsBreadOption to="/">Главная</AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content">
          Казахстанское содержание
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="kazakhstani__title">
        Казахстанское содержание
      </AtomsTitle>
      <div class="kazakhstani__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
      <div class="kazakhstani__chart">
        <VueApexCharts
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        />
        <p>
          Совокупные затраты ТШО на закупку местных товаров и услуг превысили
          39,3 млрд долларов США. Это позволяет нам удерживать лидирующие
          позиции в сфере развития казахстанского содержания
        </p>
      </div>
    </div>
    <div class="kazakhstani__content gray">
      <div class="container">
        <div class="kazakhstani__titlee">
          В ТШО мы ищем, находим и развиваем местных поставщиков для проектов
          мирового уровня, таких как Тенгиз.
        </div>
        <p>
          ТШО осуществляет свою деятельность на одном из самых крупных и
          технологически сложных месторождений нефти в мире. Обеспечение
          безопасности и надежности операций по разведке и добыче на Тенгизе
          являются ключевыми факторами, способствующими успешному развитию
          экономики Казахстана и удовлетворению мирового спроса на
          энергоносители.
        </p>
        <p>
          Наша основная задача заключается в поиске товаров и услуг, которые
          отвечают международным стандартам, при этом предоставляя возможности
          для местных поставщиков и квалифицированных специалистов.
        </p>
        <p>
          Посмотрите этот видеоролик, чтобы узнать как ТШО создает возможности
          для местного рынка услуг.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="kazakhstani__map">
        <div class="kazakhstani__titlee">Вклад ТШО в экономику РК</div>
        <Map class="map" @click="mapModal" />
      </div>
    </div>

    <OrganismsSectionOperationSlide :data="slide[0]" class="slide gray">
      <div class="slide__body">
        <hr />
        <p class="subtitle">План контрактов и закупок</p>
        <p>
          Наш план по контрактам и закупкам отражает возможные потребности ТШО в
          части поставок товаров и услуг для обеспечения различных областей
          своей деятельности.
        </p>
        <AtomsFile
          file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
          text="План контрактов и закупок на 2022 год"
          icon="xls"
        />
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          text="Обновленный план контрактов и закупок на 2021 год"
          icon="xls"
        />
        <div class="slide__content_more">
          <div v-if="more" class="slide__content_more__text">
            Информация, содержащаяся в Плане по контрактам и закупкам ТШО,
            является предварительным прогнозом потребностей ТОО «Тенгизшевройл»
            (далее - ТШО) в товарах, работах или услугах на предстоящий период,
            упомянутый в нем. Публикация данных, относящихся к этой
            прогнозируемой деятельности по поиску поставщиков, контрактам и/или
            закупкам, предоставляется только для сведения и не должна
            рассматриваться как обязательство ТШО провести какую-либо конкретную
            деятельность или предложение (офферта) ТШО какому-либо лицу принять
            в ней участие. Опубликованные ранее мероприятия по поиску
            поставщиков, контрактам и/или закупкам могут быть отложены, изменены
            или отменены по собственному усмотрению ТШО без предварительного
            уведомления. Просим регулярно следить за обновлениями этого
            веб-сайта. ТШО в явной форме отказывается от какой-либо
            ответственности или обязательства за какой-либо ущерб или убытки,
            которые могут быть понесены каким-либо лицом в результате того или в
            связи с тем, что такое лицо полагается на данные, опубликованные в
            Плане контрактам и закупкам ТШО.
          </div>
          <div class="slide__content_more__link" @click="more = !more">
            Правовая оговорка <i class="icon-arrow-left" :class="{ more }" />
          </div>
        </div>
        <p class="subtitle">Выражение заинтересованности поставщика</p>
        <p>
          Поставщику, заинтересованному работать с ТШО, следует подать заявку
          перейдя по ссылке ниже:
          <a href="#">Ссылка на сайт для выражения заинтересованности поставщика
            (SEOI)</a>
        </p>
        <p>
          Примечание: ТШО также использует базу данных нефтегазовой индустрии
          «Алаш» (www.alash-kz.com) для определения перспективных поставщиков.
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <div class="container">
      <div class="kazakhstani__content">
        <div class="kazakhstani__titlee">Ближайшие мероприятие</div>
        <div class="kazakhstani__times">
          <div
            v-for="(item, key) in times"
            :key="key"
            class="kazakhstani__times_item"
            @click="timeModal(item)"
          >
            <div class="date"><i class="icon-date" />{{ item.date }}</div>
            <div class="time">{{ item.time }}</div>
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide
      :side="true"
      :data="slide[1]"
      class="slide gray"
    />
    <div class="container">
      <div class="kazakhstani__working">
        <div>
          <div class="kazakhstani__working_content">
            <div class="title">
              Мы заинтересованы в сотрудничестве с местными поставщиками,
              осуществляющими свою деятельность в следующих областях:
            </div>
            <div class="title">Думаете, что подходите?</div>
            <p>
              Свяжитесь с нами по адресу электронной почты
              <a href="mailto:kcdsearch@tengizchevroil.com">kcdsearch@tengizchevroil.com</a>
            </p>
          </div>
          <div class="kazakhstani__working_cards">
            <OrganismsSectionKazakhstaniCard1
              v-for="(card, key) in cards.slice(0, 2)"
              :key="key"
              :card="card"
            />
          </div>
        </div>
        <div class="kazakhstani__working_cards">
          <OrganismsSectionKazakhstaniCard1
            v-for="(card, key) in cards.slice(2, 6)"
            :key="key"
            :card="card"
          />
        </div>
      </div>
    </div>
    <div class="gray">
      <div class="container">
        <div class="strategy">
          <div class="strategy__content">
            <div class="strategy__title">
              Как работает долгосрочная стратегия заключения контрактов?
            </div>
            <p>
              Только в 2019 году компания ТШО и ее поставщики выполнили 13 плана
              по казахстанскому содержанию в рамках долгосрочных соглашений
            </p>
            <p>
              В ТШО твердо убеждены в том, что для достижения хороших
              результатов необходимо время и целенаправленные усилия. Наша
              долгосрочная стратегия заключения контрактов предоставляет ТШО и
              поставщикам целый ряд возможностей продолжать инвестировать в
              развитие потенциала местного рынка услуг.
            </p>
          </div>
          <div class="strategy__cards">
            <OrganismsSectionKazakhstaniCard1
              v-for="(card, key) in strategy"
              :key="key"
              :dark="card.dark"
              :card="card"
            />
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :data="slide[2]" class="slide" />
    <OrganismsSectionOperationSlide :side="true" :data="slide[3]" class="slide">
      <div class="slide__body">
        <hr />
        <p>
          В отношении казахстанского содержания определение показателей нашей
          работы является важным фактором отслеживания нашего успеха.
          <br />
          Расчет и отчетность по затратам на казахстанское содержание – это одно
          из законодательных тебований для ТШО. И мы напрямую заинтересованы в
          том, чтобы обеспечить ознакомление поставщиков ТШО с методологией
          расчета доли казахстанского содержания. Мы организуем соответствующие
          курсы обучения для наших текущих бизнес-партнеров на ежеквартальной
          основе. Эти курсы охватывают определенные аспекты законодательства о
          недропользовании и постановлений правительства, которые регулируют
          вопросы расчета доли местного содержания и где приведены основные
          термины и определения и примеры расчета доли КС при закупке товаров и
          услуг. Напоминаем, что данные тренинги доступны для текущих
          поставщиков и подрядчиков ТШО.
        </p>
        <p class="subtitle">
          Свяжитесь с нами по электронной почте
          <a href="mailto:kcdsearch@tengizchevroil.com">kcdsearch@tengizchevroil.com</a>, если заинтересованы в курсах
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionCareerBlock8 />
  </div>
</template>

<script>
import Map from '~/assets/img/kazakhstani/map.svg?inline'

export default {
  components: {
    Map,
    [process.browser && 'VueApexCharts']: () => import('vue-apexcharts'),
  },
  data() {
    return {
      more: false,
      tags: [
        {
          id: 1,
          text: 'Развитие потенциальных поставщиков ТШО',
          url: '/kazakhstani-content/join-tco-program',
        },
        {
          id: 2,
          text: 'Как стать поставщиком',
          url: '/kazakhstani-content',
        },
        {
          id: 3,
          text: 'Создание электронного каталога и загрузка счета-фактуры',
          url: '/kazakhstani-content/electronic-catalog',
        },
        {
          id: 4,
          text: 'Льготы',
          url: '/kazakhstani-content/benefits',
        },
      ],
      series: [
        {
          data: [
            10, 195, 380, 565, 750, 935, 1120, 1305, 1490, 1675, 1860, 2045,
            2230, 2415, 2600, 2785, 2970, 3155, 3340, 3525, 3710, 3895, 4080,
            4265, 4450, 4635, 4820,
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: [
            1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
            2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
            2015, 2016, 2017, 2018, 2019,
          ],
        },
        fill: {
          opacity: 1,
        },
      },
      slide: [
        {
          title: 'Сотрудничество с ТШО',
          image: 'kazakhstani/kazakhstani1.png',
        },
        {
          title: 'Создаем возможности для местных поставщиков',
          description: [
            'Критически важным аспектом успешного сотрудничества ТШО с местными поставщиками является понимание ими международных стандартов и соответствие требованиям по обеспечению техники безопасности и качества мирового уровня. Мы постоянно рассматриваем возможности оказания поддержки и инвестирования наших ресурсов в устойчивое развитие поставщиков для достижения ими более высокого уровня производственной деятельности.',
          ],
          image: 'kazakhstani/kazakhstani2.png',
        },
        {
          title: 'Локализация зарубежного оборудования',
          description: [
            'ТШО работает с признанными во всем мире фирмами-изготовителями оборудования в целях обеспечения безопасной, надежной и бесперебойной производственной деятельности и реализации проекта ПБР/ПУУД. Мы начали сотрудничество с несколькими фирмами-изготовителями оборудования, которое в долгосрочной перспективе принесет пользу для экономики Казахстана благодаря строительству объектов инфраструктуры, трансферту технологий и подготовке кадрового резерва.',
          ],
          image: 'kazakhstani/kazakhstani2.png',
        },
        {
          title: 'Правильный способ ведения деятельности',
          image: 'kazakhstani/kazakhstani1.png',
        },
      ],
      times: [
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: '15 июня',
          time: '15:00',
          name: 'Семинар',
        },
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: '1 июня',
          time: '12:00',
          name: 'Семинар',
        },
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: '29 июня',
          time: '09:00',
          name: 'Семинар',
        },
      ],
      cards: [
        {
          icon: 'fork',
          number: '01',
          title: 'Электрооборудование',
          description:
            'Кабели высокого напряжения, распредщиты низкого напряжения, трансформаторы, подстанции, удаленные терминалы',
        },
        {
          img: require('@/assets/icons/statistic2.svg'),
          number: '02',
          title: 'Услуги по техобслуживанию',
          description:
            'Услуги по ремонту высоковольтных двигателей, цех по замене труб теплообменников',
        },
        {
          icon: 'spinner',
          number: '03',
          title: 'Строительство',
          description: 'Резервуары и сосуды',
        },
        {
          icon: 'screwdriver',
          number: '04',
          title: 'Текущий ремонт и эксплуатация',
          description:
            'Клапаны, фланцы и фитинги, шпильки резьбовые, обтюраторы и распорки',
        },
        {
          icon: 'closure',
          number: '05',
          title: 'ИТ/ТЕЛЕКОМ',
          description: 'Волоконно-оптический кабель',
        },
        {
          icon: 'danger.svg',
          number: '06',
          title: 'БиОТ/ООС',
          description:
            'Утилизация отходов, дистанционное обучение по ТБ и соответствию нормативным требованиям, утилизация отходов деревообработки, защитная одежда',
        },
      ],
      strategy: [
        {
          icon: 'loop',
          number: '01',
          description:
            'ТШО определяет возможности развития казахстанского содержания с действующими и потенциальными поставщиками ',
        },
        {
          icon: 'messages',
          number: '02',
          description:
            'ТШО и поставщики обсуждают условия предоставления таких возможностей и разрабатывают план казахстанского содержания',
          dark: true,
        },
        {
          icon: 'friendly',
          number: '03',
          description:
            'ТШО и поставщики официально оформляют планы КС в рамках договоров ',
          dark: true,
        },
        {
          icon: 'setting',
          number: '04',
          description:
            'ТШО проводит постоянный контроль соответствия требованиям и отслеживает показатели работы',
        },
      ],
    }
  },
  methods: {
    onTag() {
      console.log('works')
    },
    timeModal(data) {
      this.$store.commit('side/open', data)
    },
    mapModal() {
      this.$store.commit('side/open', {
        number: '01',
        html: `<ul>
            <li>ОБЩЕСТРОИТЕЛЬНЫЕ, МОРСКИЕ РАБОТЫ И НОРМАТИВНО - ПРАВОВОЕ ОБЕСПЕЧЕНИЕ</li>
            <li>ОБЕСПЕЧЕНИЕ ПЕРСОНАЛОМ ТЕХН.</li>
            <li>РАЗРАБОТКА НЕФТЕГАЗОВОГО ПРОЦЕССА</li>
          </ul>`,
        name: 'Мангыстауская область',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.kazakhstani {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  .gray {
    background-color: $c-tco33;
  }

  &__chart {
    padding: 80px 0;

    p {
      font-size: 20px;
      color: $c-tco1;
    }
  }

  .strategy {
    display: flex;
    padding: 80px 0;

    & > div {
      width: 50%;
    }

    &__content {
      padding-right: 72px;
    }

    &__title {
      font-size: 38px;
      line-height: 46px;
      margin-bottom: 40px;
      color: $c-tco1;
      font-weight: 700;
    }

    p {
      margin-bottom: 40px;
    }

    &__cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > div {
        width: calc(50% - 24px);
        margin-bottom: 24px;
        box-shadow: 0 10px 30px 0 #8a959e1a;
      }
    }
  }

  &__titlee {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 46px;
    color: $c-tco3;
    font-weight: 700;
  }

  &__working {
    padding: 80px 0;

    & > div {
      display: flex;
      margin-bottom: 54px;

      &:first-child {
        .kazakhstani__working_cards {
          width: 50%;

          & > div {
            width: calc(50% - 12px);
          }
        }
      }
    }

    &_cards {
      display: flex;
      justify-content: space-between;

      & > div {
        width: calc(100% / 4 - 24px);
      }
    }

    &_content {
      width: 50%;
      margin-right: 24px;
      padding-right: 50px;

      .title {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 16px;
        color: #000;

        &:first-child {
          margin-bottom: 50px;
        }
      }

      p {
        a {
          color: $c-tco5;
        }
      }
    }
  }

  &__times {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    &_item {
      box-shadow: 0 10px 30px 0 #0154671a;
      padding: 20px 0 38px;
      width: calc(100% / 3 - 48px);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .date {
        color: #5e8698;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        i {
          font-size: 30px;
          margin-right: 12px;
        }
      }

      .time {
        font-size: 38px;
        line-height: 48px;
        color: $c-tco3;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .title {
        font-size: 24px;
        font-weight: 700;
        color: $c-tco3;
        line-height: 28px;
      }
    }
  }

  &__content {
    padding: 80px 0;

    p {
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 28px;
      color: $c-tco1;
    }
  }

  &__map {
    padding: 80px 0;

    .map {
      width: calc(100% - 53px);
      cursor: pointer;
    }
  }

  &__news {
    background: #f2f6f7;
  }

  .slide::v-deep {
    &.gray {
      background: $c-tco33;
    }

    .slide {
      &__title {
        margin-bottom: 16px;
      }

      &__content {
        &_more {
          position: relative;
          &__text {
            position: absolute;
            bottom: 25px;
            background: white;
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 14px;
            width: 100%;
          }

          &__link {
            color: $c-tco5;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 40px;

            i {
              margin-left: 10px;
              font-size: 22px;
              transform-origin: center;
              transform: rotate(-90deg);

              &.more {
                transform: rotate(90deg);
              }
            }
          }
        }
      }
    }

    hr {
      color: #8c9fa6;
      margin-bottom: 40px;
    }

    .subtitle {
      color: $c-tco1;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    p {
      margin-bottom: 40px;

      a {
        color: $c-tco5;
        text-decoration: underline;
      }
    }
  }
}

.cards {
  display: flex;
  justify-content: space-between;

  & > * {
    width: calc((100% - 72px) / 4);
  }

  @include wide-tablet {
    flex-wrap: wrap;

    & > * {
      margin-bottom: 24px;
      width: calc((100% - 24px) / 2);
    }
  }

  @include phone {
    & > * {
      margin-bottom: 8px;
      width: calc((100% - 9px) / 2);
    }
  }
}
</style>
