<template>
  <AtomsModalContainer v-if="modals.length">
    <component
      :is="`MoleculesModal${item.title}`"
      v-for="item in modals"
      v-show="item.id === modals.length"
      :key="item.id"
    />
  </AtomsModalContainer>
</template>

<script>
export default {
  computed: {
    modals() {
      return this.$store.state.modal.modals
    },
  },
}
</script>
