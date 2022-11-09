<template>
  <div class="about_career">
    <img src="@/assets/img/career/block1_back.png" alt="" />
    <AtomsHeading type="h3" color="white">
      2021 - "Тенгизшевройл" второй год подряд назван самым привлекательным
      работодателем Казахстана по версии Randstad Employer Brand Research
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
  }
}
</style>
