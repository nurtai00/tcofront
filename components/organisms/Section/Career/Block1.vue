<template>
  <div class="about_career">
    <img src="@/assets/img/career/block1_back.png" alt="" />
    <AtomsHeading type="h3" color="white">
      {{ $t('career.block1') }}
    </AtomsHeading>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about_career {
  position: relative;
  display: flex;
  margin-top: 32px;
  img {
    width: 100%;
    height: auto;
    max-height: 565px;
    object-fit: cover;
    @include tablet() {
      min-height: 260px;
      max-height: 100%;
    }
  }
  h3 {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 65px;
    text-align: center;

    max-width: 1025px;
    width: 100%;

    text-align: center;
    color: #fff !important;
    @media only screen and (max-width: 1025px) {
      max-width: 780px;
      padding: 0 16px;
      bottom: 20px;
    }
    @include tablet() {
      max-width: 560px;
    }
  }
}
</style>
