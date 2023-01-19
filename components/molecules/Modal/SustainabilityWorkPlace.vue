<template>
  <div class="work">
    <img
      class="work__img"
      :src="
        require(`@/assets/img/sustainability/work-places/${payload.imgSrc}`)
      "
      alt=""
    />
    <div class="work__content container">
      <AtomsHeading type="h3" color="black">
        {{ payload.title }}
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
<script>
export default {
  props: {
    payload: {
      type: Object,
    },
  },
}
</script>
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
