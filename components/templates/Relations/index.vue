<template>
  <div class="relations">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb40">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/career">Lender Relations</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb40"> Lender Relations </AtomsTitle>
    </div>
    <OrganismsSectionRelationsBlock1 />
    <OrganismsSectionRelationsBlock2 />
    <OrganismsSectionRelationsBlock3 />
    <OrganismsSectionRelationsBlock4 />
  </div>
</template>

<style lang="scss" scoped>
.relations {
  width: 100%;
  .mb40 {
    @include tablet() {
      margin-bottom: 20px;
    }
  }
}
</style>
