<template>
  <div class="career">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('career.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/career">
          {{ $t('career.career') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> {{ $t('career.career') }} </AtomsTitle>
      <AtomsTag v-for="(tag, idx) in tags" :key="idx" :tag="tag" />
    </div>
    <OrganismsSectionCareerBlock1 />
    <OrganismsSectionCareerBlock2 />
    <OrganismsSectionCareerBlock3 />
    <OrganismsSectionCareerBlock4 :content="content1" />
    <OrganismsSectionCareerBlock5 />
    <OrganismsSectionCareerBlock6 />
    <OrganismsSectionCareerBlock4
      class="future__tco"
      :content="content2"
      :background="true"
    />
    <OrganismsSectionCareerBlock7 />
    <OrganismsSectionCareerBlock8 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          text: this.$t('career.vacancy'),
          url: this.localePath('/vacancy'),
        },
        {
          text: this.$t('career.internship'),
          url: this.localePath('/career/internship'),
        },
      ],
      content1: {
        title: this.$t('career.content1'),
        text: `<p>${this.$t('career.content1_description')}</p>`,
        imgSrc: require('~/assets/img/career/programm_left.png'),
      },
      content2: {
        title: this.$t('career.content2'),
        text: `<ul type="disc">
          <li>${this.$t('career.content2_description')[0]}</li>
          <li>${this.$t('career.content2_description')[1]}
          <br/> ${this.$t('career.content2_description')[2]}</li>
          <li>${this.$t('career.content2_description')[3]}</li>
          <li>${this.$t('career.content2_description')[4]}</li>
          <li>${this.$t('career.content2_description')[5]}</li>
          <li>${this.$t('career.content2_description')[6]}</li>
          <li>${this.$t('career.content2_description')[7]}
          <br/> ${this.$t('career.content2_description')[8]}</li>
        </ul>`,
        imgSrc: require('~/assets/img/career/program_left_2.png'),
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.future__tco::v-deep {
  .programm_career_info {
    padding: 60px 0 0 0;
  }
}
</style>
