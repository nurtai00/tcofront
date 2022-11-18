<template>
  <div class="invest">
    <div class="container">
      <AtomsHeading class="invest__title" type="h3">
        Социальные инвестиции
      </AtomsHeading>
      <div class="invest__content">
        <p class="invest__description">
          Социальные инициативы Тенгизшевройл (ТШО) направлены на стимулирование
          и раскрытие безграничного потенциала каждого жителя и сообществ
          Атырауской области. ТШО стремится расширять возможности для людей,
          обеспечивая доступность и усовершенствование систем здравоохранения,
          образования и экономического развития.
        </p>
        <img
          src="@/assets/img/sustainability/invest/background.svg"
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
