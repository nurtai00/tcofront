<template>
  <div class="program">
    <div class="container program__content">
      <AtomsFlatHeading
        title="Программа социально-инфраструктурного развития «Игілік»"
        @click="$router.push(`/sustainability/igilik`)"
      />
      <div class="program__description">
        <p>
          Программа «Игилик» направлена на строительство объектов социальной
          инфраструктуры (детские сады, школы, спортивные сооружения, парки и т.
          п.) в Атырауской области.
        </p>
        <p>
          После завершения соцпрограммы «Бонус Фонд Атырау» (1993-1998) с
          размером инвестиций 50 млн долларов США, в 1999 году стартовала
          обновленная Программа социально-инфраструктурного развития «Игилик»,
          ежегодный бюджет которой с 2013 года составляет 25 млн долларов США.
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
  &__content {
    padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
  }
  &__description {
    margin-top: 40px;
    color: $c-text;
    font-size: 20px;
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
