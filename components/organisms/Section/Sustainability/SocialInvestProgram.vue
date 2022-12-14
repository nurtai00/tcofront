<template>
  <div class="program">
    <div class="container program__content">
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
    <img
      class="program__img"
      src="@/assets/img/operation/operations1.png"
      alt="building"
    />
  </div>
</template>
<style lang="scss" scoped>
.program {
  display: flex;
  gap: 72px;
  max-height: 650px;
  &__content {
    padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
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
  img {
    width: 100%;
    height: auto;
  }
  @include tablet {
    flex-direction: column-reverse;
    gap: 15px;
    max-height: 100%;
    &__content {
      padding: 40px 16px;
    }
    &__description {
      p {
        font-size: 16px;
      }
    }
    &__img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
