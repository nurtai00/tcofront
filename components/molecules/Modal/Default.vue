<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <p class="default_modal_text" v-html="payload.text"></p>
    <template v-if="!!payload.imgSrc && payload.imgSrc.length">
      <img :src="require(`@/assets/img/${payload.imgSrc}`)" alt="img" />
    </template>
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
    @include tablet() {
      margin: 20px 0;
    }
  }
  img {
    margin-top: 20px;
    max-width: 100%;
  }
}
</style>
