<template>
  <section class="section--blue">
    <div class="container">
      <div class="about_block6">
        <AtomsTitle small :point="false">
          {{ $t('company.block_4.title') }}
        </AtomsTitle>
        <nuxt-link :to="localePath('/about/figures')">
          {{ $t('home.block_3.link') }}
        </nuxt-link>
      </div>
      <div class="tco__files">
        <a class="item" :href="links[$i18n.locale][0].link" target="_blank">
          <img :width="95" src="@/assets/img/pdf.png" />
          {{ $t('company.block_4.items[0]') }}
        </a>
        <!--        <a class="item" :href="links[$i18n.locale][1].link" target="_blank">-->
        <!--          <img :width="55" src="@/assets/img/pdf.png" />-->
        <!--          {{ $t('company.block_4.items[1]') }}-->
        <!--        </a>-->
        <a class="item" :href="links[$i18n.locale][2].link" target="_blank">
          <img :width="55" src="@/assets/img/pdf.png" />
          {{ $t('company.block_4.items[2]') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock6',

  data() {
    return {
      links: {
        ru: [
          {
            name: '1 квартал',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2023/tco-fact-sheet-1q-2023_r_final.pdf?sfvrsn=dcebc55c_2',
          },
          {
            name: 'tco-way_rus.pdf',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/ru/tco-way_rus.pdf?sfvrsn=3115c55c_2',
          },
          {
            name: 'Отчет о корпоративной ответственности',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/ru/verstka_rus_min.pdf?sfvrsn=22e4c55c_2',
          },
        ],
        en: [
          {
            name: '1 quarter',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2023/tco-fact-sheet-1q-2023_e_final.pdf?sfvrsn=4ebc55c_2',
          },
          {
            name: 'tco-way_eng.pdf',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/en/tco-way_eng.pdf?sfvrsn=4315c55c_2',
          },
          {
            name: 'The Corporate Responsibility Report for 2022',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/en/verstka_eng_min.pdf?sfvrsn=68e4c55c_2',
          },
        ],
        kk: [
          {
            name: '1-ші тоқсан',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2023/tco-fact-sheet-1q-2023_k_final.pdf?sfvrsn=38ebc55c_2',
          },
          {
            name: 'tco-way_kaz.pdf',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/company-page/kk/tco-way_kaz.pdf?sfvrsn=941ac55c_2',
          },
          {
            name: '2022 ж. корпоративтік жауапкершілік туралы есеп',
            link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/kk/verstka_kaz_min.pdf?sfvrsn=de4c55c_2',
          },
        ],
      },
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" v-deep scoped>
.about_block6 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #00b0f0;
  }
}
.tco {
  &__files {
    display: flex;
    gap: 70px;
    padding: 25px 0;
    @media (max-width: 682px) {
      flex-direction: row;
      align-items: flex-start;
      overflow-x: scroll;
      height: 150px;
      overflow-y: hidden;
      width: calc(100vw - 32px);
    }
    @media (orientation: portrait) {
      height: 100%;
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
      max-width: 178px;
      text-decoration-line: underline;
      @media (max-width: 682px) {
        flex-direction: column;
        align-items: center;
      }
      @media (orientation: portrait) {
        flex-direction: column;
        align-items: flex-start;
        max-width: calc(50vw - 16px);
      }
      color: #00b0f0;
      img {
        width: 120px;
        height: 164px;
        @media (orientation: portrait) {
          width: 50px;
          height: 66px;
        }
      }
    }
  }
}
</style>
