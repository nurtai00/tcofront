<template>
  <div class="privacy__content">
    <div class="content">
      <AtomsHeading type="h3">{{ $t('privacy.block1.title') }}</AtomsHeading>
      <p class="content__description">
        {{ $t('privacy.block1.description') }}
      </p>
    </div>
    <img src="@/assets/img/privacy/block1.jpg" alt="document" />
  </div>
</template>

<style lang="scss" scoped>
.privacy {
  &__content {
    display: flex;
    gap: 120px;
    img {
      max-width: 100%;
      height: auto;
    }
    @include tablet() {
      flex-direction: column-reverse;
      gap: 20px;
      img {
        width: 138px;
        height: 164px;
      }
    }
    & .content {
      &__description {
        margin-top: 20px;
        @include tablet() {
          margin-top: 12px;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
