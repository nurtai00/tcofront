<template>
  <div class="relations">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb40">
        <AtomsBreadOption to="/">
          {{ $t('relation.breadcrumbs[0]') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/career">
          {{ $t('relation.breadcrumbs[1]') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb40">{{ $t('relation.breadcrumbs[1]') }}</AtomsTitle>
    </div>
    <OrganismsSectionRelationsBlock1 />
    <OrganismsSectionRelationsBlock2 />
    <OrganismsSectionRelationsBlock3 />
    <OrganismsSectionNewsNewList />
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
