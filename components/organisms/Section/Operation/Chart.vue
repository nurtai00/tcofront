<template>
  <div class="chart">
    <div class="container">
      <AtomsHeading type="h3" class="chart__title">
        Техника безопасности
      </AtomsHeading>
      <client-only>
        <VueApexCharts
          class="chart__item"
          :options="chartOptions"
          :series="series"
        />
      </client-only>
      <div class="chart__description">
        ТШО сохраняет за собой лидирующие позиции в области обеспечения
        промышленной безопасности по таким стандартным показателям как,
        происшествия с потерей рабочих дней и коэффициент регистрируемых
        происшествий.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    [process.browser && 'VueApexCharts']: () => import('vue-apexcharts'),
  },
  data: () => ({
    series: [
      {
        name: 'Коэффициент регистрируемых происшествий ',
        data: [7, 5, 4, 5, 10, 2, 1, 3, 0],
      },
      {
        name: 'Случаи серьезной травмы',
        data: [0.15, 0.091, 0.097, 0.11, 0.1, 0.103, 0.137, 0.106, 0.143, 0.119],
      },
    ],
    chartOptions: {
      chart: {
        height: 200,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      colors: ['#FFC000', '#00B0F0'],
      dataLabels: {
        enabled: true,
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
        ],
        title: {
          text: 'Year',
        },
      },
      yaxis: {
        enabled: false,
        show: false,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '14px',
        floating: false,
        offsetY: 5,
      },
    },
  }),
}
</script>

<style lang="scss" scoped>
.chart {
  padding: 80px 0;

  &__title {
    margin-bottom: 40px;
  }

  &__item {
    margin-bottom: 20px;

    &::v-deep {
      .apexcharts-legend {
        flex-direction: column;

        &-series {
          display: flex !important;
          align-items: center;
          margin-bottom: 5px;

          span:first-child {
            margin-right: 5px;
          }
        }
      }
    }
  }

  &__description {
    font-size: 20px;
    line-height: 28px;

    @include phone {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
