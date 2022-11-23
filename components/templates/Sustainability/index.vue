<template>
  <div class="sustainability">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Главная</AtomsBreadOption>
        <AtomsBreadOption to="/Sustainability">
          Устойчивость
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20">Sustainability</AtomsTitle>
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
        { id: 1, text: 'Экология' },
        { id: 2, text: 'Социальные инвестиции' },
      ],
    }
  },
}
</script>
