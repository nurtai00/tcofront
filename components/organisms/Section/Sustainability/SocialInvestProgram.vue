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
    <div class="program__img">
      <img src="@/assets/img/operation/operations1.png" alt="building" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.program {
  display: flex;
  position: relative;
  &__content {
    position: relative;
    padding: 80px 60px 80px calc(var(--width-container) / 3);
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
    width: 50%;
    position: relative;
    max-width: calc(var(--width-container) - 50%);
    //max-height: 700px;
    right: calc((var(--width-container) - 100vw) / 2);
    img {
      width: 100%;
      height: 100%;
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
