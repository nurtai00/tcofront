<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h2" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <p>{{ payload.text }}</p>
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
  h2 {
    margin: 20px 0 40px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
  }
}
</style>
