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
      <AtomsTag v-for="tag of tags" :key="tag.id" :tag="tag" />
    </div>
    <OrganismsSectionSustainabilityImpactPopulation />
    <OrganismsSectionSustainabilityEcology />
    <OrganismsSectionSustainabilityLandScaping />
    <OrganismsSectionSustainabilitySocialInvest />
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
        { id: 1, text: this.$t('suistainability.ecologyText') },
        { id: 2, text: this.$t('suistainability.invest') },
      ],
    }
  },
}
</script>
