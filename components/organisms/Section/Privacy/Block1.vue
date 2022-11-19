<template>
  <div class="privacy__content">
    <div class="content">
      <AtomsHeading type="h3">Введение</AtomsHeading>
      <p class="content__description">
        ТОО «Тенгизшевройл» гарантирует защиту Вашей личной информации. Это
        Положение объясняет шаги, которые мы осуществляем для защиты
        персональных данных, а также для защиты любой другой информации,
        поступающей на наш Веб-сайт. Из данного Положения явствует, какого рода
        информацию мы отбираем, с какой целью мы используем ту или иную
        информацию, в данном Положении указаны Ваши альтернативы в отношении
        использования Ваших персональных данных, меры безопасности,
        предпринимаемые нами, а также представлены разъяснения о том, как Вы
        сможете запросить просмотр и корректировку своих персональных данных.
        Войдя на наш Веб-сайт, Вы тем самым даете своё согласие на сбор
        персональных данных о Вас и на использование методов, описанных в данном
        Положении.
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
