<template>
  <div class="about_career container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.block2_header') }}
    </AtomsHeading>
    <div class="about_career_block">
      <p class="block_p">
        {{ $t('career.block2_about') }}
      </p>
      <div class="info">
        <AtomsTag
          :tag="{
            text: $t('career.block2_tag'),
            url: '/about',
            selected: true,
          }"
        />
        <div class="info_block">
          <img src="@/assets/icons/vacancy.png" alt="" />
          <AtomsHeading type="h5" color="main">
            {{ $t('career.block2_heading') }}
          </AtomsHeading>
          <p>{{ $t('career.block2_heading_description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about_career {
  width: 100%;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 16px;
  }
  h3 {
    max-width: 776px;
    margin-bottom: 40px;
    @include tablet() {
      margin-bottom: 20px;
    }
  }
  &_block {
    display: flex;
    flex-direction: row;
    .block_p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
      @include tablet() {
        font-size: 16px;
        line-height: 22px;
      }
    }
    @include tablet() {
      flex-direction: column-reverse;
    }
  }
}
.info {
  margin-left: 24px;
  @include tablet() {
    margin-left: 0;
    margin-bottom: 20px;
  }
}
.info_block {
  width: 376px;

  display: flex;
  flex-direction: column;

  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;

  @include tablet() {
    width: 100%;
    margin-top: 12px;
    padding: 40px 30px 55px;
  }
  img {
    width: 64px;
  }
  h5 {
    margin: 20px 0;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #30454e;
    @include tablet() {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
