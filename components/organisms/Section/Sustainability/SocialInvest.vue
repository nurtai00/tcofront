<template>
  <div class="invest">
    <div class="container">
      <AtomsHeading class="invest__title" type="h3">
        {{ $t('suistainability.socialInvest.title') }}
      </AtomsHeading>
      <div class="invest__content">
        <p class="invest__description">
          {{ $t('suistainability.socialInvest.description') }}
        </p>
        <img
          src="@/assets/img/sustainability/invest/background.png"
          alt="invest-bg"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.invest {
  background-color: #f2f6f7;
  padding: 80px 0;
  &__title {
    text-align: center;
  }
  &__content {
    margin-top: 40px;
    display: flex;
  }
  &__description {
    flex-basis: 70%;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
  @include tablet {
    padding: 40px 0;
    &__content {
      flex-direction: column-reverse;
      gap: 40px;
    }
    &__description {
      font-size: 16px;
    }
  }
}
</style>
