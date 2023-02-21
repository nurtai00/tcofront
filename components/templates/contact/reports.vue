<template>
  <div class="reports">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('contact.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact">
          {{ $t('contact.contact') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback">
          {{ $t('contact.reports.feedback') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback/reports">
          {{ $t('contact.reports.reports') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20" small>
        {{ $t('contact.reports.title') }}
      </AtomsTitle>
      <div class="reports__docs">
        <div v-for="file of files[$i18n.locale]" :key="file.link">
          <AtomsPdfFile
            :width="30"
            :height="40"
            :href="file.link"
            :text="file.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // files: Array.from({ length: 24 }, (_, index) => Math.random() * index),
      files: {
        en: [
          {
            name: '3Q 2022 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2022/3q-2022-tco-feedback-process-report.pdf?sfvrsn=8a20c55c_2',
          },
          {
            name: '2Q 2022 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2022/2q-2022-tco-feedback-process-report.pdf?sfvrsn=2e3dc55c_2',
          },
          {
            name: '1Q 2022 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2022/1q-2022-tco-feedback-process-report.pdf?sfvrsn=469cc45c_4',
          },
          {
            name: '2021 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2021/2021-tco-feedback-process-report.pdf?sfvrsn=b89cc45c_2',
          },
          {
            name: '3Q 2021 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2021/3q-2021-tco-feedback-process-report.pdf?sfvrsn=4c9fc45c_2',
          },
          {
            name: '2 Quarter 2021 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2021/2-quarter-grievance-mechanism-report.pdf?sfvrsn=89cbc45c_4',
          },
          {
            name: '1 Quarter 2021 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2021/1q2021-feedback-process-report.pdf?sfvrsn=5ecac45c_4',
          },
          {
            name: '4 Quarter 2020 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2020/4-quarter-grievance-mechanism-report.pdf?sfvrsn=7ccac45c_4',
          },
          {
            name: '3 Quarter 2020 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2020/3-quarter-grievance-mechanism-report.pdf?sfvrsn=1bcac45c_4',
          },
          {
            name: '2 Quarter 2020 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2020/2-quarter-grievance-mechanism-report.pdf?sfvrsn=3acac45c_4',
          },
          {
            name: '1 Quarter Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2020/1q2020-grievance-mechnism-report_e.pdf?sfvrsn=cfcac45c_4',
          },
          {
            name: '4 Quarter 2019 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2019/4-quarter-grievance-mechanism-report.pdf?sfvrsn=1ac5c45c_4',
          },
          {
            name: '3 Quarter 2019 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2019/3q2019-tco-feedback-process-report_e.pdf?sfvrsn=3dc5c45c_4',
          },
          {
            name: '2 Quarter 2019 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2019/2-quarter-grievance-mechanism-report.pdf?sfvrsn=777c45c_4',
          },
          {
            name: '1 Quarter 2019 Grievance Mechanism Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2019/1-quarter-grievance-mechanism-report.pdf?sfvrsn=5476c45c_4',
          },
          {
            name: '2018 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2018/2018-tco-feedback-process-report.pdf?sfvrsn=6a94c75c_2',
          },
          {
            name: '3Q 2018 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2018/3q-tco-feedback-process-report.pdf?sfvrsn=94e0c75c_2',
          },
          {
            name: '2Q 2018 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2018/2q-tco-feedback-process-report.pdf?sfvrsn=81e0c75c_2',
          },
          {
            name: '1Q 2018 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2018/1q-tco-feedback-process-report.pdf?sfvrsn=bee0c75c_2',
          },
          {
            name: '2017 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2017/2017-tco-feedback-process-report.pdf?sfvrsn=da3dc75c_2',
          },
          {
            name: '3Q 2017 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2017/3q2017-tco-feedback-process-report.pdf?sfvrsn=cb3dc75c_2',
          },
          {
            name: '2Q 2017 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2017/2q-2017-tco-feedback-process-report.pdf?sfvrsn=ca3dc75c_2',
          },
          {
            name: '1Q2017 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2017/1q2017-tco-feedback-process-report.pdf?sfvrsn=cc3dc75c_2',
          },
          {
            name: '2016 TCO Feedback Process Report (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/eng/2016/2016-tco-feedback-process-report.pdf?sfvrsn=d93dc75c_2',
          },
        ],
        kk: [
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2022 ж. 3 тоқсан (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2022/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2022-%D0%B6-3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD.pdf?sfvrsn=9f20c55c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2022 ж. 2 тоқсан (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2022/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2022-%D0%B6-2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD.pdf?sfvrsn=333dc55c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2022 ж. 1 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2022/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2022-%D0%B6-1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=a29dc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2021 ж (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2021/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2021-%D0%B6.pdf?sfvrsn=709cc45c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2021 ж. 3 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2021/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2021-%D0%B6-3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=6b9cc45c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2021 ж. 2 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2021/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2021-%D0%B6-2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=76cbc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2021 ж. 1тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2021/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2021-%D0%B6-1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=64cbc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2020 ж. 4 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2020/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-4-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96.pdf?sfvrsn=22cbc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2020 ж. 3 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2020/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2020-%D0%B6-3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=d4cbc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2020 ж. 2 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2020/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2020-%D0%B6-2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=c6cbc45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2020 ж. 1 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2020/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2020-%D0%B6-1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=ebcbc45c_6',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2019 ж. 4 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2019/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-4-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96.pdf?sfvrsn=59c5c45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2019 ж. 3 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2019/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2019-%D0%B6-3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=7bc5c45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2019 ж. 2 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2019/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2019-%D0%B6-2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=cf77c45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2019 ж. 1 тоқсан бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2019/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2019-%D0%B6-1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=e177c45c_4',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2018 жыл бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2018/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-2018-%D0%B6%D1%8B%D0%BB-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96.pdf?sfvrsn=a995c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2018 ж. 3 тоқсан (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2018/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD.pdf?sfvrsn=de2c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2018 ж. 2 тоқсан (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2018/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD.pdf?sfvrsn=3ee2c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2018 ж. 1 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2018/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=2fe2c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2017 жыл бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-2017-%D0%B6%D1%8B%D0%BB-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96.pdf?sfvrsn=e022c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2017 ж. 3 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2017-%D0%B6-3-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=e622c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2017 ж. 2 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2017-%D0%B6-2-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=fe22c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша есебі - 2017 ж. 1 тоқсаны (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96---2017-%D0%B6-1-%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B.pdf?sfvrsn=e122c75c_2',
          },
          {
            name: 'ТШО-ның кері байланыс үдерісі бойынша 2016 жыл бойынша есебі (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/kaz/2016/%D1%82%D1%88%D0%BE-%D0%BD%D1%8B%D2%A3-%D0%BA%D0%B5%D1%80%D1%96-%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81-%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-2016-%D0%B6%D1%8B%D0%BB-%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0-%D0%B5%D1%81%D0%B5%D0%B1%D1%96.pdf?sfvrsn=e222c75c_2',
          },
        ],
        ru: [
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2022 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2022/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-3-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2022-%D0%B3.pdf?sfvrsn=e420c55c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2022 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2022/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2022-%D0%B3.pdf?sfvrsn=183dc55c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2022 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2022/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-1-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2022-%D0%B3.pdf?sfvrsn=8e9dc45c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2021 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2021/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2021-%D0%B3.pdf?sfvrsn=c49cc45c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2021 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2021/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-3-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2021-%D0%B3.pdf?sfvrsn=f99cc45c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2021 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2021/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=a5c9c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2021 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2021/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=53c8c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2020 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2020/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2020-%D0%B3%D0%BE%D0%B4.pdf?sfvrsn=3ec8c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2020 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2020/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=cdc8c45c_6',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2020 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2020/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=97c8c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2020 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2020/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=85c8c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2019 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2019/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2019-%D0%B3%D0%BE%D0%B4.pdf?sfvrsn=94cac45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2019 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2019/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=bacac45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2019 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2019/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=2d77c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2019 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2019/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=b677c45c_4',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2018 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2018/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2018-%D0%B3.pdf?sfvrsn=7494c75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2018 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2018/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=3ce3c75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2018 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2018/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=2de3c75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2018 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2018/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB.pdf?sfvrsn=dee3c75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2017 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2017/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2017-%D0%B3.pdf?sfvrsn=4c3dc75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 3 квартал 2017 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2017/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2017-%D0%B3.pdf?sfvrsn=463dc75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2 квартал 2017 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2017/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-2017-%D0%B3.pdf?sfvrsn=4d3dc75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 1 квартал 2017 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2017/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2017-%D0%B3.pdf?sfvrsn=4c3dc75c_2',
          },
          {
            name: 'Отчёт по процессу обратной связи ТШО за 2016 г (pdf)',
            link: 'https://tengizchevroil.com/docs/default-source/fp-reports/rus/2016/%D0%BE%D1%82%D1%87%D1%91%D1%82-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D1%82%D1%88%D0%BE-%D0%B7%D0%B0-2016-%D0%B3.pdf?sfvrsn=443dc75c_2',
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.reports {
  margin-bottom: 80px;
  & .title {
    & .main {
      font-size: 38px !important;
    }
  }
  &__docs {
    margin-top: 40px;
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    @include tablet() {
      grid-template-columns: repeat(3, 1fr);
    }
    @include phone() {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
