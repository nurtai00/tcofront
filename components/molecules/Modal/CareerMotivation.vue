<template>
  <div class="career_motivation_popup">
    <pre>{{ payload }}</pre>
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
  }
}
</style>
