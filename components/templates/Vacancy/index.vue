<template>
  <div class="vacancy">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">
          {{ $t('vacancy.breadcrumbs[0]') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/career">
          {{ $t('vacancy.breadcrumbs[1]') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/career/vacancy">
          {{ $t('vacancy.breadcrumbs[2]') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle>{{ $t('vacancy.breadcrumbs[2]') }}</AtomsTitle>
    </div>
    <OrganismsSectionVacancyBlock1 />
    <OrganismsSectionVacancyBlock2 />
    <!-- <OrganismsSectionVacancyBlockDeclaration /> -->
    <!-- <OrganismsSectionVacancyBlock3 /> -->
    <!--    <OrganismsSectionVacancyBlock4 />-->
    <div class="container">
      <iframe
        height="850"
        width="100%"
        style="border: medium none; padding-top: 20px"
        src="https://tengizchevroil.amris.com/wizards_v2/tengiz/vacancySearch.php"
      ></iframe>
    </div>
    <!-- <OrganismsSectionVacancyBlock5 />
    <OrganismsSectionVacancyBlock6 /> -->
    <!--    <OrganismsSectionVacancyBlock7 />-->
  </div>
</template>
