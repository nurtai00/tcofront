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
  overflow: hidden;
  @include phone {
    flex-direction: column-reverse;
  }
  img {
    width: 100%;
    height: auto;
    max-height: 1000px;
    @include tablet() {
      min-height: 260px;
      max-height: 100%;
    }
  }
  h3 {
    position: absolute;
    margin: auto;
    left: 50%;
    bottom: 100px;
    text-align: center;
    line-height: 46px;
    max-width: 900px;
    width: 100%;
    color: #fff;
    @media only screen and (max-width: 1025px) {
      max-width: 780px;
      padding: 0 16px;
      bottom: 20px;
      left: 25%;
    }
    @media only screen and (max-width: 1700px) {
      padding: 0 16px;
      bottom: 20px;
      left: 40%;
    }
    @media only screen and (max-width: 1400px) {
      padding: 0 16px;
      bottom: 20px;
      left: 25%;
    }
    @include tablet() {
      left: 0;
      right: 0;
      font-size: 26px;
      line-height: 20px;
      max-width: 560px;
    }
    @include phone {
      position: static;
      font-size: 18px;
      line-height: 28px;
      max-width: 560px;
      color: $c-tco1;
      padding-bottom: 20px;
    }
  }
}
</style>
