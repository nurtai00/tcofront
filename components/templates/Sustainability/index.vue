<template>
  <div class="sustainability">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">
          {{ $t('suistainability.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/Sustainability">
          {{ $t('suistainability.title') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> {{ $t('suistainability.title') }}</AtomsTitle>
      <AtomsTag
        v-for="tag of tags"
        :key="tag.id"
        :tag="tag"
        @click="onTag(tag.offsetTop)"
      />
    </div>
    <OrganismsSectionSustainabilityImpactPopulation />
    <OrganismsSectionSustainabilityEcology ref="ecology" />
    <OrganismsSectionSustainabilityLandScaping />
    <OrganismsSectionSustainabilitySocialInvest ref="socialInvest" />
    <OrganismsSectionSustainabilitySocialInvestProgram />
    <OrganismsSectionSustainabilityWorkPlaces />
    <OrganismsSectionSustainabilityMapProjects />
    <OrganismsSectionSustainabilitySocialProgramInvest />
    <OrganismsSectionSustainabilityRateRequirement />
    <OrganismsSectionSustainabilityProjectSelection />
    <OrganismsSectionSustainabilityGift />
    <OrganismsSectionSustainabilityNews />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: this.$t('suistainability.ecologyText'),
          offsetTop: null,
        },
        {
          id: 2,
          text: this.$t('suistainability.invest'),
          offsetTop: null,
        },
      ],
    }
  },
  mounted() {
    this.tags[0].offsetTop = this.$refs?.ecology?.$el?.offsetTop
    this.tags[1].offsetTop = this.$refs?.socialInvest?.$el?.offsetTop
  },
  methods: {
    onTag(offsetTop) {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    },
  },
}
</script>
