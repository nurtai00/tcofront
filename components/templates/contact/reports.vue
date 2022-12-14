<template>
  <div class="reports">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('contact.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact">{{
          $t('contact.contact')
        }}</AtomsBreadOption>
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
            name: '1q2017-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1q2017%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '1q2020-grievance-mechnism-report_e.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1q2020%2Dgrievance%2Dmechnism%2Dreport%5Fe%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '1q2021-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1q2021%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '1q-2022-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1q%2D2022%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '1q-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1q%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '1-quarter-grievance-mechanism-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F1%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2016-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2016%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2q-2017-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2q%2D2017%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2q-2022-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2q%2D2022%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2q-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2q%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2-quarter-grievance-mechanism-report (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2-quarter-grievance-mechanism-report (2).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '2-quarter-grievance-mechanism-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F2%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3q2017-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3q2017%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3q2019-tco-feedback-process-report_e.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3q2019%2Dtco%2Dfeedback%2Dprocess%2Dreport%5Fe%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3q-2021-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3q%2D2021%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3q-2022-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3q%2D2022%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3q-tco-feedback-process-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3q%2Dtco%2Dfeedback%2Dprocess%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3-quarter.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3-quarter-grievance-mechanism-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3-квартал.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '3-ші-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F3%2D%D1%88%D1%96%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '4-quarter-grievance-mechanism-report (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F4%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
          {
            name: '4-quarter-grievance-mechanism-report.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN%2F4%2Dquarter%2Dgrievance%2Dmechanism%2Dreport%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FEN',
          },
        ],
        kk: [
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-2016-жыл-бойынша-есебі.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D2016%2D%D0%B6%D1%8B%D0%BB%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-2017-жыл-бойынша-есебі.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D2017%2D%D0%B6%D1%8B%D0%BB%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-2018-жыл-бойынша-есебі.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D2018%2D%D0%B6%D1%8B%D0%BB%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-4-тоқсан-бойынша-есебі (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D4%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-4-тоқсан-бойынша-есебі.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D4%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2017-ж-1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2017%2D%D0%B6%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2017-ж-2-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2017%2D%D0%B6%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2017-ж-3-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2017%2D%D0%B6%2D3%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2019-ж-1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2019%2D%D0%B6%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2019-ж-2-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2019%2D%D0%B6%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2019-ж-3-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2019%2D%D0%B6%2D3%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2020-ж-1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2020%2D%D0%B6%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2020-ж-2-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2020%2D%D0%B6%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2020-ж-3-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2020%2D%D0%B6%2D3%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2021-ж.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2021%2D%D0%B6%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2021-ж-1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2021%2D%D0%B6%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2021-ж-2-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2021%2D%D0%B6%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2021-ж-3-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2021%2D%D0%B6%2D3%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2022-ж-1-тоқсаны.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2022%2D%D0%B6%2D1%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%D1%8B%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2022-ж-2-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2022%2D%D0%B6%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2022-ж-3-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---2-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D2%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
          {
            name: 'тшо-ның-кері-байланыс-үдерісі-бойынша-есебі---3-тоқсан.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ%2F%D1%82%D1%88%D0%BE%2D%D0%BD%D1%8B%D2%A3%2D%D0%BA%D0%B5%D1%80%D1%96%2D%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D1%8B%D1%81%2D%D2%AF%D0%B4%D0%B5%D1%80%D1%96%D1%81%D1%96%2D%D0%B1%D0%BE%D0%B9%D1%8B%D0%BD%D1%88%D0%B0%2D%D0%B5%D1%81%D0%B5%D0%B1%D1%96%2D%2D%2D3%2D%D1%82%D0%BE%D2%9B%D1%81%D0%B0%D0%BD%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FKAZ',
          },
        ],
        ru: [
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-1-квартал-2022-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D1%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2022%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2016-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2016%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2017-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2017%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2018-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2018%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2019-год.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2019%2D%D0%B3%D0%BE%D0%B4%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2020-год.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2020%2D%D0%B3%D0%BE%D0%B4%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2021-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2021%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-2-квартал-2022-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D2%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2022%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-3-квартал-2021-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D3%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2021%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-3-квартал-2022-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D3%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2022%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-второй-квартал (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-второй-квартал (2).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-второй-квартал (3).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%283%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-второй-квартал.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-второй-квартал-2017-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2017%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-первый-квартал (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-первый-квартал (2).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-первый-квартал (3).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%283%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-первый-квартал.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-первый-квартал-2017-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2017%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-третий-квартал (1).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-третий-квартал (2).pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-третий-квартал.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
          },
          {
            name: 'отчёт-по-процессу-обратной-связи-тшо-за-третий-квартал-2017-г.pdf',
            link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU%2F%D0%BE%D1%82%D1%87%D1%91%D1%82%2D%D0%BF%D0%BE%2D%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%2D%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9%2D%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%2D%D1%82%D1%88%D0%BE%2D%D0%B7%D0%B0%2D%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9%2D%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2D2017%2D%D0%B3%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FContacts%20page%2FFEEDBACK%20PAGE%2FRU',
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
