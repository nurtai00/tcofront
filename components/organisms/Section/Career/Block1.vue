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
  display: flex;
  margin-top: 32px;
  overflow: hidden;
  position: relative;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    line-height: 46px;
    max-width: 900px;
    color: #fff;
    @media only screen and (max-width: 1025px) {
      max-width: 780px;
      padding: 0 16px;
      bottom: 20px;
    }
    @media only screen and (max-width: 1700px) {
      padding: 0 16px;
      bottom: 20px;
    }
    @media only screen and (max-width: 1400px) {
      padding: 0 16px;
      bottom: 20px;
    }
    @include tablet() {
      font-size: 22px;
      line-height: 25px;
      max-width: 560px;
    }
    @include phone {
      position: static;
      transform: translateX(0);
      font-size: 18px;
      line-height: 28px;
      max-width: 560px;
      color: $c-tco1;
      padding-bottom: 20px;
    }
  }
}
</style>
