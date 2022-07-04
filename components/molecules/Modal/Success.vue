<template>
  <div class="mod">
    <AtomsHeading type="h3" color="blue"> Success!!! </AtomsHeading>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$modal.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.mod {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
}
</style>
