<template>
  <div class="container">
    <div class="error">
      <AtomsHeading type="h1">
        {{ Error }}
      </AtomsHeading>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    Error() {
      if (this.error.statusCode === 404) {
        return 'Page not found.'
      } else {
        return this.error.message
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  @include center;
}
</style>
