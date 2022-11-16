<template>
  <div class="kazakhstani">
    <div class="container">
      <MoleculesBreadcrumbs class="kazakhstani__breadcrumbs">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content">Kazakhstani Content</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="kazakhstani__title">Казахстанское содержание</AtomsTitle>
      <div class="kazakhstani__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
      <div class="kazakhstani__chart">
        <VueApexCharts type="bar" height="350" :options="chartOptions" :series="series" />
        <p>Совокупные затраты ТШО на закупку местных товаров и услуг превысили 39,3 млрд долларов США. Это позволяет нам удерживать лидирующие позиции в сфере развития казахстанского содержания</p>
      </div>
    </div>
    <div class="kazakhstani__content">
      <div class="container">
        <div class="kazakhstani__titlee">В ТШО мы ищем, находим и развиваем местных поставщиков для проектов мирового уровня, таких как Тенгиз.</div>
        <p>ТШО осуществляет свою деятельность на одном из самых крупных и технологически сложных месторождений нефти в мире. Обеспечение безопасности и надежности операций по разведке и добыче на Тенгизе являются ключевыми факторами, способствующими успешному развитию экономики Казахстана и удовлетворению мирового спроса на энергоносители.</p>
        <p>Наша основная задача заключается в поиске товаров и услуг, которые отвечают международным стандартам, при этом предоставляя возможности для местных поставщиков и квалифицированных специалистов.</p>
        <p>Посмотрите этот видеоролик, чтобы узнать как ТШО создает возможности для местного рынка услуг.</p>
      </div>
    </div>
    <div class="container">
      <div class="kazakhstani__map">
        <div class="kazakhstani__titlee">Вклад ТШО в экономику РК</div>
        <Map class="map" />
      </div>
    </div>

    <OrganismsSectionOperationSlide :side="false" :data="slide[0]" class="slide">
      <div class="slide__body">
        <br>
        <p class="subtitle">План контрактов и закупок</p>
        <p>Наш план по контрактам и закупкам отражает возможные потребности ТШО в части поставок товаров и услуг для обеспечения различных областей своей деятельности.</p>
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
          <div class="slide__content_more__text">Информация, содержащаяся в Плане по контрактам и закупкам ТШО, является предварительным прогнозом потребностей ТОО «Тенгизшевройл» (далее - ТШО) в товарах, работах или услугах на предстоящий период, упомянутый в нем. Публикация данных, относящихся к этой прогнозируемой деятельности по поиску поставщиков, контрактам и/или закупкам, предоставляется только для сведения и не должна рассматриваться как обязательство ТШО провести какую-либо конкретную деятельность или предложение (офферта) ТШО какому-либо лицу принять в ней участие. Опубликованные ранее мероприятия по поиску поставщиков, контрактам и/или закупкам могут быть отложены, изменены или отменены по собственному усмотрению ТШО без предварительного уведомления. Просим регулярно следить за обновлениями этого веб-сайта. ТШО в явной форме отказывается от какой-либо ответственности или обязательства за какой-либо ущерб или убытки, которые могут быть понесены каким-либо лицом в результате того или в связи с тем, что такое лицо полагается на данные, опубликованные в Плане контрактам и закупкам ТШО.</div>
          <div class="slide__content_more__link"> Правовая оговорка <i class="icon-arrowDown" /></div>
        </div>
        <p class="subtitle">Выражение заинтересованности поставщика</p>
        <p>Поставщику, заинтересованному работать с ТШО, следует подать заявку перейдя по ссылке ниже: <a href="#">Ссылка на сайт для выражения заинтересованности поставщика (SEOI)</a></p>
        <p>Примечание: ТШО также использует базу данных нефтегазовой индустрии «Алаш» (www.alash-kz.com) для определения перспективных поставщиков.</p>
      </div>
    </OrganismsSectionOperationSlide>
    <div class="container">
      <div class="kazakhstani__content">
        <div class="kazakhstani__title">Ближайшие мероприятие</div>
        <div class="kazakhstani__times">
          <div v-for="(item, key) in times" :key="key" class="kazakhstani__times_item">
            <div class="date"><i class="icon-date" />{{ item.date }}</div>
            <div class="time">{{ item.time }}</div>
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <OrganismsSectionOperationSlide :side="false" :data="slide[1]" class="slide" />
      <div class="kazakhstani__working">
        <div>
          <div class="kazakhstani__working_content">
            <div class="working__title">Мы заинтересованы в сотрудничестве с местными поставщиками, осуществляющими свою деятельность в следующих областях:</div>
            <div class="working__title">Думаете, что подходите? </div>
            <p>Свяжитесь с нами по адресу электронной почты <a href="mailto:kcdsearch@tengizchevroil.com">kcdsearch@tengizchevroil.com</a> </p>
          </div>
          <div class="kazakhstani__working_cards">
            <OrganismsSectionKazakhstaniCard1 v-for="(card, key) in cards" :key="key" :card="card" />
          </div>
        </div>
        <div class="kazakhstani__working_cards">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/assets/img/kazakhstani/map.svg'

export default {
  components: {
    Map,
    [process.browser && 'VueApexCharts']: () => import('vue-apexcharts'),
  },
  data() {
    return {
      tags: [
        {
          id: 1,
          text: 'Развитие потенциальных поставщиков ТШО',
          url: '/join-tco-program',
        },
        {
          id: 2,
          text: 'Как стать поставщиком',
          url: '/benefits'
        },
        {
          id: 3,
          text: 'Создание электронного каталога и загрузка счета-фактуры',
          url: '/electronic-catalog.vue'
        },
        {
          id: 4,
          text: 'Льготы',
          url: '/'
        }
      ],
      series: [{ data: [10, 195, 380, 565, 750, 935, 1120, 1305, 1490, 1675, 1860, 2045, 2230, 2415, 2600, 2785, 2970, 3155, 3340, 3525, 3710, 3895, 4080, 4265, 4450, 4635, 4820] }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        },
        fill: {
          opacity: 1
        },
      },
      slide: [
        {
          title:
            'Сотрудничество с ТШО',
          image: 'kazakhstani/kazakhstani1.png',
        },
        {
          title: 'Создаем возможности для местных поставщиков',
          description: 'Критически важным аспектом успешного сотрудничества ТШО с местными поставщиками является понимание ими международных стандартов и соответствие требованиям по обеспечению техники безопасности и качества мирового уровня. Мы постоянно рассматриваем возможности оказания поддержки и инвестирования наших ресурсов в устойчивое развитие поставщиков для достижения ими более высокого уровня производственной деятельности. ',
          image: 'kazakhstani/kazakhstani2.png'
        }
      ],
      times: [
        {
          date: '15 июня',
          time: '15:00',
          title: 'Семинар'
        },
        {
          date: '1 июня',
          time: '12:00',
          title: 'Семинар'
        },
        {
          date: '29 июня',
          time: '09:00',
          title: 'Семинар'
        }
      ],
      cards: [
        {
          icon: 'fork',
          number: '01',
          title: 'Электрооборудование',
          description: 'Кабели высокого напряжения, распредщиты низкого напряжения, трансформаторы, подстанции, удаленные терминалы',
        },
        {
          icon: 'tool',
          number: '02',
          title: 'Услуги по техобслуживанию',
          description: 'Услуги по ремонту высоковольтных двигателей, цех по замене труб теплообменников',
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
          description: 'Клапаны, фланцы и фитинги, шпильки резьбовые, обтюраторы и распорки',
        },
        {
          icon: 'closure',
          number: '05',
          title: 'ИТ/ТЕЛЕКОМ',
          description: 'Волоконно-оптический кабель',
        },
        {
          icon: 'danger',
          number: '06',
          title: 'БиОТ/ООС',
          description: 'Утилизация отходов, дистанционное обучение по ТБ и соответствию нормативным требованиям, утилизация отходов деревообработки, защитная одежда',
        }
      ]
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

  &__chart {
    padding: 80px 0;

    p {
      font-size: 20px;
      color: $c-tco1;
    }
  }

  &__titlee {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 46px;
    color: $c-tco1;
    font-weight: 700;
  }

  &__content {
    padding: 80px 0;
    background-color: $c-tco33;

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
    }
  }

  &__news {
    background: #f2f6f7;
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
