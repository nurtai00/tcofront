<template>
  <div class="programm_career">
    <div class="wrapper container">
      <div class="programm_career-img">
        <img :src="content.imgSrc" alt="" class="desc_img" />
      </div>
      <div class="mobile">
        <img :src="content.imgSrc" alt="" />
        <AtomsHeading type="h3" color="white">
          {{ content.title }}
        </AtomsHeading>
      </div>
      <div class="programm_career_info" :class="{ background: background }">
        <AtomsHeading type="h3" color="main">
          {{ content.title }}
        </AtomsHeading>
        <div class="description" v-html="content.text"></div>
      </div>
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
  background: #f2f6f7 !important;
}
.programm_career_info {
  padding-top: 0;
}
.wrapper {
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @include tablet() {
    flex-direction: column;
    .desc_img {
      display: none;
    }
  }
  &-img {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include tablet() {
        width: 100%;
      }
    }
  }
  &_info {
    width: 50%;
    padding: 80px 0;
    @include tablet() {
      width: 100%;
      padding: 20px 16px !important;
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
    img {
      width: 100%;
    }
  }
  @include phone {
    width: calc(100% + 32px);
    margin-left: -16px;
    h3 {
      left: 10px;
    }
    img {
      filter: brightness(0.6);
    }
  }
}
</style>
