<template>
  <section class="section--blue">
    <div class="container">
      <div class="about_block6">
        <AtomsTitle small :point="false">
          {{ $t('company.block_4.title') }}
        </AtomsTitle>
        <nuxt-link :to="localePath('/about/figures')">{{
          $t('home.block_3.link')
        }}</nuxt-link>
      </div>
      <div class="tco__files">
        <a class="item" :href="links[$i18n.locale][0].link" target="_blank">
          <img :width="95" src="@/assets/img/pdf.png" />
          {{ $t('company.block_4.items[0]') }}
        </a>
        <a class="item" :href="links[$i18n.locale][1].link" target="_blank">
          <img :width="55" src="@/assets/img/pdf.png" />
          {{ $t('company.block_4.items[1]') }}
        </a>
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
            name: '2021-отчет-о-корпоративной-ответственности.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU%2F2021%2D%D0%BE%D1%82%D1%87%D0%B5%D1%82%2D%D0%BE%2D%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9%2D%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU',
          },
          {
            name: '3-квартал.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU%2F3%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU',
          },
          {
            name: 'tco-way_rus.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU%2Ftco%2Dway%5Frus%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FRU',
          },
        ],
        en: [
          {
            name: '2021-corporate-responsibility-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN%2F2021%2Dcorporate%2Dresponsibility%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN',
          },
          {
            name: '3-quarter.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN%2F3%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN',
          },
          {
            name: 'tco-way_eng.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN%2Ftco%2Dway%5Feng%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FEN',
          },
        ],
        kk: [
          {
            name: '2021-корпоративтік-жауапкершілік-туралы-есеп.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ%2F2021%2D%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D1%82%D1%96%D0%BA%2D%D0%B6%D0%B0%D1%83%D0%B0%D0%BF%D0%BA%D0%B5%D1%80%D1%88%D1%96%D0%BB%D1%96%D0%BA%2D%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8B%2D%D0%B5%D1%81%D0%B5%D0%BF%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ',
          },
          {
            name: '3-ші-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ%2F3%2D%D1%88%D1%96%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ',
          },
          {
            name: 'tco-way_kaz.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ%2Ftco%2Dway%5Fkaz%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FCompany%20page%2FKAZ',
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
