<template>
  <div class="internship">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Главная</AtomsBreadOption>
        <AtomsBreadOption to="/career">Карьера</AtomsBreadOption>
        <AtomsBreadOption to="/career/internship">Стажировка</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb40"> Стажировка В ТШО </AtomsTitle>
    </div>
    <OrganismsSectionCareerInternshipStep />
    <OrganismsSectionCareerInternshipConditions />
    <OrganismsSectionCareerInternshipForm />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.internship {
  width: 100%;
}
</style>
