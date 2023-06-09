<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <ul>
      <li v-for="(list, index) of payload.list" :key="index + list">
        {{ list }}
      </li>
    </ul>
    <AtomsFile
      v-if="payload.fileLink"
      :file="fileLink"
      :text="$t('suistainability.projectSelection.section.left.fileLink[1]')"
      icon="doc"
    />
    <AtomsFile
      v-if="payload.fileLink"
      :file="fileLink2"
      :text="$t('suistainability.projectSelection.section.left.fileLink2[1]')"
      icon="xls"
    />
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fileLink() {
      const mapOfFileLinkUrl = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/ru/04-шаблон-предложения.docx?sfvrsn=96e9c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/kk/04-ұсыныс-үлгісі.docx?sfvrsn=f1e9c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/en/04-proposal-template.docx?sfvrsn=dce9c55c_2',
      }
      return mapOfFileLinkUrl[this.$i18n.locale]
    },
    fileLink2() {
      const mapOfFileLink = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/05-tco-grant-budget-template_erk.xlsx?sfvrsn=27e9c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/05-tco-grant-budget-template_erk.xlsx?sfvrsn=27e9c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/sustainability-page/05-tco-grant-budget-template_erk.xlsx?sfvrsn=27e9c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    }
  },
}
</script>

<style lang="scss" scoped>
.career_motivation_popup {
  width: 100%;
  max-width: 696px;
  h3 {
    margin: 20px 0 40px;
    @include tablet() {
      margin: 20px 0;
    }
  }
  img {
    margin-top: 0px !important;
    max-width: 100%;
  }
  ul {
    margin-left: 20px;
    margin-bottom: 20px;
    li {
      list-style: disc;
      font-size: 20px;
      color: $c-text;
      line-height: 32px;
      font-family: Roboto, sans-serif;
      font-weight: 300;
    }
  }
}
</style>
