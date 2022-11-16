<template>
  <div class="work">
    <img
      class="work__img"
      src="@/assets/img/sustainability/work-places/popup-bg.jpg"
      alt=""
    />
    <div class="work__content container">
      <AtomsHeading type="h3" color="black">
        Центральная больница в г. Кульсары
      </AtomsHeading>
      <p>
        Будет описание и фото по статусу проекта. Будет описание и фото по
        статусу проекта. Будет описание и фото по статусу проекта. Будет
        описание и фото по статусу проекта. Будет описание и фото по статусу
        проекта. Будет описание и фото по статусу проекта. Будет описание и фото
        по статусу проекта. Будет описание и фото по статусу проекта. Будет
        описание и фото по статусу проекта.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work {
  &__img {
    width: 100%;
    border-radius: 4px;
  }
  &__content {
    margin-top: 40px;
    p {
      display: block;
      margin-top: 20px;
      font-size: 20px;
    }
  }
  @include phone {
    &__content {
      margin-top: 20px;
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
