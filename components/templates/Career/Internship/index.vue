<template>
  <div class="internship">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('career.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/career">{{
          $t('career.career')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/career/internship">{{
          $t('career.intern.title')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb40"> {{ $t('career.internship') }} </AtomsTitle>
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
