<template>
  <div class="about_career container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.block2_header') }}
    </AtomsHeading>
    <div class="about_career_block">
      <p>
        {{ $t('career.block2_about') }}
      </p>
      <div class="info">
        <AtomsTag
          :tag="{
            text: $t('career.block2_tag'),
            url: '123',
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
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #30454e;
    }
    @include tablet() {
      flex-direction: column-reverse;
      p {
        font-size: 16px;
        line-height: 22px;
      }
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
}
</style>
