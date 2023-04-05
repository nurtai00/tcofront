<template>
  <div class="p_block">
    <div class="p_block_title">
      <AtomsTitle small> {{ $t('news.pub') }} </AtomsTitle>
      <nuxt-link :to="localePath('/news/publications')">
        {{ $t('news.pub_all') }}
      </nuxt-link>
    </div>
    <div class="p_block_list">
      <MoleculesCardPublicationCard
        v-for="(item, index) in publications_list[$i18n.locale].slice(0, 4)"
        :key="item.link"
        :text="item.name"
        :link="item.link"
        :img="require(`@/assets/img/pub${index + 1}.png`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publications_list: {
        ru: [
          {
            name: 'Отчет о корпоративной ответственности за 2019-20 гг (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%BE%D1%82%D1%87%D0%B5%D1%82-%D0%BE-%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B7%D0%B0-2019-20-%D0%B3%D0%B3.pdf?sfvrsn=a9e2c45c_2',
          },
          {
            name: 'Итоги 2019 года (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%B8%D1%82%D0%BE%D0%B3%D0%B8-2019-%D0%B3%D0%BE%D0%B4%D0%B0.pdf?sfvrsn=644dc45c_2',
          },
          {
            name: 'Отчет по корпоративной ответственности за 2018 г. (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/2018-corporate-responsibility-report.pdf?sfvrsn=8372c45c_4',
          },
          {
            name: 'Итоги 2018 года (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%B8%D1%82%D0%BE%D0%B3%D0%B8-2018-%D0%B3%D0%BE%D0%B4%D0%B0.pdf?sfvrsn=3ecfc75c_2',
          },
          {
            name: '2021 Отчет о корпоративной ответственности (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/2021-%D0%BE%D1%82%D1%87%D0%B5%D1%82-%D0%BE-%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B85e0fa352577266428434ff0000af314c.pdf?sfvrsn=fe7dc55c_2',
          },
          {
            name: 'Основные экологические показатели за 2021 год (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D0%B8-%D0%B7%D0%B0-2021-%D0%B3%D0%BE%D0%B4.pdf?sfvrsn=44a5c45c_2',
          },
          {
            name: 'Отчет по корпоративной социальной ответственности за 2017 г. (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/2017-csrr-rus.pdf?sfvrsn=531dc75c_4',
          },
          {
            name: 'Буклет о процессе управления обратной связью (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/feedback-management-process-flyer.pdf?sfvrsn=422c75c_12',
          },
          {
            name: 'Брошюра «Игилик» (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%B1%D1%80%D0%BE%D1%88%D1%8E%D1%80%D0%B0-%D0%B8%D0%B3%D0%B8%D0%BB%D0%B8%D0%BA.pdf?sfvrsn=ce2ec65c_4',
          },
          {
            name: 'Развитие казахстанского содержания в ТШО (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/iv_kazcont_rus_2017.pdf?sfvrsn=4e4bc65c_4',
          },
          {
            name: 'Отчет по корпоративной ответственности за 2015-16 гг. (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/ru/tco_2015_2016_corporate-responsibility-report_r.pdf?sfvrsn=4a4bc65c_4',
          },
          {
            name: 'Обзор деятельности в 2017 г. (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/2017-year-in-review_erk_final.pdf?sfvrsn=b94bc65c_8',
          },
        ],
        en: [
          {
            name: '2019-20 Corporate Responsibility Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/2019-20-corporate-responsibility-report.pdf?sfvrsn=44fdc45c_2',
          },
          {
            name: '2019 Year in Review (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/2019-year-in-review.pdf?sfvrsn=1e4dc45c_2',
          },
          {
            name: '2018 Corporate Responsibility Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/2018-corporate-responsibility-report.pdf?sfvrsn=a272c45c_4',
          },
          {
            name: '2018 Year in Review (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/2018-year-in-review.pdf?sfvrsn=d9cfc75c_4',
          },
          {
            name: '2021 Corporate Responsibility Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/2021-corporate-responsibility-reportddf2a252577266428434ff0000af314c.pdf?sfvrsn=7080c45c_2',
          },
          {
            name: '2021 Environmental Performance (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/environmental-brochure-eng.pdf?sfvrsn=12a5c45c_8',
          },
          {
            name: 'TCO 2017 Corporate Responsibility Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/tco-2017-corporate-responsibility-report.pdf?sfvrsn=bc26c75c_4',
          },
          {
            name: 'Feedback Management Process flyer (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/feedback-management-process-flyer.pdf?sfvrsn=422c75c_12',
          },
          {
            name: 'Egilik Brochure (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/egilik-brochure.pdf?sfvrsn=2f2ec65c_4',
          },
          {
            name: 'Kazakhstani Content Development in TCO (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/iv_kazcont_eng_2017.pdf?sfvrsn=2b4bc65c_4',
          },
          {
            name: 'TCO 2015-16 Corporate Responsibility Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/eng/tco_2015_2016_corporate-responsibility-report_e.pdf?sfvrsn=2c4bc65c_6',
          },
          {
            name: '2017 Year in Review (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/2017-year-in-review_erk_final.pdf?sfvrsn=b94bc65c_8',
          },
        ],
        kk: [
          {
            name: '2019-20 жылдарындағы корпоративтік жауапкершілік туралы есеп (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2019-20-%D0%B6%D1%8B%D0%BB%D0%B4%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0%D2%93%D1%8B-%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D1%82%D1%96%D0%BA-%D0%B6%D0%B0%D1%83%D0%B0%D0%BF%D0%BA%D0%B5%D1%80%D1%88%D1%96%D0%BB%D1%96%D0%BA-%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8B-%D0%B5%D1%81%D0%B5%D0%BF.pdf?sfvrsn=7ffdc45c_2',
          },
          {
            name: '2019 жылдың қорытындылары (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2019-%D0%B6%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-%D2%9B%D0%BE%D1%80%D1%8B%D1%82%D1%8B%D0%BD%D0%B4%D1%8B%D0%BB%D0%B0%D1%80%D1%8B.pdf?sfvrsn=4e4dc45c_2',
          },
          {
            name: '2018 ж. корпоративтік жауапкершілік туралы есеп (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2018-corporate-responsibility-report.pdf?sfvrsn=c272c45c_4',
          },
          {
            name: '2018 жыл қорытындылары (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2018-%D0%B6%D1%8B%D0%BB-%D2%9B%D0%BE%D1%80%D1%8B%D1%82%D1%8B%D0%BD%D0%B4%D1%8B%D0%BB%D0%B0%D1%80%D1%8B.pdf?sfvrsn=2cfc75c_2',
          },
          {
            name: '2021 Корпоративтік жауапкершілік туралы есеп (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2021-%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D1%82%D1%96%D0%BA-%D0%B6%D0%B0%D1%83%D0%B0%D0%BF%D0%BA%D0%B5%D1%80%D1%88%D1%96%D0%BB%D1%96%D0%BA-%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8B-%D0%B5%D1%81%D0%B5%D0%BF.pdf?sfvrsn=4780c45c_2',
          },
          {
            name: '2021 жылғы негізгі экологиялық көрсеткіштері (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2021-%D0%B6%D1%8B%D0%BB%D2%93%D1%8B-%D0%BD%D0%B5%D0%B3%D1%96%D0%B7%D0%B3%D1%96-%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%D0%BB%D1%8B%D2%9B-%D0%BA%D3%A9%D1%80%D1%81%D0%B5%D1%82%D0%BA%D1%96%D1%88%D1%82%D0%B5%D1%80%D1%96.pdf?sfvrsn=7fa5c45c_2',
          },
          {
            name: 'Корпоративтік жауапкершілік туралы 2017 жыл бойынша есеп (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2017-csrr-kz.pdf?sfvrsn=3907c75c_4',
          },
          {
            name: 'Кері байланысты басқару үдерісі туралы буклеті (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/feedback-management-process-flyer.pdf?sfvrsn=422c75c_12',
          },
          {
            name: '«Игілік» бағдарламасының брошюрасы (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/egilik_kz_2016_for_web.pdf?sfvrsn=192ec65c_4',
          },
          {
            name: 'ТШО-дағы қазақстандық қамтуды дамыту (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/iv_kazcont_kaz_2017.pdf?sfvrsn=e84bc65c_4',
          },
          {
            name: 'Корпоративтік жауапкершілік жөніндегі 2015-2016 жылдарға арналған есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/kaz/tco_2015_2016_corporate-responsibility-report_k.pdf?sfvrsn=e94bc65c_4',
          },
          {
            name: '2017 жыл қорытындылары (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/publications/erk/2017-%D0%B6%D1%8B%D0%BB-%D2%9B%D0%BE%D1%80%D1%8B%D1%82%D1%8B%D0%BD%D0%B4%D1%8B%D0%BB%D0%B0%D1%80%D1%8B.pdf?sfvrsn=b94bc65c_8',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.p_block {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tablet() {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include tablet() {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media (orientation: portrait) {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }
    a {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      text-decoration-line: underline;
      color: #00b0f0;
      @include tablet() {
        font-size: 14px;
        line-height: 18px;
        margin-top: 12px;
      }
    }
  }
  &_list {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 18px));
    grid-gap: 24px;
    margin-top: 92px;
    @include tablet() {
      grid-template-columns: repeat(2, calc(50% - 7px));
      grid-gap: 13px;
      margin-top: 20px;
    }
  }
}
</style>
