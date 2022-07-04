<template>
  <ul>
    <!-- @slot Сами крошки (ссылки) -->
    <slot></slot>
  </ul>
</template>

<script>
/**
 * Хлебные крошки для навигации, только для ПК
 * @displayName Breadcrumbs
 */
export default {
  name: 'Breadcrumbs',
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  overflow: hidden;
  max-width: 75%;
}
</style>
