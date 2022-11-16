<template>
  <TemplatesSustainabilityProjects />
</template>
<script>
const availableDynamicProjectPages = ['igilik', 'psi']
export default {
  validate({ params }) {
    if (availableDynamicProjectPages.includes(params.projects)) {
      return true
    }
    return false
  },
}
</script>
