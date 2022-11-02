<template>
  <div class="career">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/career">Career</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> Карьера </AtomsTitle>
      <AtomsTag v-for="(tag, idx) in tags" :key="idx" :tag="tag" />
    </div>
    <OrganismsSectionCareerBlock1 />
    <OrganismsSectionCareerBlock2 />
    <OrganismsSectionCareerBlock3 />
    <OrganismsSectionCareerBlock4 />
    <OrganismsSectionCareerBlock5 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          text: 'Вакансии',
          url: '123',
        },
        {
          text: 'Стажировка В ТШО',
          url: '123',
        },
      ],
    }
  },
}
</script>
