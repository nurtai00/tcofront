<template>
  <div class="program container">
    <div class="program__content">
      <AtomsFlatHeading
        :title="$t('suistainability.socialInvestProgram.title')"
        @click="$router.push(localePath(`/sustainability/igilik`))"
      />
      <div class="program__description">
        <p>{{ $t('suistainability.socialInvestProgram.description.one') }}</p>
        <p>
          {{ $t('suistainability.socialInvestProgram.description.two') }}
        </p>
      </div>
    </div>
    <div class="program__img">
      <img src="@/assets/img/sustainability/block-4.png" alt="building" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.program {
  display: flex;
  gap: 60px;
  height: 100%;
  &__content {
    width: 50%;
  }
  &__description {
    margin-top: 40px;
    color: $c-text;
    font-size: 20px;
    font-weight: 400;
    p:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    max-height: 600px;
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      flex-shrink: 1;
    }
  }

  @include tablet {
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 15px;
    max-height: 100%;
    &__content {
      padding: 40px 16px;
      left: 0;
      width: 100%;
    }
    &__description {
      width: 100%;
      p {
        font-size: 16px;
      }
    }
    &__img {
      width: 100%;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
