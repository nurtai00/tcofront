<template>
  <div class="programm_career">
    <img src="@/assets/img/career/programm_left.png" alt="" />
    <div class="programm_career_info" :class="{ background: background }">
      <AtomsHeading type="h2" color="main"> {{ content.title }} </AtomsHeading>
      <div v-html="content.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    background: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.programm_career {
  width: 100%;
  display: flex;
  img {
    width: 50%;
    height: auto;
    max-height: 572px;
    object-fit: cover;
  }
  &_info {
    width: 50%;
    padding: 80px 40px;
    h2 {
      width: 100%;
      max-width: 548px;
      margin-bottom: 40px;
    }
  }
}
.background {
  background: #f2f6f7 !important;
}
</style>
