<template>
  <div class="programm_career">
    <img src="@/assets/img/career/programm_left.png" alt="" class="desc_img" />
    <div class="mobile">
      <img src="@/assets/img/career/programm_mobile.png" alt="" />
      <AtomsHeading type="h3" color="white"> {{ content.title }} </AtomsHeading>
    </div>
    <div class="programm_career_info" :class="{ background: background }">
      <AtomsHeading type="h3" color="main"> {{ content.title }} </AtomsHeading>
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
  @include tablet() {
    flex-direction: column;
    .desc_img {
      display: none;
    }
  }
  img {
    width: 50%;
    height: auto;
    object-fit: cover;
    @include tablet() {
      width: 100%;
    }
  }
  &_info {
    width: 50%;
    padding: 80px 40px;
    @include tablet() {
      width: 100%;
      padding: 20px 16px;
    }
    h3 {
      width: 100%;
      max-width: 548px;
      margin-bottom: 40px;
      @include tablet() {
        display: none;
      }
    }
  }
}
.background {
  background: #f2f6f7 !important;
}
.mobile {
  position: relative;
  display: none;
  h3 {
    position: absolute;
    top: 40px;
    left: 16px;
  }
  @include tablet() {
    display: flex;
  }
}
</style>
