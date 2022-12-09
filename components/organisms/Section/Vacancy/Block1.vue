<template>
  <div class="container">
    <div class="vacancy__list">
      <div class="vacancy__info">
        <AtomsHeading type="h3">{{ $t('vacancy.block_1.title') }}</AtomsHeading>
        <div class="vacancy__info-description">
          <p v-html="$t('vacancy.block_1.text')"></p>
        </div>
      </div>
      <img src="@/assets/img/vacancy/block1.png" alt="person" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vacancy {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    img {
      width: 320px;
      height: 272px;
    }
    @include tablet() {
      flex-direction: column-reverse;
      justify-content: flex-start;
      margin-top: 20px;
      img {
        max-width: 260px;
        height: auto;
      }
    }
  }
  &__info {
    width: 100%;
    max-width: 776px;
    margin-right: 20px;
    @include tablet() {
      max-width: 100%;
      margin-right: 0;
      margin-top: 20px;
    }
    &-description {
      margin-top: 40px;
      @include tablet() {
        margin-top: 20px;
      }
      p {
        &:not(:first-child) {
          margin-top: 20px;
          @include tablet() {
            margin-top: 12px;
          }
        }
        @include tablet() {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
