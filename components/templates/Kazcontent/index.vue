<template>
  <div class="kazakhstani">
    <div class="container">
      <MoleculesBreadcrumbs class="kazakhstani__breadcrumbs">
        <AtomsBreadOption :to="localePath('/')">
          {{ $t('kazContent.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/kazakhstani-content')">
          {{ $t('kazContent.title') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="kazakhstani__title">
        {{ $t('kazContent.title') }}
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
          {{ $t('kazContent.section1.chartInfo') }}
        </p>
      </div>
    </div>
    <div class="kazakhstani__content gray">
      <div class="container">
        <div class="kazakhstani__titlee">
          {{ $t('kazContent.section2.title') }}
        </div>
        <p>
          {{ $t('kazContent.section2.description') }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="kazakhstani__map">
        <div class="kazakhstani__titlee">
          {{ $t('kazContent.contributionTco') }}
        </div>
        <img
          class="map"
          src="~/assets/img/kazakhstani/map.png"
          @click="mapModal"
        />
      </div>
    </div>

    <OrganismsSectionOperationSlide :data="slide[0]" class="slide gray">
      <div class="slide__body">
        <hr />
        <p class="subtitle">{{ $t('kazContent.cooperationTco.subtitle') }}</p>
        <p>
          {{ $t('kazContent.cooperationTco.description') }}
        </p>
        <AtomsFile
          file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
          :text="$t('kazContent.cooperationTco.files')[0]"
          icon="xls"
        />
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          :text="$t('kazContent.cooperationTco.files')[1]"
          icon="xls"
        />
        <div class="slide__content_more">
          <div v-if="more" class="slide__content_more__text">
            {{ $t('kazContent.cooperationTco.accordion.description') }}
          </div>
          <div class="slide__content_more__link" @click="more = !more">
            {{ $t('kazContent.cooperationTco.accordion.title') }}
            <i class="icon-arrow-left" :class="{ more }" />
          </div>
        </div>
        <p class="subtitle">
          {{ $t('kazContent.cooperationTco.providerInterest.title') }}
        </p>
        <p>
          {{
            $t('kazContent.cooperationTco.providerInterest.descriptions.first')
          }}
          <a href="#">
            {{
              $t('kazContent.cooperationTco.providerInterest.descriptions.link')
            }}</a
          >
        </p>
        <p>
          {{
            $t('kazContent.cooperationTco.providerInterest.descriptions.second')
          }}
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <div class="container">
      <div class="kazakhstani__content">
        <div class="kazakhstani__titlee">
          {{ $t('kazContent.coomingEvent.title') }}
        </div>
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
              {{ $t('kazContent.cooperationInterest.title') }}
            </div>
            <div class="title">
              {{ $t('kazContent.cooperationInterest.subtitle') }}
            </div>
            <p>
              {{ $t('kazContent.cooperationInterest.link')[0] }}
              <a href="mailto:kcdsearch@tengizchevroil.com">
                {{ $t('kazContent.cooperationInterest.link')[1] }}</a
              >
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
              {{ $t('kazContent.longStrategy.title') }}
            </div>
            <p>
              {{ $t('kazContent.longStrategy.descriptions')[0] }}
            </p>
            <p>
              {{ $t('kazContent.longStrategy.descriptions')[1] }}
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
          {{ $t('kazContent.rightWay.description') }}
        </p>
        <p class="subtitle">
          {{ $t('kazContent.rightWay.link')[0] }}
          <a href="mailto:kcdsearch@tengizchevroil.com">{{
            $t('kazContent.rightWay.link')[1]
          }}</a>
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionCareerBlock8 />
  </div>
</template>

<script>
export default {
  components: {
    [process.browser && 'VueApexCharts']: () => import('vue-apexcharts'),
  },
  data() {
    return {
      more: false,
      tags: [
        {
          id: 1,
          text: this.$t('kazContent.section1.tags')[0],
          url: this.localePath('/kazakhstani-content/join-tco-program'),
        },
        {
          id: 2,
          text: this.$t('kazContent.section1.tags')[1],
          url: this.localePath('/kazakhstani-content'),
        },
        {
          id: 3,
          text: this.$t('kazContent.section1.tags')[2],
          url: this.localePath('/kazakhstani-content/electronic-catalog'),
        },
        {
          id: 4,
          text: this.$t('kazContent.section1.tags')[3],
          url: this.localePath('/kazakhstani-content/benefits'),
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
          title: this.$t('kazContent.cooperationTco.title'),
          image: 'kazakhstani/kazakhstani1.png',
        },
        {
          title: this.$t('kazContent.localeSuppliers.title'),
          description: [this.$t('kazContent.localeSuppliers.description')],
          image: 'kazakhstani/kazakhstani2.png',
        },
        {
          title: this.$t('kazContent.foreignTools.title'),
          description: [this.$t('kazContent.foreignTools.description')],
          image: 'kazakhstani/kazakhstani2.png',
        },
        {
          title: this.$t('kazContent.rightWay.title'),
          image: 'kazakhstani/kazakhstani1.png',
        },
      ],
      times: [
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: this.$t('kazContent.coomingEvent.date'),
          time: '15:00',
          name: this.$t('kazContent.coomingEvent.name'),
        },
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: this.$t('kazContent.coomingEvent.date'),
          time: '15:00',
          name: this.$t('kazContent.coomingEvent.name'),
        },
        {
          number: '15 июня, в 15:00',
          html: '<ul><li>Краткое содержание планируемого мероприятия и фото. Краткое содержание планируемого мероприятия. Краткое содержание планируемого мероприятия.</li></ul>',
          date: this.$t('kazContent.coomingEvent.date'),
          time: '15:00',
          name: this.$t('kazContent.coomingEvent.name'),
        },
      ],
      cards: [
        {
          icon: 'fork',
          number: '01',
          title: this.$t('kazContent.cooperationInterest.cards')[0].title,
          description: this.$t('kazContent.cooperationInterest.cards')[0]
            .description,
        },
        {
          icon: 'tool',
          number: '02',
          title: this.$t('kazContent.cooperationInterest.cards')[1].title,
          description: this.$t('kazContent.cooperationInterest.cards')[1]
            .description,
        },
        {
          icon: 'spinner',
          number: '03',
          title: this.$t('kazContent.cooperationInterest.cards')[2].title,
          description: this.$t('kazContent.cooperationInterest.cards')[2]
            .description,
        },
        {
          icon: 'screwdriver',
          number: '04',
          title: this.$t('kazContent.cooperationInterest.cards')[3].title,
          description: this.$t('kazContent.cooperationInterest.cards')[3]
            .description,
        },
        {
          icon: 'closure',
          number: '05',
          title: this.$t('kazContent.cooperationInterest.cards')[4].title,
          description: this.$t('kazContent.cooperationInterest.cards')[4]
            .description,
        },
        {
          icon: 'danger.svg',
          number: '06',
          title: this.$t('kazContent.cooperationInterest.cards')[5].title,
          description: this.$t('kazContent.cooperationInterest.cards')[5]
            .description,
        },
      ],
      strategy: [
        {
          icon: 'loop',
          number: '01',
          description: this.$t('kazContent.longStrategy.cards')[0],
        },
        {
          icon: 'messages',
          number: '02',
          description: this.$t('kazContent.longStrategy.cards')[1],
          dark: true,
        },
        {
          icon: 'friendly',
          number: '03',
          description: this.$t('kazContent.longStrategy.cards')[2],
          dark: true,
        },
        {
          icon: 'setting',
          number: '04',
          description: this.$t('kazContent.longStrategy.cards')[3],
        },
      ],
    }
  },
  mounted() {
    console.log(this.localePath('/kazakhstani-content/join-tco-program'))
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
