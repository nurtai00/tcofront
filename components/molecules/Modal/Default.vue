<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <p class="default_modal_text" v-html="payload.text"></p>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.career_motivation_popup {
  width: 100%;
  max-width: 696px;
  h3 {
    margin: 20px 0 40px;
  }
}
</style>
