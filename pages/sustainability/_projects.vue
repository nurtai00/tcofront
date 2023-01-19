<template>
  <TemplatesSustainabilityProjects />
</template>
<script>
const availableDynamicProjectPages = ['igilik', 'psi']
export default {
  validate({ params }) {
    return availableDynamicProjectPages.includes(params.projects)
  },
}
</script>
